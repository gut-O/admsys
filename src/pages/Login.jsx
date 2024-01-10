import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  LinkContainer
} from '../styles/loginStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'usuario' && password === 'senha') {
      navigate('/');
    } else {
      console.log('Autenticação falhou');
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <PersonIcon>
          <FaUser />
        </PersonIcon>
        <LoginTitle>Login</LoginTitle>
        <FormLabel htmlFor="username">Usuário:</FormLabel>
        <InputField
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormLabel htmlFor="password">Senha:</FormLabel>
        <InputField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LinkContainer>
          <LinkStyle to="/register">Registrar uma conta</LinkStyle>
          <LinkStyle to="/passwordrecovery">Esqueceu sua senha?</LinkStyle>
        </LinkContainer>
        <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
      </LoginContainer>
    </PageContainer>
  );
};

export default Login;
