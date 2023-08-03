import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';

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
          Isso nós ajuda-rá a criar um plano personalizado
        </Title>
      </Header>
      <Container>
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Cetogênica' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Cetogênica"
          titleWeight={borderColor == 'Dieta Cetogênica' ? 'bold' : 'normal'}
          variant="secondary"
          onPress={() => setBorderColor('Dieta Cetogênica')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Dukan' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Dukan"
          titleWeight={borderColor == 'Dieta Dukan' ? 'bold' : 'normal'}
          variant="secondary"
          onPress={() => setBorderColor('Dieta Dukan')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Mediterrânea' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Mediterrânea"
          titleWeight={borderColor == 'Dieta Mediterrânea' ? 'bold' : 'normal'}
          variant="secondary"
          onPress={() => setBorderColor('Dieta Mediterrânea')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Low Carb' ? '#001eff' : 'transparent',
            marginBottom: 25,
          }}
          titleWeight={borderColor == 'Dieta Low Carb' ? 'bold' : 'normal'}
          title="Dieta Low Carb"
          variant="secondary"
          onPress={() => setBorderColor('Dieta Low Carb')}
        />
        <Button
          width={90}
          style={{
            borderColor:
              borderColor === 'Dieta Vegana/Vegetariana'
                ? '#001eff'
                : 'transparent',
            marginBottom: 25,
          }}
          title="Dieta Vegana/Vegetariana"
          titleWeight={
            borderColor == 'Dieta Vegana/Vegetariana' ? 'bold' : 'normal'
          }
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
          onPress={() => navigation.navigate('Foods')}
        />
      </ButtomWrapper>
    </Content>
  );
}
