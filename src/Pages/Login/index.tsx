import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, Content, Header, Input, Title} from '../../Components';

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

  const navigation = useNavigation();

  return (
    <Content>
      <Header>
        <Title size={25} color="BLACK" weight="bold">
          Login
        </Title>
      </Header>
      <InputConteiner>
        <Input label="Email" />
        <Input label="Senha" secureTextEntry={true} iconType="eyes" />
        <PassWordConteiner>
          <RemenberContainer onPress={() => setSelect(!select)}>
            <Square select={select} />
            <Title color="GRAY">me-lembre</Title>
          </RemenberContainer>
          <RemenberContainer
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Title color="GRAY">Esqueci minha senha!</Title>
          </RemenberContainer>
        </PassWordConteiner>
      </InputConteiner>
      <TextConteiner>
        <Title color="GRAY">
          Para continar voce deve aceitar os termos de uso e privacidade do app
        </Title>
      </TextConteiner>
      <Footer>
        <Button>
          <Title size={20} weight="bold" color="TEXT">
            Sign in
          </Title>
        </Button>
        <Box>
          <Line style={{marginRight: 5}} />
          <Title size={14}>Ou faça login com</Title>
          <Line style={{marginLeft: 5}} />
        </Box>
        <LoginSocialContainer>
          <LoginSocialBox>
            <IconLogin source={require('../../Assets/icons/google-logo.png')} />
          </LoginSocialBox>
          <LoginSocialBox>
            <IconLogin source={require('../../Assets/icons/facebook-48.png')} />
          </LoginSocialBox>
        </LoginSocialContainer>
        <Title size={16} color="GRAY" mb={5}>
          Não possui conta ainda?
        </Title>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Title color="PRIMARY" weight="bold">
            Cadastrar-se
          </Title>
        </TouchableOpacity>
      </Footer>
    </Content>
  );
}
