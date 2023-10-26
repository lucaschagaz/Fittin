import {TouchableOpacity} from 'react-native';
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

export const Login = () => {
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
      <Text color="BLACK" bold>
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
            onPress={() => navigation.navigate('ForgotPassWord')}>
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
        <Button title="Entrar" onPress={handleLogin} isLoading={loading} />
        <Box>
          <Line style={{marginRight: 5}} />
          <Text>Ou faça login com</Text>
          <Line style={{marginLeft: 5}} />
        </Box>
        <LoginSocialContainer>
          <LoginSocialBox>
            <IconLogin
              source={require('../../assets/images/google-logo.png')}
            />
          </LoginSocialBox>
          <LoginSocialBox>
            <IconLogin
              source={require('../../assets/images/facebook-48.png')}
            />
          </LoginSocialBox>
        </LoginSocialContainer>
        <Text color="GRAY">Não possui conta ainda?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text color="PRIMARY" bold>
            Cadastrar-se
          </Text>
        </TouchableOpacity>
      </Footer>
    </Content>
  );
};
