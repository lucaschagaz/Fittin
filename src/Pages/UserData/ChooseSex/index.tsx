import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
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
      <Header>
        <Title size={26} weight="bold">
          Qual o seu sexo?
        </Title>
        <Title weight="bold" color="GRAY">
          Dados necessarias para criação do seu plano personalizado
        </Title>
      </Header>
      <ButtonContainer>
        <View>
          <Avatar
            borderColor={sex == 'man' ? 'PRIMARY' : 'GRAY'}
            onPress={() => handleSex('man')}
          />
          <Title>Homen</Title>
        </View>
        <Title weight="bold" size={25}>
          ou
        </Title>
        <View>
          <Avatar
            borderColor={sex == 'woman' ? 'PRIMARY' : 'GRAY'}
            sex="woman"
            onPress={() => handleSex('woman')}
          />
          <Title>Mulher</Title>
        </View>
      </ButtonContainer>
      <Button
        style={{alignSelf: 'flex-end'}}
        bold
        width="medium-155"
        disabled={sex == '' ? true : false}
        variant={sex == '' ? 'PrimaryLight' : 'primary'}
        title="Proximo passo"
        onPress={() => navigation.navigate('Age')}
      />
    </Content>
  );
}
