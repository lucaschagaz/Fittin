import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Content, Text, Icon, Box} from '../../../Components';
import {Diets} from '../../../Utils/Mocks/Variabels';

export const Diet = () => {
  const navigation = useNavigation();

  const [selectedDiet, setSelectedDiet] = useState('Dieta Cetogênica');

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Deseja seguir alguma Dieta?
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        iremos criar um plano baseado em sua escolha
      </Text>
      <Box style={{flex: 1}}>
        {Diets.map(diet => (
          <Button
            key={diet}
            width="large"
            bold={diet === selectedDiet ? true : false}
            style={{
              borderColor: selectedDiet === diet ? '#001eff' : 'transparent',
              marginBottom: 25,
              borderWidth: 2,
            }}
            title={diet}
            ButtonVariant="outLine"
            onPress={() => setSelectedDiet(diet)}
          />
        ))}
      </Box>
      <Box style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button
          title="Voltar"
          ButtonVariant="outLine"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Goal')
          }
        />
        <Button
          title="Continuar"
          rightElement={<Icon name="rightArrow" />}
          onPress={() => navigation.navigate('Foods')}
        />
      </Box>
    </Content>
  );
};
