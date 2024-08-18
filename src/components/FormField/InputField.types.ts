export interface InputFieldProps {
  type?: "text" | "tel" | "email" | "number";
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  iconSrc?: React.ReactNode;
}
