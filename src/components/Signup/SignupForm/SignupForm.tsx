import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/Button/Button'
import { CheckboxAction } from '@/components/ui/CheckboxAction/CheckboxAction'
import Input from '@/components/ui/Input/Input'

import styles from './signupForm.module.scss'

export const SignupForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_inputs}>
        <Input type="email" placeholder="Введіть Ваш e-mail" />
        <Input type="password" placeholder="Введіть пароль" />
      </div>

      <Button type="submit">Увійти</Button>

      <div className={styles.form_action}>
        <div className={styles.checkbox}>
          <CheckboxAction classSpan={styles['checkbox_span']}>
            <p>Запам’ятати мене</p>
          </CheckboxAction>
        </div>

        <Link to="/">Забули пароль?</Link>
      </div>
    </form>
  )
}
