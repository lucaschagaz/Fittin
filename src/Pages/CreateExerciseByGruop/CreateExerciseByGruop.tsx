import React from 'react';
import {Box, Content, Icon, Input, Text} from '../../Components';
// import {ScrollView} from 'react-native';
import {execicios} from '../../Utils/Mocks/Variabels';
import {AuthNavigatorParamList} from '../../@types/navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView, ViewStyle} from 'react-native';
import {AddButton} from './styled';
import {useTheme} from 'styled-components';

export const CreateExerciseByGruop = () => {
  const {params} =
    useRoute<RouteProp<AuthNavigatorParamList, 'CreateWorkoutByGroup'>>();

  const {COLORS} = useTheme();

  return (
    <Content scrolable>
      <Text font="Heading_one">Adicionar exercicios</Text>
      <Input label="Pesquisar" style={{marginTop: 20}} />
      {/* /**  uma scroll horizontal - bolinhas com o x para retirar */}
      {/* /**  um loading para buscando  */}
      {/* /**  uma lista de exercicio com o nome e a foto - flatlist*/}
      <Text>Biblioteca de exercicios</Text>
      <ScrollView>
        {execicios[params.group].map(item => (
          <Box
            style={[
              $WorkoutBoxStyleProps,
              {backgroundColor: COLORS.PRIMARY_CONTRAST},
            ]}>
            <Text>{item.nome}</Text>
            <AddButton>
              <Icon size={12} name="plus" color="PRIMARY" />
            </AddButton>
          </Box>
        ))}
      </ScrollView>
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
