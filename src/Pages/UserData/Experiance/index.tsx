import React, {useState} from 'react';
import {Button, Content, Text} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';

export const Experience = () => {
  const navigation = useNavigation();

  type IUserExperience = {
    type: string;
    message: string;
  };

  const workoutUserExperience: IUserExperience[] = [
    {type: 'iniciante', message: 'você esta no caminho! não desanime'},
    {type: 'intermediario', message: 'muito bom! continue assim'},
    {type: 'avancado', message: 'que incrivel! voce é o rei do pump'},
  ];

  const [userExperience, setuserExperience] = useState<IUserExperience>();

  return (
    <Content>
      <Text font="Heading_one">Seu Objetivo no App é?</Text>
      <Text font="Heading_three" color="GRAY">
        Dados necessarios para criação do seu plano personalizado
      </Text>
      <Container>
        {workoutUserExperience.map(workout => (
          <Button
            width="large-311"
            style={{
              borderColor:
                workout.type === userExperience?.type
                  ? '#001eff'
                  : 'transparent',
              marginBottom: 25,
              borderWidth: 2,
            }}
            // titleWeight={goal == 'Dieta' ? 'bold' : 'normal'}
            title={workout.type}
            variant="secondary"
            onPress={() => setuserExperience(workout)}
          />
        ))}
        {/* <Button
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
        /> */}
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          variant="secondary"
          onPress={() => navigation.navigate('Goal')}
        />
        <Button
          title="Proximo Passo"
          // onPress={chooseGoal}
        />
      </ButtomWrapper>
    </Content>
  );
};
