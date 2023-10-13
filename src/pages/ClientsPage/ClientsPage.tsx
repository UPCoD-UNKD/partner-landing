import { AttentionIcon, WarningTable, WarningTableBody, WarningTableContainer, WarningTableHeader, WarningTableText } from 'pages/Requisitespage/RequisitesStyles'
import SideMenu from 'pages/Sidemenu/SideMenu'
import attention from 'shared/assets/img/requisites/attention.png'
import Navbar from 'shared/ui/navbar/Navbar'
import { ClientsPageBody, ClientsPageContainer, InputFieldSelectDays, InputFieldSelectManager, InputFieldSelectStatus, InputsContainer } from './ClientsPageStyles'
import ClientsTable from './ClientsTable'
import { useState } from 'react'


interface TableData {
    id: number;
    name: string;
    status: string;
    orderDate: string;
    orderAmount: string;
    responsible: string;
    website: string;
  }
const ClientsPage = () => {
    const [selectedStatus, setSelectedStatus] = useState<string>('option1');
    const [selectedDays, setSelectedDays] = useState<string>('option1');
    const [selectedManager, setSelectedManager] = useState<string>('option1');
    

    const data: TableData[] = [
        {
          id: 1,
          name: 'Клієнт1',
          status: 'Активний',
          orderDate: '2023-09-10',
          orderAmount: '1000 грн',
          responsible: 'Менеджер2',
          website: 'www.hr-opt.com',
        },
        {
          id: 2,
          name: 'Клієнт2',
          status: 'Активний',
          orderDate: '2023-09-10',
          orderAmount: '1000 грн',
          responsible: 'Менеджер',
          website: 'www.hr-opt.com',
        },
        {
          id: 3,
          name: 'Клієнт3',
          status: 'Лояльний',
          orderDate: '2023-09-10',
          orderAmount: '1000 грн',
          responsible: 'Менеджер2',
          website: 'www.hr-opt.com',
        },
        {
          id: 4,
          name: 'Клієнт4',
          status: 'Новий',
          orderDate: '2023-09-10',
          orderAmount: '1000 грн',
          responsible: 'Менеджер3',
          website: 'www.hr-opt.com',
        },
        {
          id: 5,
          name: 'Клієнт5',
          status: 'VIP-клієнт',
          orderDate: '2023-09-11',
          orderAmount: '1000 грн',
          responsible: 'Менеджер4',
          website: 'www.hr-opt.com',
        },
        {
          id: 6,
          name: 'Клієнт6',
          status: 'Партнерський',
          orderDate: '2023-09-12',
          orderAmount: '1000 грн',
          responsible: 'Менеджер2',
          website: 'www.hr-opt.com',
        },
        {
          id: 7,
          name: 'Клієнт7',
          status: 'Заблокований',
          orderDate: '2023-09-15',
          orderAmount: '6000 грн',
          responsible: 'Менеджер',
          website: 'www.hr-opt.com',
        },
        {
          id: 8,
          name: 'Клієнт8',
          status: 'Неактивний',
          orderDate: '2023-10-01',
          orderAmount: '1500 грн',
          responsible: 'Менеджер3',
          website: 'www.hr-opt.com',
        },
        // Добавьте остальные записи данных
      ];

      
  
    // Определение функции для фильтрации данных по выбранному статусу
    const filterData = () => {
      let filteredData = data;
  
      if (selectedStatus !== 'option1') {
        filteredData = filteredData.filter(item => item.status === selectedStatus);
      }
  
      if (selectedDays !== 'option1') {
        // Фильтрация по дням
        filteredData = filteredData.filter(item => item.orderDate === selectedDays);
      }
  
      if (selectedManager !== 'option1') {
        // Фильтрация по менеджерам
        filteredData = filteredData.filter(item => item.responsible === selectedManager);
      }
  
      return filteredData;
    };
  
    // Получить отфильтрованные данные
    const filteredData = filterData();
  
   
  
    

  return (
    <div>
        <Navbar />
            <ClientsPageContainer>
                <SideMenu />
                <ClientsPageBody>
                    <WarningTable>
                        <WarningTableContainer>
                            <AttentionIcon src={attention} alt="" />
                            <WarningTableText>
                                <WarningTableHeader>Активація аккаунта</WarningTableHeader>
                                <WarningTableBody>Ваш обліковий запис готовий до роботи! Для виведення винагороди Вам необхідно заповнити реквізити та активувати обліковий запис.</WarningTableBody>
                            </WarningTableText>
                        </WarningTableContainer>
                    </WarningTable>
                    <InputsContainer>
                        <InputFieldSelectDays 
                        id="input2"
                        value={selectedDays}
                        onChange={(e) => setSelectedDays(e.target.value)}>
                                <option value="option1">Останні 30 днів</option>
                                <option value="Останні 40 днів">Останні 40 днів</option>
                                <option value="Останні 40 днів">Останні 40 днів</option>
                                <option value="Останні 50 днів">Останні 50 днів</option>
                                <option value="Останні 60 днів">Останні 60 днів</option>
                            </InputFieldSelectDays>
                            <InputFieldSelectStatus
                             id="input2"
                             value={selectedStatus}
                             onChange={(e) => setSelectedStatus(e.target.value)}>
                                <option value="option1">Статус</option>
                                <option value="Активний">Активний</option>
                                <option value="Заблокований">Заблокований</option>
                                <option value="VIP-клієнт">VIP-клієнт</option>
                                <option value="Новий">Новий</option>
                                <option value="Лояльний">Лояльний</option>
                                <option value="Неактивний">Неактивний</option>
                            </InputFieldSelectStatus>
                            <InputFieldSelectManager 
                            id="input2"
                            value={selectedManager}
                            onChange={(e) => setSelectedManager(e.target.value)}>
                                <option value="option1">Менеджер</option>
                                <option value="Менеджер">Менеджер1</option>
                                <option value="Менеджер2">Менеджер2</option>
                                <option value="Менеджер3">Менеджер3</option>
                                <option value="Менеджер4">Менеджер4</option>
                            </InputFieldSelectManager>
                        </InputsContainer>
                        <ClientsTable data={filteredData} />
                           
                </ClientsPageBody>
            </ClientsPageContainer>
    </div>
  )
}

export default ClientsPage


