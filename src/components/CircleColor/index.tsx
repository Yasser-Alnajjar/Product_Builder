import { HTMLAttributes } from "react";
import Button from "../ui/Button";

type Props = HTMLAttributes<HTMLSpanElement> & {
  color: string;
  className?: string;
};

export default function CircleColor({ color, className, ...rest }: Props) {
  const colorIsWhite =
    color === "#fff" || color === "#ffffff" ? "#000" : "#ffffff";
  return (
    <Button
      outline="outline-[color]"
      {...rest}
      className={`w-5 px-0 py-0 ${className} grid place-content-center  border`}
      style={{
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "50%",
        backgroundColor: color,
        color: colorIsWhite,
        borderColor: color === "#fff" || color === "#ffffff" ? "#000" : color,
      }}
    />
  );
}
