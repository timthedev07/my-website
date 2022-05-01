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
    <div className={`border border-slate-500/60 rounded-md p-6 ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FormControl>
          <FormLabel>Comment as</FormLabel>
          <Input
            placeholder="Comment anonymously"
            value={formData.commenterName}
            onChange={handleChange}
            name="commenterName"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Comment</FormLabel>
          <Textarea
            className="min-h-[120px]"
            value={formData.comment}
            onChange={handleChange}
            name="comment"
          ></Textarea>
        </FormControl>
        <Button className="max-w-[80px]" color="emerald" type="submit">
          Comment
        </Button>
      </form>
    </div>
  );
};
