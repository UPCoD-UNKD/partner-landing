import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-width: 900px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
 
`;

const Input = styled.input`
    width: 911px;
    height: 35px;
    padding: 10px 11px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #8E8D8D;
    font-size: 12px;
    font-family: Fontin Sans CR;
    margin-top: 5px;
`;

const Select = styled.select`
    width: 911px;
    height: 35px;
    padding: 10px 11px; 
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #8E8D8D;
    font-size: 12px;
    font-family: Fontin Sans CR;
    margin-top: 5px;
`;

const Button = styled.button`
    color: #25281E;
    font-size: 16px;
    font-family: Fontin Sans CR;
    font-weight: 700;
    cursor: pointer;
    background: #A9CF54; 
    border-radius: 22.78px; 
    align-items: center;
    padding: 9px 32px;
    margin-top: 10px;
    width: 220px;
    margin-left: 700px;
`;


const AffiliateInputs: React.FC = () => {
  // Состояния для хранения значений инпутов
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [selectedOffer, setSelectedOffer] = useState('');
  const [additionalLink, setAdditionalLink] = useState('');

  // Обработчики изменения значений инпутов
  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOfferChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOffer(event.target.value);
  };

  const handleAdditionalLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalLink(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ваши действия при отправке формы
    // Например, отправка данных на сервер
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="linkInput">Вставте посилання</Label>
        <Input
          type="text"
          id="linkInput"
          placeholder="Наприклад, https://www.aliexpress.com "
          value={link}
          onChange={handleLinkChange}
        />
      </FormField>

      <FormField>
        <Label htmlFor="nameInput">Назва</Label>
        <Input
          type="text"
          id="nameInput"
          placeholder="Наприклад, гриль банер збоку сайта"
          value={name}
          onChange={handleNameChange}
        />
      </FormField>

      <FormField>
        <Label htmlFor="offerSelect">Оберіть оффер</Label>
        <Select
          id="offerSelect"
          value={selectedOffer}
          onChange={handleOfferChange}
        >
          <option value="offer1">AliExpress</option>
          <option value="offer2">Ali</option>
          <option value="offer3">Express</option>
        </Select>
      </FormField>

      <FormField>
        <Label htmlFor="additionalLinkInput">Вставте посилання</Label>
        <Input
          type="text"
          id="additionalLinkInput"
          placeholder="Наприклад, Ваш сайт"
          value={additionalLink}
          onChange={handleAdditionalLinkChange}
        />
      </FormField>

      <Button type="submit">Відправити</Button>
    </FormContainer>
  );
};

export default AffiliateInputs;
