import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {Diets} from '../../../Utils/Mocks/Deits';

export default function Goal() {
  const navigation = useNavigation();

  const [borderColor, setBorderColor] = useState('Dieta Cetogênica');

  return (
    <Content>
      <Header>
        <Title size={26} weight="bold" mb={5}>
          Seu Objetivo no App é?
        </Title>
        <Title weight="bold" color="GRAY">
          Dados necessarias para criação do seu plano personalizado
        </Title>
      </Header>
      <Container>
        {Diets.map(diet => (
          <Button
            key={diet}
            width="large-311"
            style={{
              borderColor: borderColor === diet ? '#001eff' : 'transparent',
              marginBottom: 25,
              borderWidth: 2,
            }}
            title={diet}
            variant="secondary"
            onPress={() => setBorderColor(diet)}
          />
        ))}
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          variant="secondary"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Goal')
          }
        />
        <Button
          title="Proximo passo"
          onPress={() => navigation.navigate('Foods')}
        />
      </ButtomWrapper>
    </Content>
  );
}
