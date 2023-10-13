import { PropsWithChildren } from "react";

interface ContainerProps {}

export const Container = (props: PropsWithChildren<ContainerProps>) => {
  return <div className="max-w-4xl mx-auto mt-4">{props.children}</div>;
};
