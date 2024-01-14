import { ButtonHTMLAttributes, ReactNode } from "react";

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  bg?: string;
  max?: string;
  outline?: string;
};
export default function Button({
  className,
  size = "md",
  color = "text-white",
  children,
  outline,
  bg,
  max,
  ...rest
}: TProps) {
  const handleSize = () => {
    if (size === "sm") {
      return "text-xs";
    } else if (size === "md") {
      return "text-sm";
    } else if (size === "lg") {
      return "text-lg";
    }
  };

  return (
    <button
      className={`w-full px-4 py-2 rounded-lg ease-in duration-100 border-white border-2  focus-visible:ring-2 focus-visible:ring-white/75 focus:outline focus:outline-offset-2	focus:outline-2 ${handleSize()} ${color} ${bg} ${outline} ${max} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
