import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #5a81f7);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PersonIcon = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const RegisterTitle = styled.h2`
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

const BackToLoginLink = styled(Link)`
  margin-top: 10px;
  padding-bottom: 10px;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  background-color: #5a81f7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  const registration = useSelector((state) => state.registration);
  const navigate = useNavigate(); 

  const handleInputChange = (field, value) => {
    dispatch({
      type: 'UPDATE_REGISTRATION_FIELD',
      field,
      value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registration), // Envie os dados do registro no corpo da solicitação
      });

      if (response.ok) {
        // Registro bem-sucedido
        console.log('Registro bem-sucedido!');
        navigate('/login');
      } else {
        // Registro falhou
        console.log('Registro falhou');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };


  return (
    <PageContainer>
      <RegisterContainer>
        <PersonIcon>
          <FaUser />
        </PersonIcon>
        <RegisterTitle>Registrar</RegisterTitle>
        <FormLabel htmlFor="username">Usuário:</FormLabel>
        <InputField
          type="text"
          id="username"
          value={registration.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
        <FormLabel htmlFor="password">Senha:</FormLabel>
        <InputField
          type="password"
          id="password"
          value={registration.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <FormLabel htmlFor="name">Nome:</FormLabel>
        <InputField
          type="text"
          id="name"
          value={registration.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <FormLabel htmlFor="email">E-mail:</FormLabel>
        <InputField
          type="email"
          id="email"
          value={registration.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <FormLabel htmlFor="birthdate">Data de Nascimento:</FormLabel>
        <InputField
          type="date"
          id="birthdate"
          value={registration.birthdate}
          onChange={(e) => handleInputChange('birthdate', e.target.value)}
        />
        <BackToLoginLink to="/login">Voltar para o Login</BackToLoginLink>
        <SubmitButton onClick={handleRegister}>Registrar</SubmitButton>
      </RegisterContainer>
    </PageContainer>
  );
};

export default Register;
