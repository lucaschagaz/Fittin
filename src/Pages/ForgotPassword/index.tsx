import React from 'react';
import {Button, Content, Input, Text} from '../../Components';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';

export const ForgotPassWord = () => {
  const navigation = useNavigation();

  const goToOTPCode = () => {
    navigation.navigate('OTPCode');
  };

  return (
    <Content>
      <Text bold>Esqueceu senha senha?</Text>
      <Text color="GRAY">
        Informe o endereço de e-mail associado a sua conta
      </Text>

      <Container>
        <Input label="Email" />
      </Container>
      <Button onPress={goToOTPCode} title="Enviar" />
    </Content>
  );
};
