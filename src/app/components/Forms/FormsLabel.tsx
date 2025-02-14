import React from 'react'

type FormsLabelProps = React.ComponentProps<'label'>
export  default function FormsLabel ({children,className, ...props}:FormsLabelProps) {
  return (
   <label className={className} {...props}>{children}</label>
  )
}
