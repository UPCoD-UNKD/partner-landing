import styled from "styled-components";


export const SideMenuContainer = styled.div `
    width: 312px;
    height: 550px;
    left:0;
    background: #202020;

`


export const MenuList = styled.ul `
    display: flex;
    flex-direction: column;
`
export const ArrowButton = styled.div `
cursor: pointer;
`

export const MenuListItem = styled.li `
    color: #F7F8FA;
    font-size: 14px;
    font-weight: 700;
    width: 312px;
    height: 45px;
    padding: 25px 30px 25px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #E2FAAD;
        color: #5C624F;
    }
`


export const MenuListItemBorder = styled.li `
    color: #F7F8FA;
    font-size: 14px;
    font-weight: 700;
    width: 312px;
    height: 45px;
    padding: 25px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px silver solid;
    text-align: center;
    align-items: center;
    cursor: pointer;
     &:hover {
        background: #E2FAAD;
        color: #5C624F;
    }
`


export const BankImg = styled.img `
    width: 25px;
    height: 23px;
`
export const GraphicImg = styled.img `
    width: 23px;
    height: 23px;
`
export const ClientsImg = styled.img `
    width: 25px;
    height: 18px;
`
export const ArrowsImg = styled.img `
    width: 21px;
    height: 23px;
`
export const PartnerImg = styled.img `
    width: 23px;
    height: 23px;
`
export const LinksImg = styled.img `
    width: 23px;
    height: 22px;
`
export const ApiImg = styled.img `
    width: 20px;
    height: 20px;
`
export const ReferralImg = styled.img `
    width: 24px;
    height: 22px;
`
export const TeamImg = styled.img `
    width: 22px;
    height: 23px;
`
export const VectorImg = styled.img `
    width: 23px;
    height: 23px;
`
export const LanguageImg = styled.img `
    width: 20px;
    height: 20px;
`

export const Ellipse = styled.img `
    margin-left: 260px;
    margin-top: 30px;
`

export const ArrowLeft = styled.img `
  margin-left: -25.5px;
  z-index: 999;
  margin-top: 30px;
  cursor: pointer;
`