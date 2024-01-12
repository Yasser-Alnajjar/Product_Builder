import React from "react";

type Props = {
  color: string;
};

export default function CircleColor({ color }: Props) {
  return (
    <span
      className="w-5 h-5 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
    />
  );
}
