import React, { useState } from 'react';
import styled from 'styled-components';
import moreImg from 'shared/assets/img/PaymentTable/More.svg';
import linkImg from 'shared/assets/img/PaymentTable/fi_link.svg';
import summaImg from 'shared/assets/img/PaymentTable/fi_align-left.png';
import userImg from 'shared/assets/img/PaymentTable/fi_user.svg';
import listImg from 'shared/assets/img/PaymentTable/fi_list.png';
import loaderImg from 'shared/assets/img/PaymentTable/fi_loader.png';
import starImg from 'shared/assets/img/PaymentTable/fi_star.png';
import Modal from './Modal';
import { InputFieldSelect, InputFieldSelectStatus, InputsContainer } from './PaymentStyles';

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

const StatusContainer = styled.span<{ css: string | { background: string } }>`
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

const Status = ({ status }: { status: string }) => {
  const statusStyle = getStatusStyles(status);
  return (
    <StatusContainer css={statusStyle}>
      {status}
    </StatusContainer>
  );
};

export type PaymentData = {
  domain: string;
  payoutAmount: string;
  payoutStatus: string;
  payoutDate: string;
  payoutMethod: string;
  reward: string;
};

const PaymentsTable: React.FC<{ data: PaymentData[] }> = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const filteredData = selectedStatus
    ? data.filter((item) => item.payoutStatus === selectedStatus)
    : data;

  return (
    <div>
      <InputsContainer>
            <InputFieldSelect id="input1">
              <option value="option1">Останні 30 днів</option>
              <option value="option2">Останні 40 днів</option>
              <option value="option3">Останні 50 днів</option>
              <option value="option4">Останні 60 днів</option>
            </InputFieldSelect>
            <InputFieldSelectStatus id="input2" onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value="">Статус</option>
                <option value="Виплачено">Виплачено</option>
                <option value="Відхилено">Відхилено</option>
                <option value="В процесі">В процесі</option>
            </InputFieldSelectStatus>
          </InputsContainer>
      
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
          {filteredData.map((item, index) => (
            <tr key={index}>
              <ImageCell>
                <Button onClick={openModal}>
                  <img src={moreImg} alt="" />
                </Button>
              </ImageCell>
              <Td>{item.domain}</Td>
              <Td>{item.payoutAmount}</Td>
              <Td>
                <Status status={item.payoutStatus} />
              </Td>
              <Td>{item.payoutDate}</Td>
              <Td>{item.payoutMethod}</Td>
              <Td>{item.reward}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PaymentsTable;