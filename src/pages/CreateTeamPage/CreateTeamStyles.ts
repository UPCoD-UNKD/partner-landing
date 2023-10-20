import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CreateTeamContainer = styled.div `
    display: flex;
    flex-direction: row;
`

export const TeamContent = styled.div `
    display: flex;
    flex-direction: column;
`

export const CreateTeamHeader = styled.h1 `
    color: #5C624F;
    font-size: 22px;
    font-weight: 700;
    margin-top: 40px;
    margin-left: 111px;
`

export const CreateCTA = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #25281E;
    font-size: 18px;
    font-weight: 700;
    background: #EDFFC9; 
    border-radius: 10px;
    margin-left: 111px;
    margin-top: 35px;
    padding: 29px 0;
`

export const CreateBtn = styled.button `
    color: #25281E;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    background: #A9CF54; 
    border-radius: 22.78px;
    padding: 9px 40px;
    text-decoration: none;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #25281E;
`