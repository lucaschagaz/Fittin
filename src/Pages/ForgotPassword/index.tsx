import React from 'react';
import {Button, Content, Input, Text} from '../../Components';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const goToOTPCode = () => {
    navigation.navigate('OTPCode');
  };

  return (
    <Content>
      <Text size={25} weight="bold">
        Esqueceu senha senha?
      </Text>
      <Text mt={10} color="GRAY">
        Informe o endereço de e-mail associado a sua conta
      </Text>

      <Container>
        <Input label="Email" />
      </Container>
      <Button onPress={goToOTPCode} title="Enviar">
        {/* <Text color="PRIMARY_CONTRAST" weight="bold">
          Enviar
        </Text> */}
      </Button>
    </Content>
  );
}
