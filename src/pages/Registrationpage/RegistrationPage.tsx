import  { GoogleButton, HeaderText, Icon, PageWrapper, RectangleTextHelper, RegistrationRectangle,} from './RegistrationPageStyles'

import GoogleIcon from 'shared/assets/img/registrationpageicons/flat-color-icons_google.svg'
import LoginForm from './LoginForm'
import LogoandImage from 'shared/ui/logo/LogoandImage'



const RegistrationPage = () => {
    
  return (
    <PageWrapper>
        <LogoandImage />
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