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

export const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPasswpord] = useState('');

  return (
    <Content>
      <Text color="BLACK" bold>
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
        <Button title="Registar-se" />
        <Box>
          <Line style={{marginRight: 5}} />
          <Text> Ou faça login com</Text>
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
        <Text color="GRAY">Já possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text color="PRIMARY" bold>
            Fazer login
          </Text>
        </TouchableOpacity>
      </Footer>
    </Content>
  );
};
