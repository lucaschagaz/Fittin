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
            borderColor: borderColor === 'Dieta' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          titleWeight={borderColor == 'Dieta' ? 'bold' : 'normal'}
          title="Dieta"
          variant="secondary"
          onPress={() => setBorderColor('Dieta')}
        />
        <Button
          width={90}
          style={{
            borderColor: borderColor === 'Treinos' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          titleWeight={borderColor == 'Treinos' ? 'bold' : 'normal'}
          title="Treinos"
          variant="secondary"
          onPress={() => setBorderColor('Treinos')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta e Treinos' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          titleWeight={borderColor == 'Dieta e Treinos' ? 'bold' : 'normal'}
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
          onPress={() => navigation.navigate('Diet')}
        />
      </ButtomWrapper>
    </Content>
  );
}
