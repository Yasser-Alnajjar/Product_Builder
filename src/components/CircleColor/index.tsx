import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  color: string;
  className?: string;
};

export default function CircleColor({ color, className, ...rest }: Props) {
  const colorIsWhite =
    color === "#fff" || color === "#ffffff" ? "#000" : "#ffffff";
  return (
    <span
      {...rest}
      className={`w-5 h-5 rounded-full ${className} grid place-content-center  border`}
      style={{
        backgroundColor: color,
        color: colorIsWhite,
        borderColor: color === "#fff" || color === "#ffffff" ? "#000" : color,
      }}
    />
  );
}
