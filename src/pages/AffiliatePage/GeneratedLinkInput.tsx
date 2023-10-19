import React, { useRef } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 854px;
  padding-left: 28px;
 
`;

const CopyInput = styled.input`
  flex: 1;
  color: #25281E;
    font-size: 14px;
    padding: 11px 10px;
    background: #F7F8FA; border-radius: 5px;
`;


interface CopyLinkInputProps {
  link: string;
}

const GeneratedLinkInput: React.FC<CopyLinkInputProps> = ({ link }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

//   const copyToClipboard = () => {
//     if (inputRef.current) {
//       inputRef.current.select();
//       document.execCommand('copy');
//       // You can also provide a visual indication or a message that the link has been copied
//     }
//   };

  return (
    <InputWrapper>
      <CopyInput ref={inputRef} type="text" value={link} readOnly />
    </InputWrapper>
  );
};

// Пример использования:
const App: React.FC = () => {
  const generatedLink = 'https://42bae7c3.partner-landing.pages.dev/?partner_id=44007'; // Замените на вашу сгенерированную ссылку

  return (
    <div>
      <GeneratedLinkInput link={generatedLink} />
    </div>
  );
};

export default App;
