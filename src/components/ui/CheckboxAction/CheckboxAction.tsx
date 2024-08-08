import { ReactNode } from 'react'

import Input from '../Input/Input'

export const CheckboxAction = ({
  classSpan,
  children,
}: {
  classSpan: string
  children: ReactNode
}) => {
  return (
    <>
      <Input type="checkbox" placeholder="checkbox" />
      <span className={classSpan}></span>

      <label htmlFor="checkbox">{children}</label>
    </>
  )
}
