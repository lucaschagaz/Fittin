import React, {useState} from 'react';
import {Button, Content, Text} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';

export default function Goal() {
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
      <Text font="Heading_one">O App sera usado para?</Text>
      <Text font="Heading_three" color="GRAY">
        Dados necessarios para criação do seu plano personalizado
      </Text>
      <Container>
        <Button
          width="large-311"
          style={{
            borderColor: goal === 'Dieta' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          bold={goal == 'Dieta' ? true : false}
          title="Dieta"
          variant="secondary"
          onPress={() => setGoal('Dieta')}
        />
        <Button
          width="large-311"
          style={{
            borderColor: goal === 'Treinos' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          bold={goal == 'Treinos' ? true : false}
          title="Treinos"
          variant="secondary"
          onPress={() => setGoal('Treinos')}
        />
        <Button
          width="large-311"
          style={{
            borderColor: goal === 'Dieta e Treinos' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          bold={goal == 'Dieta e Treinos' ? true : false}
          title="Dieta e Treinos"
          variant="secondary"
          onPress={() => setGoal('Dieta e Treinos')}
        />
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          variant="secondary"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Age')
          }
        />
        <Button
          title={goal == 'Treinos' ? 'Finzalizar' : 'Proximo Passo'}
          onPress={chooseGoal}
        />
      </ButtomWrapper>
    </Content>
  );
}
