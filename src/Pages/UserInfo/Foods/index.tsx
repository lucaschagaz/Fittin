import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtomWrapper, Container, SearchFoodInput} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {foods} from '../../../Utils/Mocks/foods';

export default function Foods() {
  const navigation = useNavigation();

  const [selectdsFoods, setSelectdFoods] = useState<string[]>([]);

  const handleFood = (food: string) => {
    if (selectdsFoods.includes(food)) {
      const foodsFilterd = selectdsFoods.filter(item => item != food);
      setSelectdFoods(foodsFilterd);
    } else {
      setSelectdFoods(prevState => [...prevState, food]);
      console.log(selectdsFoods);
    }
  };

  return (
    <Content>
      <Header>
        <Title size={26} weight="bold" mb={5}>
          Alimentos que não gosta.
        </Title>
        <Title weight="bold" color="GRAY">
          Selecione os alimentos que não gostaria de ter em seu plano alimentar
        </Title>
      </Header>
      <SearchFoodInput placeholder="Pesquise um alimento" />
      <Container
        style={{
          marginTop: 20,
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        {foods.map(food => (
          <Button
            key={food}
            variant="secondary"
            width={25}
            style={{
              borderColor: selectdsFoods.includes(food) ? '#d75d0c' : '#999',
              marginBottom: 10,
              marginHorizontal: 10,
              //   marginTop: 5,
            }}
            title={food}
            onPress={() => handleFood(food)}
          />
        ))}
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
