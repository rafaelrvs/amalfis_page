type ChamadosCardProps = React.ComponentProps<'nav'>
export default function ChamadosCard ({ children,...props}:ChamadosCardProps){
    <nav {...props}>
        {children}
    </nav>
}