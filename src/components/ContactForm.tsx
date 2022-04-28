import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { ChangeEvent, FC, useState } from "react";
import { hasNoAlphanumeric, validateEmailWithRegex } from "../utils/regex";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: FC = ({}) => {
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

  const handleSubmit = async () => {
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
  };

  return (
    <div className="border border-slate-500/60 rounded-md p-4 max-w-lg">
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={formError.name} isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
          {formError && (
            <FormErrorMessage>Name must not be empty</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={formError.email} isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={formData.email} onChange={handleChange} />
          {formError.email && (
            <FormErrorMessage>Invalid Email</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={formError.message} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="email"
            value={formData.message}
            onChange={handleChange}
          />
          {formError.email && (
            <FormErrorMessage>Invalid Message</FormErrorMessage>
          )}
        </FormControl>
      </form>
    </div>
  );
};
