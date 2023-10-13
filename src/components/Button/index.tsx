import { PropsWithChildren } from "react";

interface ButtonProps {}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return <main className="max-w-4xl mx-auto mt-4">{props.children}</main>;
};
