import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { hasNoAlphanumeric, validateEmailWithRegex } from "../utils/regex";
import { useRouter } from "next/router";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: FC<{ className?: string }> = ({ className = "" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    message: "",
    name: "",
  });
  const [formError, setFormError] = useState<
    Record<keyof ContactFormData, boolean>
  >({
    email: false,
    message: false,
    name: false,
  });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if (!router) return;
    e.preventDefault();

    const errors = {
      email: !formData.email || !validateEmailWithRegex(formData.email),
      message: !formData.message || hasNoAlphanumeric(formData.message),
      name: !formData.name || hasNoAlphanumeric(formData.name),
    };
    setFormError(errors);

    if (Object.values(errors).findIndex((val) => val === true) >= 0) {
      return;
    }

    const response = await fetch("/api/contact", {
      body: JSON.stringify(formData),
      method: "POST",
    });

    const status = response.status;
    if (status === 200)
      router.push(
        `/success?msg=${encodeURIComponent(
          "Message sent! I will get back to you as soon as possible. Thanks for reaching out!"
        )}&prev=${encodeURIComponent("/contact")}`
      );
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
        <FormControl label="name" isInvalid={formError.name} isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
          {formError.name && (
            <FormErrorMessage>Name must not be empty</FormErrorMessage>
          )}
        </FormControl>
        <FormControl label="email" isInvalid={formError.email} isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={formData.email} onChange={handleChange} />
          {formError.email && (
            <FormErrorMessage>Invalid Email</FormErrorMessage>
          )}
        </FormControl>
        <FormControl label="message" isInvalid={formError.message} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            resize="vertical"
            className="min-h-[100px]"
            value={formData.message}
            onChange={handleChange}
          />
          {formError.message && (
            <FormErrorMessage>Invalid Message</FormErrorMessage>
          )}
        </FormControl>
        <Button color="neutral" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
