import React, {useEffect, useRef, useState} from 'react';
import {Button, Content, Header, Title} from '../../Components';
import {Container, Input, InputContainer} from './styles';
import {TouchableOpacity} from 'react-native';

export default function OTPCode() {
  const [otpvalues, setOtpValues] = useState({1: '', 2: '', 3: '', 4: ''});

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fouthRef = useRef();

  useEffect(() => {
    console.log(otpvalues);
  }, [otpvalues]);

  return (
    <Content>
      <Header>
        <Title size={25} weight="bold">
          Verificação OTP
        </Title>
        <Title mt={10} color="GRAY">
          Check sua caixa de mensagem (SMS) nossa equipe enviou um codigo para o
          numero +89 999** ****999
        </Title>
      </Header>
      <Container>
        <InputContainer>
          <Input
            style={{borderBottomColor: otpvalues[1] ? '#d47c34' : '#999591'}}
            maxLength={1}
            keyboardType="number-pad"
            ref={firstRef}
            onChangeText={text => {
              setOtpValues({...otpvalues, 1: text});
              text && secondRef.current?.focus();
            }}
          />
          <Input
            style={{borderBottomColor: otpvalues[2] ? '#d47c34' : '#999591'}}
            maxLength={1}
            keyboardType="number-pad"
            ref={secondRef}
            onChangeText={text => {
              setOtpValues({...otpvalues, 2: text});
              text && thirdRef.current?.focus();
              !text && firstRef.current?.focus();
            }}
          />
          <Input
            style={{borderBottomColor: otpvalues[3] ? '#d47c34' : '#999591'}}
            maxLength={1}
            keyboardType="number-pad"
            ref={thirdRef}
            onChangeText={text => {
              setOtpValues({...otpvalues, 3: text});
              text && fouthRef.current?.focus();
              !text && secondRef.current?.focus();
            }}
          />
          <Input
            style={{borderBottomColor: otpvalues[4] ? '#d47c34' : '#999591'}}
            maxLength={1}
            keyboardType="number-pad"
            ref={fouthRef}
            onChangeText={text => {
              setOtpValues({...otpvalues, 4: text});
              !text && thirdRef.current?.focus();
            }}
          />
        </InputContainer>
        <Title color="GRAY" mb={10}>
          Não recebeu o codigo?
        </Title>
        <TouchableOpacity>
          <Title color="SENCONDARY">Reenviar o codigo</Title>
        </TouchableOpacity>
      </Container>
      <Button>
        <Title color="TEXT" weight="bold">
          Enviar
        </Title>
      </Button>
    </Content>
  );
}
