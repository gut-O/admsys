import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const PageContainer = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #5a81f7);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4); /* Cor branca com 40% de transparência */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PersonIcon = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const LoginTitle = styled.h2`
  color: #333;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #555;
`;

const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
`;

const RegisterLink = styled(Link)`
  margin-top: 10px;
  padding-bottom: 10px;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
`;

const ForgotPasswordLink = styled.div`
  margin-top: 10px;
   padding-bottom: 10px;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #5a81f7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

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
        <RegisterLink to="/register">Registrar uma conta</RegisterLink>
        <ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
        <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
      </LoginContainer>
    </PageContainer>
  );
};

export default Login;
