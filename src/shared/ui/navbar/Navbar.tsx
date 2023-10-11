
import { Img, ImgContainer, LogoImage, LogoImageContainer, NavbarContainer, NavbarSearchDiv, NavbarText, TextInsideLogo } from './NavbarStyles'
import LogoImg from 'shared/assets/img/registrationpageicons/Subtract.svg'
import SearchInput from './SearchInput'
import settingsIcon from 'shared/assets/img/registrationpageicons/Component 5.svg'
import profileIcon from 'shared/assets/img/registrationpageicons/Profil.svg'
import exitIcon from 'shared/assets/img/registrationpageicons/Exit.svg'

const Navbar = () => {
  return (
    <NavbarContainer>
        <LogoImageContainer>
            <LogoImage src={LogoImg} alt="" />
            <TextInsideLogo>BARGIAN</TextInsideLogo>
        </LogoImageContainer>
        <NavbarText>
            Партнерська програма
        </NavbarText>
        <NavbarSearchDiv>
            <SearchInput />
            <ImgContainer>
                <Img src={settingsIcon} alt="" />
                <Img src={profileIcon} alt="" />
                <Img src={exitIcon} alt="" />
            </ImgContainer>
        </NavbarSearchDiv>
    </NavbarContainer>
  )
}

export default Navbar