import React from 'react'
import { HeaderText, LogoImage, LogoImageContainer, PageWrapper, SignUpHeader, SignUpRectangle, TextInsideLogo } from './SignUpPageStyles'
import LogoImg from 'shared/assets/img/registrationpageicons/Subtract.svg'
import SignUpForm from './SignUpForm'


const SignUpPage = () => {
  return (
    <div>
         <PageWrapper>
        <LogoImageContainer>
            <LogoImage src={LogoImg} alt="" />
            <TextInsideLogo>BARGIAN</TextInsideLogo>
        </LogoImageContainer>
        <HeaderText>Партнерська програма</HeaderText>
        <SignUpRectangle>
            <SignUpHeader>
                Вхід в особистий кабінет
            </SignUpHeader>
            <SignUpForm />
        </SignUpRectangle>
    </PageWrapper>
    </div>
  )
}

export default SignUpPage