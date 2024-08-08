import { FC } from 'react'

import styles from './input.module.scss'

interface InputProps {
  type: string
  placeholder: string
}

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return <input type={type} id={type} placeholder={placeholder} className={styles.input} required />
}

export default Input
