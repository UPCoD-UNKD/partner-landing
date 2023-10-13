import styled from 'styled-components'

 export const PageWrapper = styled.div `
    background-color: #25281E;
    width: 100%;
    height: 100vh;
    text-align: center;
    padding-top: 121.5px;
`


export const LogoImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 90px;
`;


export const TextInsideLogo = styled.p`
  color: white;
  position: absolute; 
  top: 65%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: white;
    font-size: 18.79px;
    font-family: Fontin Sans CR;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.38px;
`;


export const HeaderText = styled.p `
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 17.15px;
    margin-top: 10px;
    
`

export const SignUpRectangle = styled.article `
    width: 470px;
    height: 430px;
    background-color: #DDDDDD;
    border-radius: 40px;
    text-align: center;
    margin-left: 520px;
    margin-top: 40px;
    text-align: center;
`


export const SignUpHeader = styled.h1 `
    color: #202020;
    font-size: 24px;
    font-family: Fontin Sans CR;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 61.5px;
`

