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
    // Lógica de autenticação (pode ser uma chamada a API, etc.)
    // Exemplo simples: verificar se username e password são válidos
    if (username === 'usuario' && password === 'senha') {
      // Autenticação bem-sucedida, redirecione para a página principal
      navigate('/');
    } else {
      // Autenticação falhou, pode exibir uma mensagem de erro
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
