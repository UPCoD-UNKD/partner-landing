import styled from "styled-components";


export const OverviewContainer = styled.div `
    display: flex;
    flex-direction: row;
`

export const OverviewContent = styled.div `
    display: flex;
    flex-direction: column;
`

export const OverviewHeader = styled.h2 `
    color: #060606;
    font-size: 19.19px;
    font-weight: 400;
    letter-spacing: 0.19px;
    display: flex;
    flex-direction: row;
    gap: 305px;
    margin-left: 165px;
    margin-top: 35px;
`

export const InputFieldSelect = styled.select `
  width: 135px;
  height: 40px;
  margin-top: -5px;
  border-radius: 14.83px; 
  border: 0.50px #5C624F solid;
  text-align: center;
  color: #5C624F;
    font-size: 12.21px;
    font-weight: 400;
    letter-spacing: 0.12px;
`


export const HeaderExtraDiv = styled.div `
    display: flex;
    flex-direction: row;
    gap: 35px;
`

export const MainIndicatorsTable = styled.div `
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 347px;
    background: rgba(102, 144, 5, 0.5);
    border-radius: 5px;
    margin-top: -30px;
    padding-top: 25px;
    align-items: center;

`

export const Header = styled.h2 `
    color: #202020;
    font-size: 18px;
    font-family: Fontin Sans CR;
    font-weight: bold;
    letter-spacing: 0.18px;
`

export const IndicatorItem = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 9px;
    background: rgba(244.48, 247.13, 248.63, 0.94);
    width: 235px;
    height: 43px;
    align-items: center;
    color: #4F5154;
    font-size: 10.07px;
    font-family: Fontin Sans CR;
    font-weight: bold;
    line-height: 12.59px;
    margin-top: 1.7px;
    padding-left: 9px;
`

export const IndicatorItems = styled.div `
    margin-top: 12px;
`


export const UnderlineText = styled.p `
    color: #5C624F;
    font-size: 10.07px;
    font-family: Fontin Sans CR;
    font-weight: 700;
    text-decoration: underline;
    line-height: 12.59px;
    cursor: pointer;
`