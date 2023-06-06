import React from 'react';
import {Button, Content, Header, Input, Title} from '../../Components';
import {Container} from './styles';

export default function ForgotPassword() {
  return (
    <Content>
      <Header>
        <Title size={25} weight="bold">
          Esqueceu senha senha?
        </Title>
        <Title mt={10} color="GRAY">
          Informe o endereço de e-mail associado a sua conta
        </Title>
      </Header>
      <Container>
        <Input label="Email" />
      </Container>
      <Button>
        <Title color="TEXT" weight="bold">
          Enviar
        </Title>
      </Button>
    </Content>
  );
}
