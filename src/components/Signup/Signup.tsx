import { SignupForm } from './SignupForm/SignupForm'

import styles from './signup.module.scss'

export const SignUp = () => {
  return (
    <section className={styles.signup}>
      <h1>Вхід в особистий кабінет</h1>

      <SignupForm />
    </section>
  )
}
