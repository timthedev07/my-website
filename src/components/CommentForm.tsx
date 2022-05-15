import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  ChangeEvent,
  FC,
  FormEventHandler,
  useEffect,
  useState,
  useRef,
} from "react";
import { BlogComment } from "../mongodb/models/BlogComment";
import { hasNoAlphanumeric } from "../utils/regex";
import { Spinner } from "./svgs/Spinner";

interface CommentFormProps {
  className?: string;
  blogId: string;
  onSuccess?: Function;
}

export type BlogFormData = Omit<
  Omit<Omit<BlogComment, "isAnonymous">, "id">,
  "timestamp"
>;

export const CommentForm: FC<CommentFormProps> = ({
  className = "",
  blogId,
  onSuccess = () => {},
}) => {
  const [showWholeForm, setShowWholeForm] = useState<boolean>(false);
  const { data: session } = useSession();
  const loggedIn = !!session?.user;
  const textareaRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const userName = session?.user?.name || "";
  const userEmail = session?.user?.email || "";

  const [formData, setFormData] = useState<BlogFormData>({
    blogId,
    comment: "",
    commenterName: "",
    commenterEmail: "",
  });

  const [formError, setFormError] = useState<
    Record<keyof BlogFormData, boolean>
  >({
    comment: false,
    blogId: false,
    commenterName: false,
    commenterEmail: false,
  });

  useEffect(() => {
    if (showWholeForm && textareaRef.current) {
      textareaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [showWholeForm]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    let isAlias = false;

    const updatedFormData = {
      ...formData,
      commenterEmail: userEmail,
    };
    if (updatedFormData.commenterName === "") {
      updatedFormData.commenterName = userName;
      isAlias = true;
    }

    const errors = {
      comment: !formData.comment || hasNoAlphanumeric(formData.comment),
    };
    console.log(errors);
    setFormError((prev) => ({ ...prev, ...errors }));

    if (Object.values(errors).findIndex((val) => val === true) >= 0) {
      setLoading(false);
      return;
    }

    const response = await fetch(`/api/comments/new`, {
      body: JSON.stringify({
        ...updatedFormData,
        isAlias,
      }),
      method: "POST",
    });

    if (response.ok) {
      onSuccess();
      setShowWholeForm(false);
      setFormData({
        blogId,
        comment: "",
        commenterName: "",
      });
    }

    setLoading(false);
  };

  const handleChange = <
    T extends ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>
  >(
    e: T
  ) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    if (Object.values(formError).findIndex((val) => val === true) >= 0) {
      setFormError((prev) => {
        return {
          ...prev,
          [e.target.name]: false,
        };
      });
    }
  };

  return (
    <div
      className={`${
        showWholeForm &&
        `border relative border-slate-500/60 rounded-md p-6 ${className}`
      }`}
    >
      {loading && (
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-neutral-800/50 z-40 flex justify-center items-center">
          <Spinner className="animate-spin-slow w-16 h-16" />
        </div>
      )}
      {loggedIn ? (
        <form
          ref={textareaRef}
          onSubmit={handleSubmit}
          className={`${showWholeForm && "flex flex-col gap-5"}`}
        >
          {showWholeForm && (
            <FormControl label="alias" isDisabled={loading}>
              <FormLabel>Commenter alias</FormLabel>
              <Input
                value={formData.commenterName}
                onChange={handleChange}
                name="commenterName"
              />
            </FormControl>
          )}
          <FormControl
            isInvalid={formError.comment}
            isRequired
            label="comment"
            isDisabled={showWholeForm && loading}
            className="mb-12 gap-3"
          >
            {showWholeForm && <FormLabel>Comment</FormLabel>}
            <Textarea
              className={`${
                showWholeForm ? "min-h-[120px]" : "min-h-[60px] mt-6"
              }`}
              onFocus={() => {
                if (!showWholeForm) {
                  setShowWholeForm(true);
                }
              }}
              value={formData.comment}
              onChange={handleChange}
              name="comment"
              placeholder={!showWholeForm ? "Leave a comment" : ""}
            ></Textarea>
            {formError.comment && (
              <FormErrorMessage>
                Empty comments are not the most inspirational
              </FormErrorMessage>
            )}
          </FormControl>
          {showWholeForm && (
            <div className="flex gap-5">
              <Button
                isDisabled={loading}
                className="max-w-[80px]"
                color="neutral"
                type="submit"
              >
                Comment
              </Button>
              <Button
                isDisabled={loading}
                className="max-w-[80px]"
                type="button"
                color="red"
                onClick={() => {
                  setLoading(true);
                  signOut();
                }}
              >
                Sign out
              </Button>
            </div>
          )}
        </form>
      ) : (
        <Button
          onClick={() => {
            signIn();
          }}
          color="green"
        >
          Sign in to comment
        </Button>
      )}
    </div>
  );
};
