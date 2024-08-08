import { Register } from '@/components/Register/Register'
import { SignUp } from '@/components/Signup/Signup'

import logoIcon from '@/assets/img/logo.svg'

import styles from './authenticationPage.module.scss'
import { useAuthMode } from '@/hooks/useAuthMode'

const AuthenticationPage = () => {
  const mode = useAuthMode('mode')

  return (
    <>
      <header className={styles.header}>
        <img src={logoIcon} alt="BARGAIN" />
        <p>Партнерська програма</p>
      </header>

      <main className={styles.main}>{mode === 'register' ? <Register /> : <SignUp />}</main>
    </>
  )
}

export default AuthenticationPage
