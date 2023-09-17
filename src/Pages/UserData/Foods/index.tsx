import React, {useState} from 'react';
import {Button, Content, Text} from '../../../Components';
import {ButtomWrapper, FoodsWrapper} from '../styles';
import {foods} from '../../../Utils/Mocks/Variabels';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

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
    <Content>
      <Text font="Heading_one">Alimentos que não gosta.</Text>
      <Text font="Heading_three" color="GRAY">
        Quais alimentos não gostaria de ter em seu plano alimentar
      </Text>
      <FoodsWrapper>
        {foods.map(food => (
          <TouchableOpacity
            key={food}
            onPress={() => handleFood(food)}
            style={{
              borderWidth: 2,
              borderColor: selectdsFoods.includes(food) ? '#001eff' : '#999',
              backgroundColor: selectdsFoods.includes(food)
                ? '#283ee114'
                : 'transparent',
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 30,
            }}>
            <Text
              font="Paragraph"
              style={{
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
          variant="secondary"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Diet')
          }
        />
        <Button
          title="Finalizar"
          disabled={selectdsFoods.length == 0 ? true : false}
          onPress={() => navigation.navigate('tabBar')}
          variant={selectdsFoods.length === 0 ? 'disable_Button' : 'primary'}
        />
      </ButtomWrapper>
    </Content>
  );
}
