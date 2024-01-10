import { ButtonHTMLAttributes, ReactNode } from "react";

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  bg?: string;
  outline?: string;
};
export default function Button({
  className,
  size = "md",
  color = "text-white",
  children,
  outline,
  bg,
  ...rest
}: TProps) {
  const handleSize = () => {
    if (size === "sm") {
      return "text-xs ";
    } else if (size === "md") {
      return "text-sm";
    } else if (size === "lg") {
      return "text-lg";
    }
  };

  const handleBg = () => {
    if (bg !== undefined) {
      return `hover:${bg.split("-").slice(0, 2).join("-")}-900`;
    }
  };

  return (
    <button
      className={`w-full px-4 py-2 rounded-lg transition border-white border-2  focus-visible:ring-2 focus-visible:ring-white/75 ${handleSize()} ${color} ${bg} ${handleBg()}  focus:outline focus:outline-offset-2	focus:outline-2 ${outline} ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
}
