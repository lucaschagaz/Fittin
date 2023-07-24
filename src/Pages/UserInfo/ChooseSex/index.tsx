import React, {useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {ButtonContainer, ButtonImage, Container, Image} from './styles';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ChooseSex() {
  const [sex, setSex] = useState('');

  const navigation = useNavigation();

  return (
    <Content>
      <Header>
        <Title size={24} weight="bold">
          Preciso de algumas informações!
        </Title>
        <Title weight="bold" color="GRAY">
          informações necessarias para criação do seu plano personalizado
        </Title>
      </Header>
      <Container>
        <Title weight="bold" mb={20} size={30}>
          Você é:
        </Title>
        <ButtonContainer>
          <View>
            <ButtonImage
              style={{borderColor: sex == 'men' ? '#3447d4' : '#9999'}}
              onPress={() => setSex('men')}>
              <Image source={require('../../../Assets/man.png')} />
            </ButtonImage>
            <Title>Homen</Title>
          </View>
          <Title weight="bold" size={25}>
            ou
          </Title>
          <View>
            <ButtonImage
              style={{borderColor: sex == 'woman' ? '#3447d4' : '#9999'}}
              onPress={() => setSex('woman')}>
              <Image source={require('../../../Assets/woman.png')} />
            </ButtonImage>
            <Title>Mulher</Title>
          </View>
        </ButtonContainer>
      </Container>
      <Button
        width={50}
        title="Proximo passo"
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('Measurements')}
      />
    </Content>
  );
}
