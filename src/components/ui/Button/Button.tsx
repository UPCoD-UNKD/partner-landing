import { ReactNode } from 'react'

import styles from './button.module.scss'

export const Button = ({
  children,
  type,
}: {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
}) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}
