import React, {useState} from 'react';
import {Button, Content, Text} from '../../../Components';
import {ButtonContainer, ButtonImage, Container, Image} from './styles';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from '../../../Components/Avatar';

export default function ChooseSex() {
  const [sex, setSex] = useState('');

  const navigation = useNavigation();

  const handleSex = (value: string) => {
    if (sex == '') {
      setSex(value);
    } else if (sex == 'man' && value == 'man') {
      setSex('');
    } else if (sex == 'woman' && value == 'woman') {
      setSex('');
    } else if (sex != '') {
      setSex(value);
    }
  };

  return (
    <Content>
      <Text font="Heading_one">Qual o seu sexo?</Text>
      <Text font="Heading_three" color="GRAY">
        Dados necessarios para criação do seu plano personalizado
      </Text>
      <ButtonContainer>
        <View>
          <Avatar
            style={{marginBottom: 10}}
            borderColor={sex == 'man' ? 'PRIMARY' : 'GRAY'}
            onPress={() => handleSex('man')}
          />
          <Text font="Heading_three">Homen</Text>
        </View>
        <Text font="Paragraph">ou</Text>
        <View>
          <Avatar
            style={{marginBottom: 10}}
            borderColor={sex == 'woman' ? 'PRIMARY' : 'GRAY'}
            sex="woman"
            onPress={() => handleSex('woman')}
          />
          <Text font="Heading_three">Mulher</Text>
        </View>
      </ButtonContainer>
      <Button
        style={{alignSelf: 'flex-end'}}
        width="medium-155"
        disabled={sex == '' ? true : false}
        variant={sex == '' ? 'disable_Button' : 'primary'}
        title="Proximo passo"
        onPress={() => navigation.navigate('Age')}
      />
    </Content>
  );
}
