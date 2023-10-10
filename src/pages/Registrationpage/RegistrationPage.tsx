import React from 'react'
import  { GoogleButton, HeaderText, Icon, LogoImage, LogoImageContainer, PageWrapper, RectangleTextHelper, RegistrationRectangle, TextInsideLogo} from './RegistrationPageStyles'
import LogoImg from 'shared/assets/img/registrationpageicons/Subtract.svg'
import GoogleIcon from 'shared/assets/img/registrationpageicons/flat-color-icons_google.svg'
import LoginForm from './LoginForm'



const RegistrationPage = () => {
    
  return (
    <PageWrapper>
        <LogoImageContainer>
            <LogoImage src={LogoImg} alt="" />
            <TextInsideLogo>BARGIAN</TextInsideLogo>
        </LogoImageContainer>
        <HeaderText>Партнерська програма</HeaderText>
        <RegistrationRectangle>
            <GoogleButton>
                <Icon src={GoogleIcon} alt="" />
                Зареєструватись за допомоги Google
            </GoogleButton>
            <RectangleTextHelper>або</RectangleTextHelper>
            <LoginForm />
            
            
        </RegistrationRectangle>

    </PageWrapper>
  )
}

export default RegistrationPage