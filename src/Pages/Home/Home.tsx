import React from 'react';
import {Content, StipCalendar, Title} from '../../Components';
import {
  ImageBackgroud,
  TagWorkoutInformation,
  WorkoutHomeTitle,
  WorkoutHomeHeader,
} from './styles';

export default function Home() {
  // dia da semana

  // Data minima vai ser o dia que o usuario criou a conta
  return (
    <Content>
      <StipCalendar style={{elevation: 5}} />
      <ImageBackgroud
        resizeMode="cover"
        borderRadius={20}
        source={require('../../Assets/background/backMan.jpg')}>
        <WorkoutHomeHeader>
          <TagWorkoutInformation>
            <Title color="PRIMARY_CONTRAST">Ver treino</Title>
          </TagWorkoutInformation>
          <TagWorkoutInformation>
            <Title color="PRIMARY_CONTRAST">5 exercicios</Title>
          </TagWorkoutInformation>
        </WorkoutHomeHeader>
        <WorkoutHomeTitle>
          <Title size={25} color="PRIMARY_CONTRAST">
            Hoje seu treino é de:
          </Title>
          <Title size={35} color="PRIMARY_CONTRAST">
            Peito
          </Title>
        </WorkoutHomeTitle>
      </ImageBackgroud>
    </Content>
  );
}
