import { PropsWithChildren } from "react";

interface CardProps {}

export const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {props.children}
    </div>
  );
};
