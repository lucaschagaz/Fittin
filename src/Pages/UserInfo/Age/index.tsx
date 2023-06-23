import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Content, Header, Title} from '../../../Components';
import {Box, Change, Conteiner} from '../styles';

export default function Age() {
  const [age, setAge] = useState(16);

  const navigation = useNavigation();

  useEffect(() => {
    if (age < 16) {
      alert('Idade Minima é 16 anos');
      setAge(16);
    } else if (age > 100) {
      alert('Idade Maxima é 100 anos');
      setAge(100);
    }
  }, [age]);

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
      </Conteiner>
      <Button
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('Measurements2')}>
        <Title weight="bold" color="TEXT">
          Proximo passo
        </Title>
      </Button>
    </Content>
  );
}
