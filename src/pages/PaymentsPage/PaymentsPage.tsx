import SideMenu from 'pages/Sidemenu/SideMenu'
import Navbar from 'shared/ui/navbar/Navbar'
import { InputFieldSelect, InputFieldSelectStatus, InputsContainer, PaymentsContainer, PaymentsContent } from './PaymentStyles'
import PaymentsTable from './PaymentsTable'
import WarningTable from 'shared/ui/warningtable/WarningTable'


const PaymentsPage = () => {
  return (
    <div>
        <Navbar />
        <PaymentsContainer>
            <SideMenu />
            <PaymentsContent>
                <WarningTable />
                <InputsContainer>
                    <InputFieldSelect id="input2">
                                <option value="option1">Останні 30 днів</option>
                                <option value="option2">Останні 40 днів</option>
                                <option value="option3">Останні 50 днів</option>
                                <option value="option4">Останні 60 днів</option>
                    </InputFieldSelect>
                    <InputFieldSelectStatus id="input2">
                                <option value="option1">Статус</option>
                                <option value="option2">Виплачено</option>
                                <option value="option3">Не виплачено</option>
                                <option value="option4">В процесі</option>
                    </InputFieldSelectStatus>
                </InputsContainer>
                <PaymentsTable />
            </PaymentsContent>
        </PaymentsContainer>
    </div>
  )
}

export default PaymentsPage