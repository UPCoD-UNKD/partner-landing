import styled from "styled-components";
import RequisiteInputs from "./RequisiteInputs";

export const RequisitesTableContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 58.5px;
    margin-left: 171.6px;
`
export const RequisitesTableStructure = styled.div `
    display: flex;
    flex-direction: column;
`
export const RequisiteTableHeader = styled.h2 `
  color: #060606;
  font-size: 19.19px;
  font-weight: 400;
  letter-spacing: 0.19px;
  display: flex;
  flex-direction: row;
  gap: 400px;
`

const SecondHeader = styled.h2 `
  color: #060606;
  font-size: 19.19px;
  font-weight: 400;
  letter-spacing: 0.19px;
  margin-left: 70px;
`

const RequisiteTables = styled.div `
  display: flex;
  flex-direction: row;
  gap: 120px;
`

const RequisitesTable = () => {
  return (
    <RequisitesTableContainer>
        <RequisitesTableStructure>
            <RequisiteTableHeader>
              Реквізити
              <SecondHeader>Інформація про керівника</SecondHeader>
            </RequisiteTableHeader>
            <RequisiteTables>
              <RequisiteInputs />
            </RequisiteTables>
            
        </RequisitesTableStructure>
    </RequisitesTableContainer>
  )
}

export default RequisitesTable