type SelectionProps = React.ComponentProps<'select'>

export default function FormsSelection ({children,...props}:SelectionProps){
    return (
        <select {...props}>
        {children}
      </select>
    )
}