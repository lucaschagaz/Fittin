import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, Content, Input, Text} from '../../Components';

import {
  Box,
  Footer,
  IconLogin,
  InputConteiner,
  Line,
  LoginSocialBox,
  LoginSocialContainer,
  PassWordConteiner,
  RemenberContainer,
  Square,
  TextConteiner,
} from './styles';

export default function Login() {
  const [select, setSelect] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 5000);
  };

  return (
    <Content>
      <Text size={25} color="BLACK" weight="bold">
        Login
      </Text>
      <InputConteiner>
        <Input label="Email" />
        <Input label="Senha" secureTextEntry={true} iconType="eyes" />
        <PassWordConteiner>
          <RemenberContainer onPress={() => setSelect(!select)}>
            <Square select={select} />
            <Text color="GRAY">me-lembre</Text>
          </RemenberContainer>
          <RemenberContainer
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text color="GRAY">Esqueci minha senha!</Text>
          </RemenberContainer>
        </PassWordConteiner>
      </InputConteiner>
      <TextConteiner>
        <Text color="GRAY">
          Para continar voce deve aceitar os termos de uso e privacidade do app
        </Text>
      </TextConteiner>
      <Footer>
        <Button onPress={handleLogin} isLoading={loading}>
          <Text size={20} weight="bold" color="PRIMARY_CONTRAST">
            Entrar
          </Text>
        </Button>
        <Box>
          <Line style={{marginRight: 5}} />
          <Text size={14}>Ou faça login com</Text>
          <Line style={{marginLeft: 5}} />
        </Box>
        <LoginSocialContainer>
          <LoginSocialBox>
            <IconLogin source={require('../../assets/icons/google-logo.png')} />
          </LoginSocialBox>
          <LoginSocialBox>
            <IconLogin source={require('../../assets/icons/facebook-48.png')} />
          </LoginSocialBox>
        </LoginSocialContainer>
        <Text size={16} color="GRAY" mb={5}>
          Não possui conta ainda?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text color="PRIMARY" weight="bold">
            Cadastrar-se
          </Text>
        </TouchableOpacity>
      </Footer>
    </Content>
  );
}
