import styled from "styled-components";
import attention from 'shared/assets/img/requisites/attention.png'


 const WarningTableDiv = styled.article `
    width: 977px;
    height: 60px;
    margin-left: 109px;
    margin-top: 30px;
    background: rgba(32, 32, 32, 0.10);
    border-radius: 5px;
    border: 0.50px #5C624F solid;

`
 const AttentionIcon = styled.img `
   width: 20px;
   height: 20px; 
`
 const WarningTableContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    margin-left: 20px;
    margin-top: 9px;
`
 const WarningTableText = styled.div `
 
`

 const WarningTableHeader = styled.h1 `
    color: #5C624F;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.88px;
`

 const WarningTableBody = styled.p `
    color: #8E8D8D;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.52px;
    margin-top: 2px;
`

const WarningTable = () => {
  return (
    <div>
        <WarningTableDiv>
                <WarningTableContainer>
                    <AttentionIcon src={attention} alt="" />
                    <WarningTableText>
                        <WarningTableHeader>Активація аккаунта</WarningTableHeader>
                        <WarningTableBody>Ваш обліковий запис готовий до роботи! Для виведення винагороди Вам необхідно заповнити реквізити та активувати обліковий запис.</WarningTableBody>
                    </WarningTableText>
                </WarningTableContainer>
            </WarningTableDiv>
    </div>
  )
}

export default WarningTable