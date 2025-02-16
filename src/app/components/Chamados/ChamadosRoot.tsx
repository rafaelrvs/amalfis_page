type ChamadosRootProps = React.ComponentProps<"nav">;
export default function ChamadosRoot({
  children,
  ...props
}: ChamadosRootProps) {
  return <nav {...props}>{children}</nav>;
}
