// styles.js

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #5a81f7);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;


export const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4); /* Cor branca com 40% de transparência */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;


export const PersonIcon = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #555;
`;

export const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
`;

export const LinkStyle = styled(Link)`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
`;
export const LinkContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #5a81f7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const LoginTitle = styled.h2`
  color: #333;
`;
