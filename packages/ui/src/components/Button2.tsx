import type { FC } from "react";

export type ButtonProps = {
  backgroundColor: string;
  text: string;
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        padding: "8px",
        color: "white",
        backgroundColor: props.backgroundColor ?? "#f3f4f5",
      }}
    >
      {props.text}
    </div>
  );
};
