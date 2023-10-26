import React, {useState} from 'react';
import {Box, Button, Content, Text} from '../../../Components';
import {FoodsWrapper} from '../styles';
import {foods} from '../../../Utils/Mocks/Variabels';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../../../Components/Icon';

export const Foods = () => {
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
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Alimentos que não gosta.
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        Quais alimentos não gostaria de ter em seu plano alimentar
      </Text>
      <Box
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignContent: 'center',
          gap: 12,
        }}>
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
      </Box>
      <Box style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button
          title="Voltar"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          ButtonVariant="outLine"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Diet')
          }
        />
        <Button
          rightElement={<Icon name="rightArrow" />}
          title="Finalizar"
          disabled={selectdsFoods.length == 0 ? true : false}
          onPress={() => navigation.navigate('tabBar')}
          ButtonVariant={
            selectdsFoods.length === 0 ? 'disable_Button' : 'primary'
          }
        />
      </Box>
    </Content>
  );
};
