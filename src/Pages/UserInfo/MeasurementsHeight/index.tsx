import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {Box, Change, Conteiner, Pin, PinBox, PinContainer} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';

export default function MeasurementsHeight() {
  const [height, setHeight] = useState(175);
  const [numb, setNumb] = useState<number>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const renderHeight = () => {
      const num = [];
      for (let i = 100; i <= 300; i++) {
        num.push(i);
      }

      setNumb(num);
    };

    renderHeight();
  }, []);

  const renderPin = (data: number) => {
    if (data % 5 === 0) {
      return (
        <PinBox onPress={() => setHeight(data)}>
          <Pin
            style={{
              height: height == data ? 120 : 70,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    } else {
      return (
        <PinBox onPress={() => setHeight(data)}>
          <Pin
            style={{
              height: height == data ? 120 : 35,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.ceil(xx / 20) + 100;
    setHeight(select);
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
        <Title size={28} weight="bold" mt={20}>
          Altura:
        </Title>
        <Title size={28} weight="bold" mt={20}>
          {height} cm
        </Title>
      </Conteiner>
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
