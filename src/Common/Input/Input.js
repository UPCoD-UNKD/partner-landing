import React, { useState } from 'react'
import './Input.scss'

export default function Input({type, placeholder}) {
  const [value, setValue] = useState('');
  return (
      <input 
        type={type} 
        placeholder={placeholder} 
        className='Input'
        value={value}
        onChange={e => setValue(e.target.value)} />
  )  
}
