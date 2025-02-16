type FormsTextAreaProps = React.ComponentProps<'textarea'>

export default function FormsTextArea({...props}:FormsTextAreaProps){
    return <textarea {...props}/>
}