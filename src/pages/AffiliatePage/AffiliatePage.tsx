import React from 'react'
import { AffHeader, AffiliatePageBodyPageBody, AffiliatePageContent, AfilliatePageContainer, GeneratedLink, GeneratedLinkHeader, GeneratedLinkHelperText } from './AffiliatePageStyles'
import SideMenu from 'pages/Sidemenu/SideMenu'
import { AttentionIcon, WarningTable, WarningTableBody, WarningTableContainer, WarningTableHeader, WarningTableText } from 'pages/Requisitespage/RequisitesStyles'
import attention from 'shared/assets/img/requisites/attention.png'
import Navbar from 'shared/ui/navbar/Navbar'
import AffiliateInputs from './AffiliateInputs'
import GeneratedLinkInput from './GeneratedLinkInput'


const AffiliatePage = () => {
  return (
    <div>
         <Navbar />
            <AfilliatePageContainer>
                <SideMenu />
                <AffiliatePageBodyPageBody>
                    <WarningTable>
                        <WarningTableContainer>
                            <AttentionIcon src={attention} alt="" />
                            <WarningTableText>
                                <WarningTableHeader>Активація аккаунта</WarningTableHeader>
                                <WarningTableBody>Ваш обліковий запис готовий до роботи! Для виведення винагороди Вам необхідно заповнити реквізити та активувати обліковий запис.</WarningTableBody>
                            </WarningTableText>
                        </WarningTableContainer>
                    </WarningTable>
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