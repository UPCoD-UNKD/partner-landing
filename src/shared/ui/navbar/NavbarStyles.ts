import styled from "styled-components";


export const NavbarContainer = styled.div `
    width: 100vw;
    background: #202020;
    height: 90px;
    display: flex;
    flex-direction: row;
    gap: 75px;
`

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 15.5px;
  margin-left: 40px;
`;
export const LogoImageContainer = styled.div`
  position: relative;
  display: inline-block; 
`;

export const TextInsideLogo = styled.p`
  color: white;
  position: absolute; 
  top: 62.1%; 
  left:85%; 
  transform: translate(-50%, -50%); 
  color: white;
    font-size: 14.09px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.38px;
`;


export const NavbarText = styled.p `
    width: 115px;
    margin-top: 33.5px;
    height: 24px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    line-height: 15.40px;
    align-items: center;
    text-align: center;
`

export const ImgContainer = styled.div `
    
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    text-align: right;
`

export const NavbarSearchDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    width: 100vw;
    margin-right: 31px;
`

export const Img = styled.img `
    width: 30px;
    height: 30px;
    cursor: pointer;
`