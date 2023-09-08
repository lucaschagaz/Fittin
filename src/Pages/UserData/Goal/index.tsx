import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';

export default function Goal() {
  const navigation = useNavigation();

  const [goal, setGoal] = useState<'Dieta e Treinos' | 'Dieta' | 'Treinos'>(
    'Dieta',
  );

  const chooseGoal = () => {
    if (goal == 'Treinos') {
      navigation.navigate('tabBar');
    } else {
      navigation.navigate('Diet');
    }
  };
  return (
    <Content>
      <Header>
        <Title size={26} weight="bold" mb={5}>
          Seu Objetivo no App é?
        </Title>
        <Title weight="bold" color="GRAY">
          Dados necessarias para criação do seu plano personalizado
        </Title>
      </Header>
      <Container>
        <Button
          width="large-311"
          style={{
            borderColor: goal === 'Dieta' ? '#001eff' : 'transparent',
            marginBottom: 25,
            borderWidth: 2,
          }}
          titleWeight={goal == 'Dieta' ? 'bold' : 'normal'}
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
          titleWeight={goal == 'Treinos' ? 'bold' : 'normal'}
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
          titleWeight={goal == 'Dieta e Treinos' ? 'bold' : 'normal'}
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
