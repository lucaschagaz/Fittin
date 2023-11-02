import React, {useState} from 'react';
import {Box, Button, Content, Text} from '../../Components';
import {useNavigation} from '@react-navigation/native';
import {RootScreenNavigationProp, exercicesName} from '../../@types/navigation';
import {Picker} from '@react-native-picker/picker';
import {CheckBox} from '../WorkOuts/styles';
import {useTheme} from 'styled-components';
import {execicios} from '../../Utils/Mocks/Variabels';

export const CreateWorkout = () => {
  const [selected, setSelected] = useState<{dia: string; group: exercicesName}>(
    {
      dia: 'Segunda-feira',
      group: 'Peito',
    },
  );

  const {COLORS} = useTheme();
  const navigation = useNavigation<RootScreenNavigationProp>();

  const workoutList = [
    {dia: 'Domingo', treino: 'dia de descanso'},
    {dia: 'Segunda-feira', treino: 'dia de descanso'},
    {dia: 'Terca-feira', treino: 'dia de descanso'},
    {dia: 'Quarte-feira', treino: 'dia de descanso'},
    {dia: 'Quinta-feira', treino: 'dia de descanso'},
    {dia: 'Sexta-feira', treino: 'dia de descanso'},
    {dia: 'Sabado', treino: 'dia de descanso'},
  ];

  const exercicios = Object.keys(execicios);

  console.log(selected.group);

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 40}}>
        Adicionar treino do dia
      </Text>
      <Box
        style={{
          alignItems: 'flex-start',
          marginBottom: 20,
        }}>
        <Text font="Heading_three">Grupo muscular</Text>
        <Picker
          style={{width: '100%', marginTop: 10}}
          selectedValue={selected.group}
          onValueChange={itemValue =>
            setSelected(prev => ({...prev, group: itemValue}))
          }>
          {exercicios.map(group => (
            <Picker.Item key={group} label={group} value={group} />
          ))}
        </Picker>
      </Box>
      <Box
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Text font="Heading_three">Dia</Text>
        {workoutList.map(Workouts => (
          <Box
            key={Workouts.dia}
            style={{
              flexDirection: 'row',
              height: 40,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <CheckBox
              onPress={() =>
                setSelected(prev => ({...prev, dia: Workouts.dia}))
              }
              style={{
                backgroundColor:
                  selected.dia === Workouts.dia
                    ? COLORS.PRIMARY_100
                    : COLORS.GRAY_100,
              }}
            />
            <Text font="Paragraph">{Workouts.dia}</Text>
          </Box>
        ))}
      </Box>
      <Button
        onPress={() =>
          navigation.navigate('ExerciseByGruop', {
            group: selected.group,
            day: selected.dia,
          })
        }
        title="Escolher exercicios"
        width="large"
        style={{marginTop: 10}}
      />
    </Content>
  );
};
