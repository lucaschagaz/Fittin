import React, {useState} from 'react';
import {Box, Button, Content, Icon, Input, Text} from '../../Components';
import {execicios} from '../../Utils/Mocks/Variabels';
import {
  AuthNavigatorParamList,
  TabBarScreenNavigationProp,
} from '../../@types/navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Image, ScrollView, ViewStyle} from 'react-native';
import {AddButton} from './styled';
import {useTheme} from 'styled-components';

export const ExerciseByGruop = () => {
  const {params} =
    useRoute<RouteProp<AuthNavigatorParamList, 'ExerciseByGruop'>>();

  const {COLORS} = useTheme();

  const navigation = useNavigation<TabBarScreenNavigationProp>();

  const [SelectedWorkout, setSelectedWorkout] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>([]);

  const addWorkout = (item: string) => {
    setSelectedWorkout(prev => [...prev, item]);
  };

  const remove = (item: string) => {
    setSelectedWorkout(
      SelectedWorkout.filter(itemfiltered => itemfiltered !== item),
    );
  };

  const searchItem = (text: string) => {
    if (text == '') {
      setSearchResult([]);
    }
    setSearch(text);

    const workoutFinded = execicios[params.group]
      ?.map(item => item?.nome)
      .filter(item => item.match(search));

    setSearchResult(workoutFinded);
  };

  return (
    <Content scrolable>
      <Text font="Heading_one">Adicionar exercicios</Text>
      <Input
        label="Pesquisar"
        style={{marginTop: 20}}
        value={search}
        onChangeText={text => searchItem(text)}
      />
      <ScrollView
        horizontal
        style={{marginVertical: 20}}
        showsHorizontalScrollIndicator={false}>
        {SelectedWorkout.map(item => (
          <Box key={item} style={$ChoosedExerciseBoxStyle}>
            <Box style={{alignItems: 'flex-end'}}>
              <Icon pressable onPress={() => remove(item)} name="x" size={15} />
            </Box>
            <Image
              style={{width: 70, height: 70, borderRadius: 70, marginBottom: 5}}
              source={require('../../assets/muscles/peito.png')}
            />
            <Text font="SubTitle_one">
              {item.length >= 15 ? item.slice(0, 15) + '...' : item}
            </Text>
          </Box>
        ))}
      </ScrollView>
      <Text style={{marginTop: 20}} font="Heading_two">
        Biblioteca de exercicios
      </Text>
      <ScrollView>
        {search.length > 0
          ? searchResult?.map(item => (
              <Box
                key={item}
                style={[
                  $WorkoutBoxStyleProps,
                  {backgroundColor: COLORS.PRIMARY_CONTRAST},
                ]}>
                <Box style={$ExerciseNameBoxStyle}>
                  <Text font="Paragraph" bold>
                    {item}
                  </Text>
                </Box>
                <AddButton
                  style={{
                    borderColor: SelectedWorkout.includes(item)
                      ? COLORS.GRAYDARK
                      : COLORS.PRIMARY,
                  }}
                  disabled={SelectedWorkout.includes(item) && true}
                  onPress={() => addWorkout(item)}>
                  <Icon
                    size={12}
                    name="plus"
                    color={
                      SelectedWorkout.includes(item) ? 'GRAYDARK' : 'PRIMARY'
                    }
                  />
                </AddButton>
              </Box>
            ))
          : execicios[params.group]?.map(item => (
              <Box
                key={item.nome}
                style={[
                  $WorkoutBoxStyleProps,
                  {backgroundColor: COLORS.PRIMARY_CONTRAST},
                ]}>
                <Box style={$ExerciseNameBoxStyle}>
                  <Text font="Paragraph" bold>
                    {item.nome}
                  </Text>
                </Box>
                <AddButton
                  style={{
                    borderColor: SelectedWorkout.includes(item.nome)
                      ? COLORS.GRAYDARK
                      : COLORS.PRIMARY,
                  }}
                  disabled={SelectedWorkout.includes(item.nome) && true}
                  onPress={() => addWorkout(item.nome)}>
                  <Icon
                    size={12}
                    name="plus"
                    color={
                      SelectedWorkout.includes(item.nome)
                        ? 'GRAYDARK'
                        : 'PRIMARY'
                    }
                  />
                </AddButton>
              </Box>
            ))}
      </ScrollView>
      {SelectedWorkout.length > 1 && (
        <Button
          style={{marginTop: 20}}
          width="large"
          title="Salvar treino"
          onPress={() => navigation.navigate('Workout')}
        />
      )}
    </Content>
  );
};

const $WorkoutBoxStyleProps: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
  borderRadius: 14,
  paddingVertical: 15,
  paddingHorizontal: 10,
  justifyContent: 'space-between',
};

const $ExerciseNameBoxStyle: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

const $ChoosedExerciseBoxStyle: ViewStyle = {
  flex: 1,
  marginHorizontal: 10,
};
