import styled from 'styled-components'

export const SignUpWrapper = styled.article `
    width: 345px;
    height: 290px;
    background: #E2FAAD;
    margin-left: 60px;
    margin-top: 25px;
    border-radius: 30px;
`
export const Form = styled.form `
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Input = styled.input `
    width: 316px;
    height: 52px;
    background: #F7F8FA; 
    border-radius: 40px;
    border: 1px rgba(37.20, 40.37, 30.11, 0.50) solid;
    color: #8E8D8D;
    font-size: 16px;
    font-weight: 400;
    padding: 17px 20px;
`

export const SignButton = styled.button `
    width: 316px;
    height: 54px;
    background: linear-gradient(180deg, #7FB10D 100%, #EAC131 100%);
    border-radius: 40px;
    color:white;
`
export const CheckboxWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 35px;
    margin-left: 24px;

`
export const CheckboxContainer = styled.div `
   display: flex;
   flex-direction: row;
   gap: 8px;
   color: #202020;
    font-size: 14px;
    font-weight: 400;
`

export const ForgotPasswordLink = styled.p `
    color: #202020;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
`

export const CheckBox = styled.input `
    width: 15px;
    height: 15px;
`

export const a = styled.a `
    cursor: po;
`