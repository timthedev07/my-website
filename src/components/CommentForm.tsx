import {
  Button,
  FormControl,
  FormLabel,
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

  const [formData, setFormData] = useState<BlogFormData>({
    blogId,
    comment: "",
    commenterName: session?.user?.name || "",
    commenterEmail: session?.user?.email || "",
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

    const errors = {
      comment: !formData.comment || hasNoAlphanumeric(formData.comment),
    };
    setFormError((prev) => ({ ...prev, ...errors }));

    if (Object.values(errors).findIndex((val) => val === true) >= 0) {
      return;
    }

    const response = await fetch(`/api/comments/new`, {
      body: JSON.stringify(formData),
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
          <FormControl isRequired isDisabled={showWholeForm && loading}>
            {showWholeForm && <FormLabel>Comment</FormLabel>}
            <Textarea
              className={`${
                (showWholeForm ? "min-h-[120px]" : "min-h-[60px] mt-6") +
                " mb-12"
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
