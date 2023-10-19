import { ApiImg, ArrowButton, ArrowLeft, ArrowsImg, BankImg, ClientsImg, Ellipse, GraphicImg, LanguageImg, LinksImg, MenuList, PartnerImg, ReferralImg, SideMenuContainer, StyledLink, StyledLinkBorder, TeamImg, VectorImg } from './SideMenuStyles'
import bankImg from 'shared/assets/img/sidemenu/Bank.png'
import graphicImg from 'shared/assets/img/sidemenu/Зведення.png'
import clientsImg from 'shared/assets/img/sidemenu/People alt.png'
import arrowsImg from 'shared/assets/img/sidemenu/Component 1.png'
import partnerImg from 'shared/assets/img/sidemenu/Component 2.png'
import linksImg from 'shared/assets/img/sidemenu/Component 3.png'
import apiImg from 'shared/assets/img/sidemenu/API.png'
import referralImg from 'shared/assets/img/sidemenu/Referral links.png'
import teamImg from 'shared/assets/img/sidemenu/Team.png'
import vectorImg from 'shared/assets/img/sidemenu/Vector (1).png'
import languageImg from 'shared/assets/img/sidemenu/Language.png'
import ellipse from 'shared/assets/img/sidemenu/Ellipse 22.png'
import arrowleft from 'shared/assets/img/sidemenu/arrowleft.png'


const SideMenu = () => {
  return (
    <>

    <SideMenuContainer>
        <MenuList>
           
                 
                <StyledLink to="/">
                    Реквізити
                    <BankImg src={bankImg} alt="" />
                </StyledLink>
                


                
                <StyledLink to="/overview">
                    Зведення
                    <GraphicImg src={graphicImg} alt="" />
                </StyledLink>


                
                <StyledLink to="/clients">
                    Клієнти
                    <ClientsImg src={clientsImg} alt="" />
                </StyledLink>
                


                
                <StyledLink to="/payments">
                    Платежі
                    <ArrowsImg src={arrowsImg} alt="" />
                </StyledLink>
                

               
                <StyledLinkBorder to="/affiliate">
                    Партнерське посилання
                    <PartnerImg src={partnerImg} alt="" />
                </StyledLinkBorder>
               

                <StyledLink to="/links">
                    Керування посиланнями
                    <LinksImg src={linksImg} alt="" />
                </StyledLink>

                <StyledLink to="/api">
                     API для інтеграції
                     <ApiImg src={apiImg} alt="" />
                </StyledLink>
           
                <StyledLink to="/referral">
                    Реферальні посилання
                    <ReferralImg src={referralImg} alt="" />
                </StyledLink>
     
                <StyledLinkBorder to="/team">
                        Створити команду
                        <TeamImg src={teamImg} alt="" />
                </StyledLinkBorder>

                <StyledLink to="/connect">
                    Підключити нового клієнта
                    <VectorImg src={vectorImg} alt="" />
                </StyledLink>

                <StyledLink to="/language">
                    Мова
                    <LanguageImg src={languageImg} alt="" />
                </StyledLink>

        </MenuList>
        <ArrowButton>
            <Ellipse  src={ellipse}/>
            <ArrowLeft src={arrowleft}/>
        </ArrowButton>
       
    </SideMenuContainer>
    </>
  )
}

export default SideMenu