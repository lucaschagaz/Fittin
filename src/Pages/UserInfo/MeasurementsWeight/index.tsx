import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {
  Conteiner,
  PinBox,
  Pin,
  MeasurementsValue,
  ContentContainer,
  ButtomWrapper,
} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function MeasurementsWeight() {
  const [weight, setweight] = useState(40);
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
              height: weight == data ? 100 : 60,
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
              height: weight == data ? 100 : 30,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    console.log(xx);
    const select = Math.ceil(xx / 20) + 40;
    console.log(select);
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
      <Title size={28} weight="bold">
        Informe seu Peso?
      </Title>
      <Conteiner>
        <MeasurementsValue>
          <Title size={40}>{weight}</Title>
          <Title mb={5} ml={2}>
            kg
          </Title>
        </MeasurementsValue>
        <ContentContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 165}}
            snapToInterval={20}
            scrollEventThrottle={8}
            onMomentumScrollEnd={handleScroll}>
            {numb?.map(number => renderPin(number))}
          </ScrollView>
        </ContentContainer>
      </Conteiner>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          width={40}
          variant="secondary"
          // onPress={() => navigation.navigate('Measurements')}
        />
        <Button
          title="Proximo passo"
          width={40}
          onPress={() => navigation.navigate('MeasurementsHeight')}
        />
      </ButtomWrapper>
    </Content>
  );
}
