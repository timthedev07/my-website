import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "dragontail-experimental";
import { ChangeEvent, FC, useState } from "react";
import { validateEmailWithRegex } from "../utils/emailRegex";

interface ContactFormData {
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

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleChange = <T extends ChangeEvent<HTMLInputElement>>(e: T) => {
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
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
          {formData.name === "" && (
            <FormErrorMessage>Name must not be empty</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={formData.email} onChange={handleChange} />
          {(!formData.email || !validateEmailWithRegex(formData.email)) && (
            <FormErrorMessage>Invalid Email</FormErrorMessage>
          )}
        </FormControl>
      </form>
    </div>
  );
};
