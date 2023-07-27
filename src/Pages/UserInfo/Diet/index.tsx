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
            borderColor:
              borderColor === 'Dieta Cetogênica' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Cetogênica"
          variant="secondary"
          onPress={() => setBorderColor('Dieta Cetogênica')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Dukan' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Dukan"
          variant="secondary"
          onPress={() => setBorderColor('Dieta Dukan')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Mediterrânea' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Mediterrânea"
          variant="secondary"
          onPress={() => setBorderColor('Dieta Mediterrânea')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Low Carb' ? '#d75d0c' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Low Carb"
          variant="secondary"
          onPress={() => setBorderColor('Dieta Low Carb')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Vegana/Vegetariana'
                ? '#d75d0c'
                : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Vegana/Vegetariana"
          variant="secondary"
          onPress={() => setBorderColor('Dieta Vegana/Vegetariana')}
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
          onPress={() => navigation.navigate('Age')}
        />
      </ButtomWrapper>
    </Content>
  );
}
