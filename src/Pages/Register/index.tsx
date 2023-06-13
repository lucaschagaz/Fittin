import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Content, Header, Input, Title} from '../../Components';
import {
  Box,
  Footer,
  IconLogin,
  InputConteiner,
  Line,
  LoginSocialBox,
  LoginSocialContainer,
} from '../Login/styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPasswpord] = useState('');

  return (
    <Content>
      <Header>
        <Title size={25} color="BLACK" weight="bold">
          Login
        </Title>
      </Header>
      <InputConteiner>
        <Input value={name} onChangeText={text => setName(text)} label="Nome" />
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          label="Email"
        />
        <Input
          value={phone}
          onChangeText={text => setPhone(text)}
          label="Telefone"
        />
        <Input
          value={password}
          onChangeText={text => setPasswpord(text)}
          label="Senha"
          secureTextEntry={true}
          iconType="eyes-o"
        />
      </InputConteiner>
      <Footer>
        <Button>
          <Title size={20} weight="bold" color="TEXT">
            Registar-se
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
          Já possui conta?
        </Title>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Title color="PRIMARY" weight="bold">
            Fazer login
          </Title>
        </TouchableOpacity>
      </Footer>
    </Content>
  );
}
