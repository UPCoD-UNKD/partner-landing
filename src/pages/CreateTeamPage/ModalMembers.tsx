import { ReactNode } from 'react';
import styled from 'styled-components';
import closeBtn from 'shared/assets/img/TeamMembers/close_111152.png'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  width: 800px;
  height: 700px;
  position: relative;
`;



const CloseImg = styled.img `
position: absolute;
    top: 20px;
    right: 20px;
    height: 33px;
    width: 33px;
    cursor: pointer;
`

const Modal = ({ show, handleClose, children }: { show: boolean, handleClose: () => void, children: ReactNode }) => {
    if (!show) {
      return null;
    }

  return (
    <ModalBackground>
      <ModalContent>
        {children}
        <CloseImg src={closeBtn} onClick={handleClose}/>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
