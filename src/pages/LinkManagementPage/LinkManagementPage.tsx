import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import WarningTable from 'shared/ui/warningtable/WarningTable'
import { HeaderBtn, LinkManagementContainer, LinkManagementHeader, LinkManagementPageContent } from './LinkManagementStyles'
import LinkManagementTable from './LinkManagementTable'

const LinkManagementPage = () => {
  return (
    <div>
        <Navbar/>
            <LinkManagementContainer>
                <SideMenu />
                    <LinkManagementPageContent>
                        <WarningTable />
                            <LinkManagementHeader>
                                Актуальні посилання в роботі
                                <HeaderBtn>Додати посилання</HeaderBtn>
                            </LinkManagementHeader>
                            <LinkManagementTable />
                    </LinkManagementPageContent>
            </LinkManagementContainer>
    </div>
  )
}

export default LinkManagementPage