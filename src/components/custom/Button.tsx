import { ReactNode } from "react";

interface ButtonProps {
  value: string | ReactNode;
  onClick?(): void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "reset" | "submit";
  form?: string;
}
const Button = ({
  onClick,
  value,
  className = "bg-blue-700 text-white w-full",
  disabled = false,
  isLoading = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        "h-12 rounded text-sm font-semibold items-center disabled:opacity-50 ripple" +
        " " +
        className
      }
    >
      {(() => {
        if (isLoading)
          return (
            <i className="bx bx-loader-alt bx-sm motion-safe:animate-spin m-0"></i>
          );
        else return value;
      })()}
    </button>
  );
};

export default Button;
