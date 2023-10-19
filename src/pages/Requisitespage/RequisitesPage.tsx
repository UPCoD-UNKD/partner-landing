import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import {  PageDiv, RequisitesPageContainer, SaveButton } from './RequisitesStyles'

import RequisitesTable from './RequisitesTable'
import WarningTable from 'shared/ui/warningtable/WarningTable'
const RequisitesPage = () => {
  return (
    <div>
        <Navbar />
        <RequisitesPageContainer>
            <SideMenu />
            <PageDiv>
                <WarningTable/>
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