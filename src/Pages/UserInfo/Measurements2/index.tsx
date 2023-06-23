import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {Box, Change, PinContainer, Conteiner} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

export default function Measurements2() {
  const [weight, setweight] = useState(75);
  const [height, setheight] = useState(0);

  const [numb, setNumb] = useState<number[]>();

  const navigation = useNavigation();

  useEffect(() => {}, []);

  useEffect(() => {
    const renderHeight = () => {
      const num = [];
      for (let i = 40; i <= 200; i++) {
        num.push(i);
      }

      setNumb(num);
    };

    renderHeight();
  }, []);

  const renderPin = (data: number) => {
    if (data % 5 === 0) {
      return (
        <View
          style={{
            width: 3,
            height: 80,
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            // onFocus={}
            onPress={() => setweight(data)}
            style={{
              width: 3,
              height: 80,
              backgroundColor: '#ff7300',
            }}></TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            width: 3,
            height: 80,
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setweight(data)}
            style={{
              width: 3,
              height: 35,
              backgroundColor: '#ff7300',
            }}></TouchableOpacity>
        </View>
      );
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.floor(xx / 7) + 40;
    setheight(select);
  };

  return (
    <Content>
      <Header>
        <Title size={24} weight="bold">
          Me conte mais sobre você
        </Title>
        <Title weight="bold" color="GRAY">
          Dados para criação do seu plano personalizado
        </Title>
      </Header>
      <Conteiner>
        <Title size={28} weight="bold">
          Altura:
        </Title>
        <Title size={40}>{weight} kg</Title>
        <Title size={40}>{height} kg</Title>
        <PinContainer>
          <ScrollView
            horizontal
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{paddingHorizontal: 155}}
            snapToInterval={7}
            onMomentumScrollEnd={handleScroll}>
            {numb?.map(number => renderPin(number))}
          </ScrollView>
        </PinContainer>
      </Conteiner>
      <Button
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('Age')}>
        <Title weight="bold" color="TEXT">
          Proximo passo
        </Title>
      </Button>
    </Content>
  );
}
