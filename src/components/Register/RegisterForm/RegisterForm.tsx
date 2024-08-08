import { FC } from 'react'
import { Link } from 'react-router-dom'

import { PasswordInput } from './PasswordInput'
import { Button } from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import { CheckboxAction } from '@/components/ui/CheckboxAction/CheckboxAction'

import personIcon from '@/assets/img/personIcon.svg'

import styles from './registerForm.module.scss'

export const RegisterForm: FC = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.form_input}>
          <img src={personIcon} alt="user's email" />
          <Input type="email" placeholder="Email" />
        </div>

        <div className={styles.form_input}>
          <PasswordInput />
        </div>

        <div className={styles.form_checkbox}>
          <CheckboxAction classSpan={styles['form_checkbox-span']}>
            <p>
              Я даю <span>згоду</span> на обробку власних данних
            </p>
          </CheckboxAction>
        </div>

        <div className={styles.form_tabs}>
          <Button type="submit">Зареєструватись</Button>
          <Link to="/authentication?mode=signup">Увійти</Link>
        </div>
      </form>
    </>
  )
}
