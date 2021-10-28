import React from 'react'
import './Button.css'


export default function Button({ referencia, content, action, ...props }) {


  return (
    <button type="button" onClick={action} className={referencia}>{content}</button>
  )
}

