import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../Components';
import {Box, Change, Conteiner} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

export default function Measurements() {
  const [weight, setweight] = useState(75);
  const [height, setheight] = useState(175);
  const [age, setAge] = useState(16);

  const navigation = useNavigation();

  useEffect(() => {
    if (age < 16) {
      alert('Idade Minima é 16 anos');
    }
  }, [age, weight, height]);

  return (
    <Content>
      <Header>
        <Title size={24} weight="bold">
          Me conte mais sobre você
        </Title>
        <Title weight="bold" color="GRAY">
          informações necessarias para criação do seu plano personalizado
        </Title>
      </Header>
      <Conteiner>
        <Title size={28} weight="bold" mt={30}>
          Idade:
        </Title>
        <Box>
          <Change onPress={() => setAge(old => old - 1)}>
            <Title size={30} color="TEXT">
              -
            </Title>
          </Change>
          <Title size={45}>{age} anos</Title>
          <Change onPress={() => setAge(old => old + 1)}>
            <Title size={30} color="TEXT">
              +
            </Title>
          </Change>
        </Box>
        <Title size={28} weight="bold">
          Altura:
        </Title>
        <Box>
          <Change onPress={() => setweight(old => old - 1)}>
            <Title size={30} color="TEXT">
              -
            </Title>
          </Change>
          <Title size={45}>{weight} kg</Title>
          <Change onPress={() => setweight(old => old + 1)}>
            <Title size={30} color="TEXT">
              +
            </Title>
          </Change>
        </Box>
        <Title size={28} weight="bold">
          Peso:
        </Title>
        <Box>
          <Change onPress={() => setheight(old => old - 1)}>
            <Title size={30} color="TEXT">
              -
            </Title>
          </Change>
          <Title size={45}>{height} cm</Title>
          <Change onPress={() => setheight(old => old + 1)}>
            <Title size={30} color="TEXT">
              +
            </Title>
          </Change>
        </Box>
      </Conteiner>
      <Button
        width={50}
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('')}>
        <Title weight="bold" color="TEXT">
          Proximo passo
        </Title>
      </Button>
    </Content>
  );
}
