import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';

import {Button, Content, Text} from '../../Components';
import {Container, Input, InputContainer} from './styles';
import {Icon} from '../../Components/Icon';

export const OTPCode = () => {
  const [otpvalues, setOtpValues] = useState({1: '', 2: '', 3: '', 4: ''});

  const firstRef = useRef<TextInput>(null);
  const secondRef = useRef<TextInput>(null);
  const thirdRef = useRef<TextInput>(null);
  const fouthRef = useRef<TextInput>(null);

  useEffect(() => {
    console.log(otpvalues);
  }, [otpvalues]);

  return (
    <Content>
      <Text bold>Verificação OTP</Text>
      <Text color="GRAY">
        Check sua caixa de mensagem (SMS) nossa equipe enviou um codigo para o
        numero +89 999** ****999
      </Text>
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
        <Text color="GRAY">Não recebeu o codigo?</Text>
        <TouchableOpacity>
          <Text color="SENCONDARY">Reenviar o codigo</Text>
        </TouchableOpacity>
      </Container>
      <Button title="Enviar" rightElement={<Icon name="rightArrow" />}>
        {/* <Text color="PRIMARY_CONTRAST" bold>
          Enviar
        </Text> */}
      </Button>
    </Content>
  );
};
