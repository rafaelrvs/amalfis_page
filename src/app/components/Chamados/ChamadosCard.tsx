import React from "react";

type ChamadosCardProps = React.ComponentProps<"div">;

export default function ChamadosCard({ children, ...props }: ChamadosCardProps) {
  return (
    <nav {...props}>
      {children}
    </nav>
  );
}
