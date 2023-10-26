import React, {useState} from 'react';
import {Box, Button, Content, Text} from '../../Components';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootScreenNavigationProp} from '../../@types/navigation';

export const WorkOuts = () => {
  const [workoutData, setWorkoutData] = useState([]);

  const navigation = useNavigation<RootScreenNavigationProp>();

  //@ TOdos os Treinos -- Listar os treinos

  const workoutList = [
    {dia: 'Domingo', treino: 'dia de descanso'},
    {dia: 'Segunda-feira', treino: 'dia de descanso'},
    {dia: 'Terca-feira', treino: 'dia de descanso'},
    {dia: 'Quarte-feira', treino: 'dia de descanso'},
    {dia: 'Quinta-feira', treino: 'dia de descanso'},
    {dia: 'Sexta-feira', treino: 'dia de descanso'},
    {dia: 'Sabado', treino: 'dia de descanso'},
  ];

  return (
    <Content scrolable>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 40,
        }}>
        <Text font="Heading_one">Peinel de treino</Text>
        <TouchableOpacity>
          <Text font="SubTitle_one" bold color="PRIMARY_100">
            usar treino do App
          </Text>
        </TouchableOpacity>
      </Box>
      <Box
        style={{
          marginBottom: 20,
          alignItems: 'flex-start',
        }}>
        <Text font="Button_Text">Sua semana de treino atual</Text>
        {workoutList.map(Workouts => (
          <Box
            key={Workouts.dia}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 50,
            }}>
            <Text font="Paragraph">{Workouts.dia}</Text>
            <Text
              bold
              font="SubTitle_one"
              color={
                Workouts.treino === 'dia de descanso' ? 'GRAY' : 'PRIMARY'
              }>
              {Workouts.treino}
            </Text>
          </Box>
        ))}
      </Box>
      <Button
        onPress={() => navigation.navigate('CreateWorkout')}
        title="Escolher treino do dia"
        width="large"
        style={{marginTop: 10}}
      />
    </Content>
  );
};
