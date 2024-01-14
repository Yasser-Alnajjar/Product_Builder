import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  color: string;
};

export default function SelectedColor({ color, ...rest }: Props) {
  const colorIsWhite =
    color === "#fff" || color === "#ffffff" ? "#000" : "#ffffff";
  return (
    <span
      {...rest}
      className="rounded-lg p-[2px] border cursor-pointer"
      style={{
        backgroundColor: color,
        color: colorIsWhite,
        borderColor: color === "#fff" || color === "#ffffff" ? "#000" : color,
        userSelect: "none",
      }}
    >
      {color}
    </span>
  );
}
