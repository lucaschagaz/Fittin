import React, {useState} from 'react';
import {Button, Content, Text, Avatar, Icon, Box} from '../../../Components';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

export const ChooseSex = () => {
  const [sex, setSex] = useState('');

  const navigation = useNavigation();
  const {COLORS} = useTheme();
  const handleSex = (value: string) => {
    if (sex == '') {
      setSex(value);
    } else if (sex == value) {
      setSex('');
    } else {
      setSex(value);
    }
  };

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Qual o seu sexo?
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        usaremos para criação do seu plano personalizado
      </Text>
      <Box
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Box style={{alignItems: 'center'}}>
          <Avatar
            style={{
              marginBottom: 10,
              borderColor: sex === 'man' ? COLORS.PRIMARY : COLORS.GRAY_100,
              borderWidth: sex === 'man' ? 2 : 0,
            }}
            onPress={() => handleSex('man')}
          />
          <Text font="Heading_three">Homen</Text>
        </Box>
        <Text font="Button_Text">ou</Text>
        <Box style={{alignItems: 'center'}}>
          <Avatar
            style={{
              marginBottom: 10,
              borderColor: sex === 'woman' ? COLORS.PRIMARY : COLORS.GRAY_100,
              borderWidth: sex === 'woman' ? 2 : 0,
            }}
            sex="woman"
            onPress={() => handleSex('woman')}
          />
          <Text font="Heading_three">Mulher</Text>
        </Box>
      </Box>
      <Button
        style={{alignSelf: 'flex-end'}}
        rightElement={<Icon name="rightArrow" />}
        width="medium"
        disabled={sex == '' ? true : false}
        ButtonVariant={sex == '' ? 'disable_Button' : 'primary'}
        title="Continuar"
        onPress={() => navigation.navigate('Age')}
      />
    </Content>
  );
};
