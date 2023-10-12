import { ApiImg, ArrowButton, ArrowLeft, ArrowsImg, BankImg, ClientsImg, Ellipse, GraphicImg, LanguageImg, LinksImg, MenuList, MenuListItem, MenuListItemBorder, PartnerImg, ReferralImg, SideMenuContainer, TeamImg, VectorImg } from './SideMenuStyles'
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
            <MenuListItem>
                Реквізити 
                <BankImg src={bankImg} alt="" />
            </MenuListItem>
            <MenuListItem>
                Зведення
                <GraphicImg src={graphicImg} alt="" />
            </MenuListItem>
            <MenuListItem>
                Клієнти
                <ClientsImg src={clientsImg} alt="" />
            </MenuListItem>
            <MenuListItem>
                Платежі
                <ArrowsImg src={arrowsImg} alt="" />
            </MenuListItem>
            <MenuListItemBorder>
                Партнерське посилання
                <PartnerImg src={partnerImg} alt="" />
            </MenuListItemBorder>
            <MenuListItem>
                Керування посиланнями
                <LinksImg src={linksImg} alt="" />
            </MenuListItem>
            <MenuListItem>
                API для інтеграції
                <ApiImg src={apiImg} alt="" />
            </MenuListItem>
            <MenuListItem>
                Реферальні посилання
                <ReferralImg src={referralImg} alt="" />
            </MenuListItem>
            <MenuListItemBorder>
                Створити команду
                <TeamImg src={teamImg} alt="" />
            </MenuListItemBorder>
            <MenuListItem>
                Підключити нового клієнта
                <VectorImg src={vectorImg} alt="" />
            </MenuListItem>
            <MenuListItem>
                Мова
                <LanguageImg src={languageImg} alt="" />
            </MenuListItem>
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