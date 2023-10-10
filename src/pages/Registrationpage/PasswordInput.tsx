import React, { useState } from 'react';
import styled from 'styled-components';
import EyeImg from 'shared/assets/img/registrationpageicons/Eye.svg'
import LockImg from 'shared/assets/img/registrationpageicons/Lock.svg'

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  width: 410px;
  height: 40px; 
  margin-left: 30px;
  border-radius: 5px;
  margin-top: 15px;
  &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 20px;
      margin: auto 0;
      width: 12px;
      height: 16px;
      background: url(${LockImg}) no-repeat;
      background-size: cover;
      z-index: 999;
    }
`;

const PasswordInputField = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding: 12px;
    padding-left: 50px;
    border-radius: 5px;
    border: 1px rgba(37.20, 40.37, 30.11, 0.18) solid;
    position: relative; /* Добавляем относительное позиционирование */
    z-index: 1; /* Устанавливаем z-index, чтобы инпут был выше псевдоэлемента */
`;

const ShowPasswordButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute; /* Абсолютное позиционирование для псевдоэлемента */
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 2; /* Устанавливаем z-index выше инпута */
`;


interface PasswordInputProps {
    value: string; // Указываем тип 'value' как строку
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }


const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputContainer>
      <PasswordInputField
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <ShowPasswordButton onClick={toggleShowPassword}>
        <img src={EyeImg} alt="Show Password" />
      </ShowPasswordButton>
    </PasswordInputContainer>
  );
};

export default PasswordInput;
