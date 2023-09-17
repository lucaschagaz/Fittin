import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Content, Input, Text} from '../../Components';
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
      <Text size={25} color="BLACK" weight="bold">
        Login
      </Text>
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
          <Text size={20} weight="bold" color="PRIMARY_CONTRAST">
            Registar-se
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
          Já possui conta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text color="PRIMARY" weight="bold">
            Fazer login
          </Text>
        </TouchableOpacity>
      </Footer>
    </Content>
  );
}
