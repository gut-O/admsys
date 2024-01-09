// PasswordRecovery.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import {
  PageContainer,
  PersonIcon,
  FormLabel,
  InputField,
  LinkStyle,
  SubmitButton,
  LoginTitle,
  LoginContainer,
  LinkContainer,
} from '../styles/loginStyles';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Lógica para enviar e-mail de recuperação aqui
    console.log('E-mail de recuperação enviado para:', email);
  };

  return (
    <PageContainer>
      <LoginContainer>
        <PersonIcon>
          <FaUser />
        </PersonIcon>
        <LoginTitle>Recuperação de Senha</LoginTitle>
        <FormLabel htmlFor="email">E-mail:</FormLabel>
        <InputField
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton onClick={handleRecovery}>Enviar E-mail</SubmitButton>
        <LinkContainer>
        <LinkStyle to="/login">Voltar para o Login</LinkStyle>
        </LinkContainer>
      </LoginContainer>
    </PageContainer>
  );
};

export default PasswordRecovery;
