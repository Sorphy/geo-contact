import React from "react";
import { InputFieldProps } from "./InputField.types";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, name, type, placeholder, className, iconSrc } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = (error: any) => {
    if (typeof error === "string") {
      return error;
    } else if (error?.message) {
      return error.message;
    }
    return "There was an error";
  };

  return (
    <div className={clsx("mb-4", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-indigo-50 mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {iconSrc && (
          <span className="absolute top-1/2 transform -translate-y-1/2 left-3">
            {iconSrc}
          </span>
        )}
        <input
          {...register(name, { valueAsNumber: type === "number" })}
          id={name}
          type={type}
          placeholder={placeholder}
          aria-describedby={`${name}-error`}
          className={clsx(
            "block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",
            {
              "border-red-500": !!errors[name],
              "border-gray-300": !errors[name],
            }
          )}
        />
      </div>

      {errors[name] && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-600">
          {getErrorMessage(errors[name])}
        </p>
      )}
    </div>
  );
};

export default InputField;
