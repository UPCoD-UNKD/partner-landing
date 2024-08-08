import { RegisterForm } from './RegisterForm/RegisterForm'

import styles from './register.module.scss'

import googleIcon from '@/assets/img/social/google.svg'

export const Register = () => {
  return (
    <section className={styles.register}>
      <button className={styles.link}>
        <img src={googleIcon} alt="Show google in the link" />
        Зареєструватись за допомогою Google
      </button>

      <p className={styles.or}>або</p>

      <RegisterForm />
    </section>
  )
}
