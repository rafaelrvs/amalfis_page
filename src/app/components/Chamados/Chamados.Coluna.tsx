type ChamadosColunaProps = React.ComponentProps<'div'>

export default function ChamadosColuna({children,...props}:ChamadosColunaProps){
    return(
        <div {...props}>{children}</div>
    )
}