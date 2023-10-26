import React, {useState} from 'react';
import {Box, Button, Content, Text} from '../../../Components';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '../../../Components/Icon';

export const Goal = () => {
  const navigation = useNavigation();

  type IGoal = 'Dieta e Treinos' | 'Dieta' | 'Treinos';

  const [goal, setGoal] = useState<IGoal>('Dieta');

  const chooseGoal = () => {
    if (goal == 'Treinos') {
      navigation.navigate('tabBar');
    } else {
      navigation.navigate('Diet');
    }
  };
  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Seu foco principal é?
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        usaremos para criação do seu plano personalizado
      </Text>
      <Box style={{flex: 1}}>
        <Button
          width="large"
          style={{
            borderColor: goal === 'Dieta' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          bold={goal == 'Dieta' ? true : false}
          title="Dieta"
          ButtonVariant="outLine"
          onPress={() => setGoal('Dieta')}
        />
        <Button
          width="large"
          style={{
            borderColor: goal === 'Treinos' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          bold={goal == 'Treinos' ? true : false}
          title="Treinos"
          ButtonVariant="outLine"
          onPress={() => setGoal('Treinos')}
        />
        <Button
          width="large"
          style={{
            borderColor: goal === 'Dieta e Treinos' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          bold={goal == 'Dieta e Treinos' ? true : false}
          title="Dieta e Treinos"
          ButtonVariant="outLine"
          onPress={() => setGoal('Dieta e Treinos')}
        />
      </Box>
      <Box style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button
          title="Voltar"
          ButtonVariant="outLine"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Age')
          }
        />
        <Button
          rightElement={<Icon name="rightArrow" />}
          title={goal === 'Treinos' ? 'Finzalizar' : 'Continuar'}
          onPress={chooseGoal}
        />
      </Box>
    </Content>
  );
};
