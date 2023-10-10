import React, { useState } from 'react';
import {ButtonRegistrate, ButtonSignUp, ButtonsContainer, Checkbox, CheckboxContainer, CheckboxLabel, CheckboxLabelExtraText, Form, Hr, InputContainerEmail, InputContainerPassword} from './LoginFormStyles' 
import PasswordInput from './PasswordInput';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainerEmail>
        <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
            required
          />

      </InputContainerEmail>
      <InputContainerPassword>
        <label htmlFor="password"></label>
           <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          placeholder="Пароль"
        />

      </InputContainerPassword>

      <CheckboxContainer>
                <Checkbox type="checkbox" id="consentCheckbox" required />
                <CheckboxLabel htmlFor="consentCheckbox">
                Я даю <CheckboxLabelExtraText>згоду</CheckboxLabelExtraText> на обробку персональних даних
                </CheckboxLabel>
            </CheckboxContainer>
            <Hr />
      <ButtonsContainer>
                <ButtonRegistrate>
                    Зареєструватись
                </ButtonRegistrate>
                <ButtonSignUp>
                    Увійти
                </ButtonSignUp>
            </ButtonsContainer>
    </Form>
  );
};

export default LoginForm;
