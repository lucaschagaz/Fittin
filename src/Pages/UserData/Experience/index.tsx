import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import {Box, Button, Content, Text} from '../../../Components';
import {Icon} from '../../../Components/Icon';

export const Experience = () => {
  const navigation = useNavigation();

  const AmountTraining = ['3x na semana', '4x na semana', '5x6 na semana'];
  const [amountWorkout, setAmountWorkout] = useState('3x na semana');

  const maturity = ['inicante', 'intermediario', 'avançado'];
  const [maturityUser, setMaturityUser] = useState('inicante');

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        frequêcia e nivel de treinos?
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        qual sua frequência semanal e maturidade em relação ao treino hoje
      </Text>
      <Box style={{flex: 1, justifyContent: 'flex-start', paddingTop: 40}}>
        <Text
          font="Heading_two"
          style={{alignSelf: 'flex-start', paddingLeft: 10}}>
          Frequência:
        </Text>
        <Picker
          style={{width: '100%'}}
          selectedValue={amountWorkout}
          onValueChange={(value, _) => setAmountWorkout(value)}>
          {AmountTraining.map(amount => (
            <Picker.Item key={amount} label={amount} value={amount} />
          ))}
        </Picker>
        <Text
          font="Heading_two"
          style={{alignSelf: 'flex-start', paddingLeft: 10}}>
          Nivel/Maturidade:
        </Text>
        <Picker
          style={{width: '100%'}}
          selectedValue={maturityUser}
          onValueChange={(value, _) => setMaturityUser(value)}>
          {maturity.map(maturity => (
            <Picker.Item key={maturity} label={maturity} value={maturity} />
          ))}
        </Picker>
      </Box>
      <Box style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button
          title="Voltar"
          ButtonVariant="outLine"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          onPress={() => navigation.navigate('MeasurementsHeight')}
        />
        <Button
          rightElement={<Icon name="rightArrow" />}
          title="Continuar"
          onPress={() => navigation.navigate('Goal')}
        />
      </Box>
    </Content>
  );
};
