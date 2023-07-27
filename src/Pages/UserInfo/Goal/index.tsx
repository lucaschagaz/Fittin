import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';

export default function Goal() {
  const navigation = useNavigation();

  const [borderColor, setBorderColor] = useState('Dieta');

  return (
    <Content>
      <Header>
        <Title size={26} weight="bold" mb={5}>
          Seu Objetivo no App é?
        </Title>
        <Title weight="bold" color="GRAY">
          Isso nós ajuda-rá a criar um plano personalizado
        </Title>
      </Header>
      <Container>
        <Button
          width={90}
          style={{
            borderColor: borderColor === 'Dieta' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta"
          variant="secondary"
          onPress={() => setBorderColor('Dieta')}
        />
        <Button
          width={90}
          style={{
            borderColor: borderColor === 'Treinos' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Treinos"
          variant="secondary"
          onPress={() => setBorderColor('Treinos')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta e Treinos' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta e Treinos"
          variant="secondary"
          onPress={() => setBorderColor('Dieta e Treinos')}
        />
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          width={40}
          variant="secondary"
          // onPress={() => navigation.navigate('Measurements')}
        />
        <Button
          title="Proximo passo"
          width={40}
          onPress={() => navigation.navigate('Foods')}
        />
      </ButtomWrapper>
    </Content>
  );
}
