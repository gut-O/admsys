import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PersonIcon,
  FormLabel,
  InputField,
  LinkStyle,
  SubmitButton,
  LoginTitle,
  RegisterContainer,
  LinkContainer,
} from '../styles/loginStyles';

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
        navigate('/login');
      } else {
        // Registro falhou
      }
    } catch (error) {
    }
  };


  return (
    <PageContainer>
      <RegisterContainer>
        <PersonIcon>
          <FaUser />
        </PersonIcon>
        <LoginTitle>Registrar</LoginTitle>
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
        
        <SubmitButton onClick={handleRegister}>Registrar</SubmitButton>
        <LinkContainer>
        <LinkStyle to="/login">Voltar para o Login</LinkStyle>
        </LinkContainer>
      </RegisterContainer>
    </PageContainer>
  );
};

export default Register;
