import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {Box, Change, PinContainer, Conteiner, PinBox, Pin} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function MeasurementsWeight() {
  const [weight, setweight] = useState(0);
  const [numb, setNumb] = useState<number[]>();

  const navigation = useNavigation();

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
        <PinBox onPress={() => setweight(data)}>
          <Pin
            style={{
              height: weight == data ? 120 : 70,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    } else {
      return (
        <PinBox onPress={() => setweight(data)}>
          <Pin
            style={{
              height: weight == data ? 120 : 35,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.ceil(xx / 20) + 40;
    setweight(select);
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
          Peso:
        </Title>
        <Title size={40} mb={50}>
          {weight} kg
        </Title>
        <PinContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 165}}
            snapToInterval={20}
            scrollEventThrottle={8}
            onMomentumScrollEnd={handleScroll}>
            {numb?.map(number => renderPin(number))}
          </ScrollView>
        </PinContainer>
      </Conteiner>
      <Button
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('MeasurementsHeight')}>
        <Title weight="bold" color="TEXT">
          Proximo passo
        </Title>
      </Button>
    </Content>
  );
}
