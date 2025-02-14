import { ComponentProps } from "react"

type FormsParagrafoProps = React.ComponentProps<'p'>


export default function FormsP ({className, ...props}:FormsParagrafoProps){
    return(<p className={className} {...props}></p>)
}