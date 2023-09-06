import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtonContainer, ButtonImage, Container, Image} from './styles';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../../Components/Avatar';

export default function ChooseSex() {
  const [sex, setSex] = useState('');

  const navigation = useNavigation();

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
            borderColor={sex == 'men' ? 'PRIMARY' : 'GRAY'}
            onPress={() => setSex('men')}
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
            onPress={() => setSex('woman')}
          />
          <Title>Mulher</Title>
        </View>
      </ButtonContainer>
      <Button
        width={50}
        disabled={sex == '' ? true : false}
        variant={sex == '' ? 'secondary' : 'primary'}
        title="Proximo passo"
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('Age')}
      />
    </Content>
  );
}
