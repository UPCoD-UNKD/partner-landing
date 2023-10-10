import React, { useState } from 'react';
import { CheckBox, CheckboxContainer, CheckboxWrapper, ForgotPasswordLink, Form, Input, SignButton, SignUpWrapper } from './SignUpFormStyles';




const SignUpForm = () => {
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
    <SignUpWrapper >
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='Введіть Ваш e-mail'
          required
        />
      </div>
      <div>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Введіть пароль'
          required
        />
      </div>
      <div>
        <SignButton type="submit">Увійти</SignButton>
      </div>
        <CheckboxWrapper>
            <CheckboxContainer>
                <CheckBox type="checkbox" id="rememberMeCheckbox"/>
                <label htmlFor="rememberMeCheckbox">Запам’ятати мене</label>
            </CheckboxContainer>
            <ForgotPasswordLink>Забули пароль?</ForgotPasswordLink>
        </CheckboxWrapper>
    </Form>
    </SignUpWrapper>
  );
};

export default SignUpForm;
