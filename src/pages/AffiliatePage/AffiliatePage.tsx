import { AffHeader, AffiliatePageBodyPageBody, AffiliatePageContent, AfilliatePageContainer, GeneratedLink, GeneratedLinkHeader, GeneratedLinkHelperText } from './AffiliatePageStyles'
import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import AffiliateInputs from './AffiliateInputs'
import GeneratedLinkInput from './GeneratedLinkInput'
import WarningTable from 'shared/ui/warningtable/WarningTable'


const AffiliatePage = () => {
  return (
    <div>
         <Navbar />
            <AfilliatePageContainer>
                <SideMenu />
                <AffiliatePageBodyPageBody>
                    <WarningTable />
                    <AffiliatePageContent>
                        <AffHeader> Створення партнерського посилання</AffHeader>
                        <AffiliateInputs />
                    </AffiliatePageContent>
                    <GeneratedLink>
                        <GeneratedLinkHeader> Ваше партнерське посилання</GeneratedLinkHeader>
                        <GeneratedLinkHelperText>Натисніть на неї, щоб скопіювати</GeneratedLinkHelperText>
                        <GeneratedLinkInput />
                    </GeneratedLink>
                </AffiliatePageBodyPageBody>
            </AfilliatePageContainer>
    </div>
  )
}

export default AffiliatePage