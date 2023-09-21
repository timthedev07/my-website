import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { ChangeEvent, FC, FormEventHandler, useRef, useState } from "react";
import { hasNoAlphanumeric, validateEmailWithRegex } from "../utils/regex";
import { useRouter } from "next/router";
import { useAppLoading } from "./AppLoading";
import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: FC<{ className?: string }> = ({ className = "" }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
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
  const { setAppLoading } = useAppLoading();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if (!router) return;
    e.preventDefault();
    setSubmitting(true);
    console.log("called");

    const errors = {
      email: !formData.email || !validateEmailWithRegex(formData.email),
      message: !formData.message || hasNoAlphanumeric(formData.message),
      name: !formData.name || hasNoAlphanumeric(formData.name),
    };
    setFormError(errors);

    if (Object.values(errors).findIndex((val) => val === true) >= 0) {
      return;
    }

    setAppLoading(true, true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    await emailjs
      .send(
        "service_yzuc1mi",
        "template_n24qz4g",
        templateParams,
        "pR188r4xwmgKICKm7"
      )
      .then(
        function (response) {
          setAppLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          router.push(
            `/success?msg=${encodeURIComponent(
              "Message sent! I will get back to you as soon as possible. Thanks for reaching out!"
            )}&prev=${encodeURIComponent("/contact")}`
          );
        },
        function (err) {
          setAppLoading(false);
          console.log("FAILED...", err);
          router.push(
            `/client-error?msg=${encodeURIComponent(
              "Message couldn't be sent..."
            )}&prev=${encodeURIComponent("/contact")}`
          );
        }
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
        ref={formRef}
      >
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
        <Button
          color="cyan"
          onClick={() => {
            if (!submitting) formRef.current?.requestSubmit();
          }}
          isDisabled={submitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
