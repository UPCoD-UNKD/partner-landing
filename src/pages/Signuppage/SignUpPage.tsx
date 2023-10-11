import { HeaderText, PageWrapper, SignUpHeader, SignUpRectangle} from './SignUpPageStyles'
import SignUpForm from './SignUpForm'
import LogoandImage from 'shared/ui/logo/LogoandImage'


const SignUpPage = () => {
  return (
    <div>
         <PageWrapper>
        <LogoandImage />
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