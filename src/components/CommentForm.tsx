import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { BlogComment } from "../mongodb/models/BlogComment";
import { hasNoAlphanumeric } from "../utils/regex";

interface CommentFormProps {
  className?: string;
  blogId: string;
}

export type BlogFormData = Omit<BlogComment, "id">;

export const CommentForm: FC<CommentFormProps> = ({
  className = "",
  blogId,
}) => {
  const [showWholeForm, setShowWholeForm] = useState<boolean>(false);

  const [formData, setFormData] = useState<BlogFormData>({
    blogId,
    comment: "",
    commenterName: "",
  });

  const [formError, setFormError] = useState<
    Record<keyof BlogFormData, boolean>
  >({
    comment: false,
    blogId: false,
    commenterName: false,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

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

    const status = response.status;
    console.log(status);
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
        `border border-slate-500/60 rounded-md p-6 ${className}`
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${showWholeForm && "flex flex-col gap-5"}`}
      >
        {showWholeForm && (
          <FormControl>
            <FormLabel>Comment as</FormLabel>
            <Input
              placeholder="Comment anonymously"
              value={formData.commenterName}
              onChange={handleChange}
              name="commenterName"
            />
          </FormControl>
        )}
        <FormControl isRequired>
          {showWholeForm && <FormLabel>Comment</FormLabel>}
          <Textarea
            className={`${
              showWholeForm ? "min-h-[120px]" : "min-h-[60px] mb-12 mt-6"
            }`}
            onFocus={() => {
              if (!showWholeForm) setShowWholeForm(true);
            }}
            value={formData.comment}
            onChange={handleChange}
            name="comment"
            placeholder={!showWholeForm ? "Leave a comment" : ""}
          ></Textarea>
        </FormControl>
        {showWholeForm && (
          <Button className="max-w-[80px]" color="emerald" type="submit">
            Comment
          </Button>
        )}
      </form>
    </div>
  );
};
