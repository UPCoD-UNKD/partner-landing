import styled from 'styled-components'
import PeopleImg from 'shared/assets/img/registrationpageicons/People.svg'

import EyeImg from 'shared/assets/img/registrationpageicons/Eye.svg'


export const Form = styled.form `
    margin-top: 20px;
`

export const InputContainerEmail = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 410px;
  height: 40px; 
  margin-left: 30px;
  margin-top: 15px;
 


  input[type="text"], input[type="email"], input[type="password"] {
    flex: 1;
    border: none;
    outline: none;
    padding: 12px;
    padding-left: 50px;
    border-radius: 5px;
    border: 1px rgba(37.20, 40.37, 30.11, 0.18) solid;
  
  }
  &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 20px;
        margin: auto 0;
        width: 15px;
        height: 16px;
        background: url(${PeopleImg}) no-repeat;
        background-size: cover;
    }
`;

export const ErrorMessage = styled.p `
    color: red;
`

export const InputContainerPassword = styled.div`
  
    /* &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 20px;
      margin: auto 0;
      width: 15px;
      height: 16px;
      background: url(${EyeImg}) no-repeat;
      background-size: cover;
    } */


  input[type="text"], input[type="email"], input[type="password"] {
 
   
  }

`;

export const ButtonsContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    text-align: center;
    margin-top: 25px;
`

export const ButtonRegistrate = styled.button `
    background: linear-gradient(180deg, #7FB10D 100%, #EAC131 100%); 
    border-radius: 22.78px;
    width:180px;
    height: 35px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`

export const ButtonSignUp = styled.button `
    color: #5C624F;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
    margin-top: 5px;
`


export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 32px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #8E8D8D;
  font-weight: 400;
`;

export const CheckboxLabelExtraText = styled.label `
    color: #5C624F;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
`

export const Hr = styled.hr `
    width: 350px;
    height: 0;
    margin-top: 30px;
    margin-left: 60px;
`
