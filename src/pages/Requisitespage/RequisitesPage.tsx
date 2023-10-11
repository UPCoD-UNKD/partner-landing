import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import { AttentionIcon, PageDiv, RequisitesPageContainer, SaveButton, WarningTable, WarningTableBody, WarningTableContainer, WarningTableHeader, WarningTableText } from './RequisitesStyles'
import attention from 'shared/assets/img/requisites/attention.png'
import RequisitesTable from './RequisitesTable'
const RequisitesPage = () => {
  return (
    <div>
        <Navbar />
        <RequisitesPageContainer>
            <SideMenu />
            <PageDiv>
            <WarningTable>
                <WarningTableContainer>
                    <AttentionIcon src={attention} alt="" />
                    <WarningTableText>
                        <WarningTableHeader>Активація аккаунта</WarningTableHeader>
                        <WarningTableBody>Ваш обліковий запис готовий до роботи! Для виведення винагороди Вам необхідно заповнити реквізити та активувати обліковий запис.</WarningTableBody>
                    </WarningTableText>
                </WarningTableContainer>
            </WarningTable>
            <RequisitesTable />
            <SaveButton>
                Зберегти реквізити
            </SaveButton>
            </PageDiv>
        </RequisitesPageContainer>
    </div>
  )
}

export default RequisitesPage