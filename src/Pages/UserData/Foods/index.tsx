import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtomWrapper, FoodsWrapper, FoodsInput} from '../styles';
import {foods} from '../../../Utils/Mocks/foods';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

export default function Foods() {
  /* LIDAR COM TECLADO NESSA PARTE! USAR UMA LIB */

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
    <Content space="space-between">
      <Header>
        <Title size={26} weight="bold" mb={5}>
          Alimentos que não gosta.
        </Title>
        <Title weight="bold" color="GRAY">
          Selecione os alimentos que não gostaria de ter em seu plano alimentar
        </Title>
      </Header>
      {/* <FoodsInput
        placeholder="outro alimento que não consuma?"
        placeholderTextColor="#999"
      /> */}
      <FoodsWrapper>
        {foods.map(food => (
          <TouchableOpacity
            onPress={() => handleFood(food)}
            style={{
              borderWidth: 2,
              borderColor: selectdsFoods.includes(food) ? '#001eff' : '#999',
              backgroundColor: selectdsFoods.includes(food)
                ? '#283ee114'
                : 'transparent',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: selectdsFoods.includes(food) ? '#001eff' : '#999',
              }}>
              {food}
            </Text>
          </TouchableOpacity>
        ))}
      </FoodsWrapper>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          width={40}
          variant="secondary"
          // onPress={() => navigation.navigate('Measurements')}
        />
        <Button
          title="Proximo passo"
          disabled={selectdsFoods.length == 0 ? true : false}
          width={40}
          onPress={() => navigation.navigate('Home')}
          style={{
            borderColor: selectdsFoods.length == 0 ? '#99999971' : '#999',
          }}
          variant={selectdsFoods.length == 0 ? 'secondary' : 'primary'}
        />
      </ButtomWrapper>
    </Content>
  );
}
