import React, { ElementType } from 'react'

interface FormsLabelProps{
    label:ElementType
    text:string
}

export  default function FormsLabel ({label:Label}:FormsLabelProps) {
  return (
   <label htmlFor=""></label>
  )
}
