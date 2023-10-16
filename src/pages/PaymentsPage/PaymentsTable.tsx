// import React, { useState } from 'react';
// import styled from 'styled-components';
// import moreImg from 'shared/assets/img/PaymentTable/More.svg'
// import linkImg from 'shared/assets/img/PaymentTable/fi_link.svg'
// import summaImg from 'shared/assets/img/PaymentTable/fi_align-left.png'
// import userImg from 'shared/assets/img/PaymentTable/fi_user.svg'
// import listImg from 'shared/assets/img/PaymentTable/fi_list.png'
// import loaderImg from 'shared/assets/img/PaymentTable/fi_loader.png'
// import starImg from 'shared/assets/img/PaymentTable/fi_star.png'
// import Modal from './Modal';



// const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   margin-left: 30px;
//   margin-top: 15px;
//   border: 1px #E1E2E2 solid;
//   box-shadow: 0px 4.080231666564941px 12.240694999694824px rgba(0, 0, 0, 0.15); 
// `;

// const Th = styled.th`
//     border: 1px #E1E2E2 solid;
//     padding: 10px;
//     text-align: center;
//     background-color: #FCFCFC;
//     color: #222222;
//     font-size: 13.88px;
//     font-weight: 700;
//     height: 50px;
// `;

// const Td = styled.td`
//     border: 1px #E1E2E2 solid;
//     padding: 8px;
//     text-align: center;
//     color: #222222;
//     font-size: 12.31px;
//     font-weight: 400;
// `;

// const ImageCell = styled.td`
//   width: 28px;
//   height: 51px;
//   text-align: center;
//   border: 1px #E1E2E2 solid;
// `;

// const ThImg = styled.img `
//     width: 15px;
//     height: 15px;
//     margin-right: 7px;
// `
// const Button= styled.button `
//     align-items: center;
// `
// const data = [
//   {
//     domain: 'mywebsite.net',
//     payoutAmount: 'Сума 1 грн',
//     payoutStatus: 'Виплачено',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Платіж-чат',
//     reward: '500 ₴',
//   },
//   {
//     domain: 'mywebsite.net',
//     payoutAmount: 'Сума 2 грн',
//     payoutStatus: 'Відхилено',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Платіж-телефон',
//     reward: '5200 ₴',
//   },
//   {
//     domain: 'testdomain.org',
//     payoutAmount: 'Сума 3 грн',
//     payoutStatus: 'Чекає на підтвердження',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Нема відомостей',
//     reward: '3500 ₴',
//   },
//   {
//     domain: 'testdomain.org',
//     payoutAmount: 'Сума 3 грн',
//     payoutStatus: 'На розгляді',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Нема відомостей',
//     reward: '500 ₴',
//   },
//   {
//     domain: 'demo-site.biz',
//     payoutAmount: 'Сума 3 грн',
//     payoutStatus: 'Не активний',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Нема відомостей',
//     reward: '2500 ₴',
//   },
//   {
//     domain: 'demo-site.biz',
//     payoutAmount: 'Сума 3 грн',
//     payoutStatus: 'Скасовано',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Нема відомостей',
//     reward: '500 ₴',
//   },
//   {
//     domain: 'partnerwebsite.com',
//     payoutAmount: 'Сума 3 грн',
//     payoutStatus: 'Виплачено',
//     payoutDate: '11/11/2023',
//     payoutMethod: 'Нема відомостей',
//     reward: '1500 ₴',
//   },

// ];

// const PaymentsTable: React.FC = () => {
//     const [isModalOpen, setModalOpen] = useState(false);

//   // Функция для открытия модального окна
//   const openModal = () => {
//     setModalOpen(true);
//   };

//   // Функция для закрытия модального окна
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const getStatusStyles = (status:string) => {
//     // В этой функции определяем стили в зависимости от статуса
//     switch (status) {
//       case "Виплачено":
//         return { background: "#A9CF54" };
//       case "Відхилено":
//         return { background: "#FF9385" };
//       case "Чекає на підтвердження":
//         return { background: "#A1CDFF" };
//       case "На розгляді":
//         return { background: "#FFD78D" };
//       case "Не активний":
//         return { background: "#888888" };
//       case "Скасовано":
//         return { background: "rgba(195.50, 105.08, 105.08, 0.50)" };
//       default:
//         return {}; // Другие статусы могут использовать стандартные стили
//     }
//   };
//   return (
//     <Table>
//       <thead>
//         <tr>
//           <Th></Th>
//           <Th>
//             <ThImg src={linkImg}/>
//             Домен</Th>
//           <Th>
//           <ThImg src={summaImg}/>
//             Сума виплати</Th>
//           <Th>
//           <ThImg src={userImg}/>
//             Статус виплати</Th>
//           <Th>
//           <ThImg src={listImg}/>
//             Дата виплати</Th>
//           <Th>
//           <ThImg src={loaderImg}/>
//             Спосіб виплат</Th>
//           <Th>
//           <ThImg src={starImg}/>
//             Винагорода</Th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <ImageCell>
//               <Button onClick={openModal}>
//                     <img src={moreImg} alt="" />
//               </Button>
//             </ImageCell>
//             <Td>{item.domain}</Td>
//             <Td>{item.payoutAmount}</Td>
//             <Td style={getStatusStyles(item.payoutStatus)}>
//               {item.payoutStatus}
//             </Td>
//             <Td>{item.payoutDate}</Td>
//             <Td>{item.payoutMethod}</Td>
//             <Td>{item.reward}</Td>
//           </tr>
//         ))}
//       </tbody>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </Table>
//   );
// };

// export default PaymentsTable;



import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import moreImg from 'shared/assets/img/PaymentTable/More.svg';
import linkImg from 'shared/assets/img/PaymentTable/fi_link.svg';
import summaImg from 'shared/assets/img/PaymentTable/fi_align-left.png';
import userImg from 'shared/assets/img/PaymentTable/fi_user.svg';
import listImg from 'shared/assets/img/PaymentTable/fi_list.png';
import loaderImg from 'shared/assets/img/PaymentTable/fi_loader.png';
import starImg from 'shared/assets/img/PaymentTable/fi_star.png';
import Modal from './Modal';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-left: 30px;
  margin-top: 15px;
  border: 1px #E1E2E2 solid;
  box-shadow: 0px 4.080231666564941px 12.240694999694824px rgba(0, 0, 0, 0.15);
`;

const Th = styled.th`
  border: 1px #E1E2E2 solid;
  padding: 10px;
  text-align: center;
  background-color: #FCFCFC;
  color: #222222;
  font-size: 13.88px;
  font-weight: 700;
  height: 50px;
`;

const Td = styled.td`
  border: 1px #E1E2E2 solid;
  padding: 8px;
  text-align: center;
  color: #222222;
  font-size: 12.31px;
  font-weight: 400;
`;

const ImageCell = styled.td`
  width: 28px;
  height: 51px;
  text-align: center;
  border: 1px #E1E2E2 solid;
`;

const ThImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 7px;
`;

const Button = styled.button`
  align-items: center;
`;

const StatusContainer = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: white;

  ${({ css }) => css};
`;

const getStatusStyles = (status: string) => {
    // В этой функции определяем стили в зависимости от статуса
    switch (status) {
      case 'Виплачено':
        return { background: '#A9CF54' };
      case 'Відхилено':
        return { background: '#FF9385' };
      case 'Чекає на підтвердження':
        return { background: '#A1CDFF' };
      case 'На розгляді':
        return { background: '#FFD78D' };
      case 'Не активний':
        return { background: '#888888' };
      case 'Скасовано':
        return { background: 'rgba(195, 105, 105, 0.5)' };
      default:
        return 'transparent'; // Другие статусы могут использовать стандартные стили
    }
  };


const data = [
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

const PaymentsTable: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th></Th>
          <Th>
            <ThImg src={linkImg} />
            Домен
          </Th>
          <Th>
            <ThImg src={summaImg} />
            Сума виплати
          </Th>
          <Th>
            <ThImg src={userImg} />
            Статус виплати
          </Th>
          <Th>
            <ThImg src={listImg} />
            Дата виплати
          </Th>
          <Th>
            <ThImg src={loaderImg} />
            Спосіб виплат
          </Th>
          <Th>
            <ThImg src={starImg} />
            Винагорода
          </Th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <ImageCell>
              <Button onClick={openModal}>
                <img src={moreImg} alt="" />
              </Button>
            </ImageCell>
            <Td>{item.domain}</Td>
            <Td>{item.payoutAmount}</Td>
            <Td>
            <StatusContainer css={css`${getStatusStyles(item.payoutStatus)}`}>
                {item.payoutStatus}
              </StatusContainer>
            </Td>
            <Td>{item.payoutDate}</Td>
            <Td>{item.payoutMethod}</Td>
            <Td>{item.reward}</Td>
          </tr>
        ))}
      </tbody>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Table>
  );
};

export default PaymentsTable;
