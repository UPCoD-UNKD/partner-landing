// import SideMenu from 'pages/Sidemenu/SideMenu'
// import Navbar from 'shared/ui/navbar/Navbar'
// import { InputFieldSelect, InputFieldSelectStatus, InputsContainer, PaymentsContainer, PaymentsContent } from './PaymentStyles'
// import PaymentsTable from './PaymentsTable'
// import WarningTable from 'shared/ui/warningtable/WarningTable'
// import { useState } from 'react'


// const PaymentsPage = () => {
//     const [selectedStatus, setSelectedStatus] = useState(''); 

//     const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedStatus(event.target.value);
//       };
//       const data = [
//        'Виплачено',
//        'Відхилено',
//        'В процесі'
//       ];
//   return (
//     <div>
//         <Navbar />
//         <PaymentsContainer>
//             <SideMenu />
//             <PaymentsContent>
//                 <WarningTable />
//                 <InputsContainer>
//                     <InputFieldSelect id="input2">
//                                 <option value="option1">Останні 30 днів</option>
//                                 <option value="option2">Останні 40 днів</option>
//                                 <option value="option3">Останні 50 днів</option>
//                                 <option value="option4">Останні 60 днів</option>
//                     </InputFieldSelect>
//                     <InputFieldSelectStatus id="input2" onChange={handleStatusChange}>
//                                 <option value="">Статус</option>
//                                 <option value="Виплачено">Виплачено</option>
//                                 <option value="Відхилено">Відхилено</option>
//                                 <option value="В процесі">В процесі</option>
//                     </InputFieldSelectStatus >
//                 </InputsContainer>
//                 <PaymentsTable data={data} selectedStatus={selectedStatus} />
//             </PaymentsContent>
//         </PaymentsContainer>
//     </div>
//   )
// }

// export default PaymentsPage

import Navbar from 'shared/ui/navbar/Navbar';
import SideMenu from 'pages/Sidemenu/SideMenu';
import WarningTable from 'shared/ui/warningtable/WarningTable';
import {
  PaymentsContainer,
  PaymentsContent,
} from './PaymentStyles';
import PaymentsTable from './PaymentsTable';

const PaymentsPage = () => {
  const paymentData = [
    {
      domain: 'mywebsite.net',
      payoutAmount: 'Сума 1 грн',
      payoutStatus: 'Виплачено',
      payoutDate: '11/11/2023',
      payoutMethod: 'Платіж-чат',
      reward: '500 ₴',
    },
    {
      domain: 'mywebsite.net',
      payoutAmount: 'Сума 2 грн',
      payoutStatus: 'Відхилено',
      payoutDate: '11/11/2023',
      payoutMethod: 'Платіж-телефон',
      reward: '5200 ₴',
    },
    {
      domain: 'testdomain.org',
      payoutAmount: 'Сума 3 грн',
      payoutStatus: 'Чекає на підтвердження',
      payoutDate: '11/11/2023',
      payoutMethod: 'Нема відомостей',
      reward: '3500 ₴',
    },
    {
      domain: 'testdomain.org',
      payoutAmount: 'Сума 3 грн',
      payoutStatus: 'На розгляді',
      payoutDate: '11/11/2023',
      payoutMethod: 'Нема відомостей',
      reward: '500 ₴',
    },
    {
      domain: 'demo-site.biz',
      payoutAmount: 'Сума 3 грн',
      payoutStatus: 'Не активний',
      payoutDate: '11/11/2023',
      payoutMethod: 'Нема відомостей',
      reward: '2500 ₴',
    },
    {
      domain: 'demo-site.biz',
      payoutAmount: 'Сума 3 грн',
      payoutStatus: 'Скасовано',
      payoutDate: '11/11/2023',
      payoutMethod: 'Нема відомостей',
      reward: '500 ₴',
    },
    {
      domain: 'partnerwebsite.com',
      payoutAmount: 'Сума 3 грн',
      payoutStatus: 'Виплачено',
      payoutDate: '11/11/2023',
      payoutMethod: 'Нема відомостей',
      reward: '1500 ₴',
    },
  ];

  return (
    <div>
      <Navbar />
      <PaymentsContainer>
        <SideMenu />
        <PaymentsContent>
          <WarningTable />
          
          <PaymentsTable data={paymentData} />
        </PaymentsContent>
      </PaymentsContainer>
    </div>
  );
};

export default PaymentsPage;