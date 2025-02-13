import React, { ReactNode, ComponentProps } from "react";

type FormsRootProps = ComponentProps<"form"> & {
  children: ReactNode;
};

export default function FormsRoot({ children, className, ...props }: FormsRootProps) {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
}
