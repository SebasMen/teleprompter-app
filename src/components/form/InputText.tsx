import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type CustomProps = {
  label?: string;
  errorMessage?: string;
  classContainer?: string;
}

type Props = InputProps & CustomProps;

export const InputText = ({ label, errorMessage, classContainer, ...props }: Props) => {
  return (
    <div className={`w-full flex flex-col ${classContainer}`}>
      {label && <label htmlFor="email" className="text-sm text-gray-800 font-semibold">{label}</label>}

      <input {...props} className="input-text" />

      {errorMessage && <span className="text-sm text-red-500 mt-2">{errorMessage}</span>}
    </div>
  );
};
