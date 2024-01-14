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
      {...rest}
      className={`${className} px-0 py-0`}
      style={{
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "50%",
        padding: 0,
        backgroundColor: color,
        color: colorIsWhite,
        borderColor: color === "#fff" || color === "#ffffff" ? "#000" : color,
      }}
    />
  );
}
