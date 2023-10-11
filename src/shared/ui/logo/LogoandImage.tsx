import LogoImg from 'shared/assets/img/registrationpageicons/Subtract.svg'
import { LogoImage, LogoImageContainer, TextInsideLogo } from './LogoandImageStyles'

const LogoandImage = () => {
  return (
    <div>
       <LogoImageContainer>
            <LogoImage src={LogoImg} alt="" />
            <TextInsideLogo>BARGIAN</TextInsideLogo>
        </LogoImageContainer>
    </div>
  )
}

export default LogoandImage