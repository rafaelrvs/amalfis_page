
import React, { ElementType } from 'react'

interface FormsButtonProps{
    button:ElementType
    text:string
}

export  default function FormsButton ({button:Btn}:FormsButtonProps) {
  return (
   <Btn/>
  )
}