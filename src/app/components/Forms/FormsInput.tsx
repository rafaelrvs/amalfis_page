import React, { ElementType } from 'react';


type FormsInputProps = React.ComponentProps<'input'>&{
}

export default function FormInput({ ...props}: FormsInputProps) {
  return <input {...props}/>

}
