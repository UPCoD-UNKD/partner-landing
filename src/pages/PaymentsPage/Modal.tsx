import React from 'react';
import styled from 'styled-components';
import closeImg from 'shared/assets/img/PaymentTable/x.svg'
import ModalTable from './ModalTable';

const ModalWrapper = styled.div`
  position: fixed;
  top:0;
  width: 608px;
  height: 575px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 999;
  margin-top: 158px;
  margin-left: 120px;
  background: rgba(255, 255, 255, 0.90); 
  box-shadow: 0px 1.2000000476837158px 6px rgba(0, 0, 0, 0.16); 
  border-radius: 15px;
`;

const ModalContent = styled.div`
    padding-left: 29px;
`;
const ModelDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
`
const ModelDescription = styled.p `
    color: #242424;
    font-size: 10.80px;
    font-weight: 400;
`
const ModalHeader = styled.h2 `
    color: #5C624F;
    font-size: 22px;
    font-weight: 400;
    margin-top: 25px;
`

const Hrn = styled.span `
    color: #242424;
    font-size: 10.80px;
    font-weight: 700;
`
const ModalHeading = styled.div `
    display: flex;
    flex-direction: row;
    gap: 295px;
`
const ButtonClose = styled.button `
    width: 25px;
    height: 25px;
    margin-top: 15px;
`



interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeading>
            <ModalHeader>
                Загальна інформація:
            </ModalHeader>
            <ButtonClose
             onClick={onClose}>
                <img src={closeImg} alt="" />
             </ButtonClose>
        </ModalHeading>
        <ModelDescriptionContainer>
            <ModelDescription>
                Загальна сума продажів за період: <Hrn>270 ₴ </Hrn>
            </ModelDescription>
            <ModelDescription>
                Загальна кількість продажів: <Hrn>2</Hrn>
            </ModelDescription>
            <ModelDescription>
            Прогноз продажів на наступний місяць: <Hrn>1500 ₴ </Hrn>
            </ModelDescription>
            <ModalTable />
        </ModelDescriptionContainer>
        
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
