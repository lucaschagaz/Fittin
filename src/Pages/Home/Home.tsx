import React from 'react';
import {Button, Content, StipCalendar, Text} from '../../Components';
import {
  ImageBackgroud,
  TagWorkoutInformation,
  WorkoutHomeTitle,
  WorkoutHomeHeader,
} from './styles';
import {View} from 'react-native';

export default function Home() {
  // dia da semana

  // Data minima vai ser o dia que o usuario criou a conta
  return (
    <Content>
      <StipCalendar style={{elevation: 5}} />
      <ImageBackgroud
        resizeMode="cover"
        borderRadius={20}
        source={require('../../assets/background/arms.jpg')}>
        <WorkoutHomeHeader>
          <TagWorkoutInformation>
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
    </Content>
  );
}
