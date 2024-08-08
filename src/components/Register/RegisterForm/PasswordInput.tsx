import { useState } from 'react'

import Input from '@/components/ui/Input/Input'

import lockIcon from '@/assets/img/lockIcon.svg'
import eyeIcon from '@/assets/img/eyeIcon.svg'

export const PasswordInput = () => {
  const [isActivePassword, setIsActivePassword] = useState<boolean>(true)

  const changeStatePassword = () => {
    setIsActivePassword((prevState) => !prevState)
  }

  return (
    <>
      <img src={lockIcon} alt="user's password" />
      <Input type={isActivePassword ? 'password' : 'text'} placeholder="Пароль" />
      <button type="button" onClick={changeStatePassword}>
        <img src={eyeIcon} alt="toggle password on text" />
      </button>
    </>
  )
}
