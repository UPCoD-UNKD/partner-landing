import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import WarningTable from 'shared/ui/warningtable/WarningTable'
import { AddButton, ApiArticle, ApiHeader, ApiPageContainer, ApiPageContainerContent } from './ApiStyles'
import { GeneratedLink, GeneratedLinkHeader, GeneratedLinkHelperText } from 'pages/APIPage/ApiStyles'
import GeneratedLinkInput from 'pages/AffiliatePage/GeneratedLinkInput'

const ApiPage = () => {
  return (
    <div>
        <Navbar />
            <ApiPageContainer>
                <SideMenu />
                    <ApiPageContainerContent>
                        <WarningTable />
                        <ApiHeader>
                            API для інтеграції
                        </ApiHeader>
                        <ApiArticle>
                        Для додавання власного фірмового домену, який ви використовуватимете для створення коротких посилань, вам необхідно внести дві зміни в
                         налаштування запису DNS вашого домену:
                        <br /> <br />
                        1. Встановіть запис DNS A: 46.248.190.217. <br /> <br />
                        2. Додати запис DNS TXT . Після додавання вашого домену ми згенеруємо унікальний токен, який ви повинні вказати в налаштуваннях DNS
                         у записі TXT. Токен буде доступний після додавання домену і буде відображатися нижче в розділі вашого домену.
                        </ApiArticle>

                        <GeneratedLink>
                            <GeneratedLinkHeader> Тут ви можете додати свій домен</GeneratedLinkHeader>
                            <GeneratedLinkHelperText>Натисніть на неї, щоб скопіювати</GeneratedLinkHelperText>
                            <GeneratedLinkInput />
                        </GeneratedLink>

                        <AddButton>
                            Додати новий API
                        </AddButton>
                    </ApiPageContainerContent>
            </ApiPageContainer>
    </div>
  )
}

export default ApiPage