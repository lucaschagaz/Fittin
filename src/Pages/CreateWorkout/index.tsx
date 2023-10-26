import React, {useState} from 'react';
import {Box, Button, Content, Icon, Text} from '../../Components';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootScreenNavigationProp} from '../../@types/navigation';
import {Picker} from '@react-native-picker/picker';
import {CheckBox} from '../WorkOuts/styles';
import {useTheme} from 'styled-components';
import {execicios} from '../../Utils/Mocks/Variabels';

export const CreateWorkout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    'Peito (Músculos Peitorais)',
  );
  const [selectedDay, setSelectedDay] = useState('Segunda-feira');

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

  const workoutGroupList = [
    'Peito (Músculos Peitorais)',
    'Costas (Músculos Dorsais)',
    'Ombros (músculos deltoides)',
    'Bíceps',
    'Tríceps',
    'Quadríceps',
    'posterior de perna',
    'Panturrilhas',
    'Abdômen',
    'Lombar',
  ];

  const exercicios = Object.keys(execicios);

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
          selectedValue={selectedLanguage}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          {exercicios.map(group => (
            <Picker.Item label={group} value={group} />
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
              onPress={() => setSelectedDay(Workouts.dia)}
              style={{
                backgroundColor:
                  selectedDay === Workouts.dia
                    ? COLORS.PRIMARY_100
                    : COLORS.GRAY_100,
              }}
            />
            <Text font="Paragraph">{Workouts.dia}</Text>
          </Box>
        ))}
      </Box>
      <Button
        onPress={() => navigation.navigate('CreateWorkout')}
        title="Escolher exercicios"
        width="large"
        style={{marginTop: 10}}
      />
    </Content>
  );
};
