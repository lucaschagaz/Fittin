import React, {useState} from 'react';
import {Button, Content, StipCalendar, Text} from '../../Components';
import {
  ImageBackgroud,
  TagWorkoutInformation,
  WorkoutHomeTitle,
  WorkoutHomeHeader,
  WorkoutEmpty,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TabBarScreenNavigationProp} from '../../@types/navigation';

export const Home = () => {
  // Data minima vai ser o dia que o usuario criou a conta

  const [customWorkout, setCustomWorkout] = useState(true);

  const navigation = useNavigation<TabBarScreenNavigationProp>();

  const handleWorkOutPlan = () => {
    navigation.navigate('Workout');
    setCustomWorkout(false);
  };

  return (
    <Content>
      <StipCalendar style={{elevation: 5}} />
      {customWorkout ? (
        <WorkoutEmpty style={{elevation: 10}}>
          <Text color="PRIMARY" font="Heading_two">
            Crie seu Treino personalizado
          </Text>
          <Text color="GRAY">Você optou por criar seu prorpio reino</Text>
          <Text color="GRAY">clique e crie seu treino semanal</Text>
          <Button
            ButtonVariant="outLine"
            title="Criar treino"
            width="large"
            onPress={handleWorkOutPlan}
          />
        </WorkoutEmpty>
      ) : (
        <ImageBackgroud
          resizeMode="cover"
          borderRadius={20}
          source={require('../../assets/background/arms.jpg')}>
          <WorkoutHomeHeader>
            <TagWorkoutInformation
              onPress={() => navigation.navigate('Workout')}>
              <Text color="PRIMARY_CONTRAST">Ver treino</Text>
            </TagWorkoutInformation>
            <TagWorkoutInformation>
              <Text color="PRIMARY_CONTRAST">5 exercicios</Text>
            </TagWorkoutInformation>
          </WorkoutHomeHeader>
          <WorkoutHomeTitle>
            <Text font="Heading_two" color="PRIMARY_CONTRAST">
              Treino de Hoje:
            </Text>
            <Text
              style={{paddingLeft: 3}}
              font="Heading_two"
              color="PRIMARY_CONTRAST">
              Peito
            </Text>
          </WorkoutHomeTitle>
        </ImageBackgroud>
      )}
    </Content>
  );
};
