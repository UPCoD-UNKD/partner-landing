import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import { CreateBtn, CreateCTA, CreateTeamContainer, CreateTeamHeader, StyledLink, TeamContent } from './CreateTeamStyles'
import WarningTable from 'shared/ui/warningtable/WarningTable'

const CreateTeam = () => {
  
   
  return (
    <div>
        <Navbar />
            <CreateTeamContainer>
                <SideMenu />
                    <TeamContent>
                            <WarningTable />
                            <CreateTeamHeader>
                                Створити команду
                            </CreateTeamHeader>
                            <CreateCTA>
                                Створіть команду, що приведе Вас до успіху!
                                <CreateBtn>
                                    <StyledLink to="/addmember">Створити команду</StyledLink></CreateBtn>
                            </CreateCTA>
                    </TeamContent>
            </CreateTeamContainer>
    </div>
  )
}

export default CreateTeam