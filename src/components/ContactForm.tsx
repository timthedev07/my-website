import { FormControl, FormHelperText, Input } from "dragontail-experimental";
import { FC, useState } from "react";

interface ContactFormData {}

export const ContactForm: FC = ({}) => {
  const [formData, setFormData] = useState();

  const handleSubmit = () => {};

  return (
    <div className="border border-opacity-10 rounded-md p-4">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input />
        </FormControl>
      </form>
    </div>
  );
};
