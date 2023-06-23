import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {Box, Change, Conteiner} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

export default function Measurements() {
  const [weight, setweight] = useState(75);
  const [height, setheight] = useState(175);

  const navigation = useNavigation();

  useEffect(() => {}, []);

  return (
    <Content>
      <Header>
        <Title size={24} weight="bold">
          Me conte mais sobre você
        </Title>
        <Title weight="bold" color="GRAY">
          Dados para criação do seu plano personalizado
        </Title>
      </Header>
      <Conteiner>
        <Title size={28} weight="bold" mt={20}>
          Peso:
        </Title>
        <Box style={{marginBottom: 40}}>
          <Change onPress={() => setweight(old => old - 0.5)}>
            <Title size={30} color="TEXT">
              -
            </Title>
          </Change>
          <View style={{width: 200}}>
            <Title size={45}>{weight} kg</Title>
          </View>
          <Change onPress={() => setweight(old => old + 0.5)}>
            <Title size={30} color="TEXT">
              +
            </Title>
          </Change>
        </Box>
        <Title size={28} weight="bold">
          Altura:
        </Title>
        <Box>
          <Change onPress={() => setheight(old => old - 1)}>
            <Title size={30} color="TEXT">
              -
            </Title>
          </Change>
          <View style={{width: 200}}>
            <Title size={45}>{height} cm</Title>
          </View>
          <Change onPress={() => setheight(old => old + 1)}>
            <Title size={30} color="TEXT">
              +
            </Title>
          </Change>
        </Box>
      </Conteiner>
      <Button
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('Age')}>
        <Title weight="bold" color="TEXT">
          Proximo passo
        </Title>
      </Button>
    </Content>
  );
}
