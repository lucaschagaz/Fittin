import React, {useEffect, useState} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
import {
  ButtomWrapper,
  Container,
  ContentContainer,
  Pin,
  PinBox,
} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

export default function MeasurementsHeight() {
  const [height, setHeight] = useState(100);
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
        <PinBox key={data} onPress={() => setHeight(data)}>
          <Pin
            style={{
              height: height == data ? 100 : 60,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    } else {
      return (
        <PinBox key={data} onPress={() => setHeight(data)}>
          <Pin
            style={{
              height: height == data ? 100 : 30,
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

  const handleMeasuremants = () => {
    if (height == 100) {
      return 1 + ' Metro';
    } else if (height == 200) {
      return 2 + ' Metros';
    } else if (height == 300) {
      return 3 + ' Metros';
    } else {
      const digitosSeparados = height.toString().split('').map(Number);
      if (digitosSeparados[0] == 1) {
        return (
          digitosSeparados[0] +
          'm e ' +
          digitosSeparados[1] +
          digitosSeparados[2] +
          'cm'
        );
      } else {
        return (
          digitosSeparados[0] +
          'm e ' +
          digitosSeparados[1] +
          digitosSeparados[2] +
          'cm'
        );
      }
    }
  };

  return (
    <Content>
      <Header>
        <Title size={26} weight="bold">
          Me conte mais sobre você
        </Title>
        <Title weight="bold" color="GRAY">
          Dados para criação do seu plano personalizado
        </Title>
      </Header>
      <Title size={28} weight="bold">
        Informe sua Altura:
      </Title>
      <Container>
        <Title size={35}>{handleMeasuremants()}</Title>
        <ContentContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 165}}
            snapToInterval={20}
            scrollEventThrottle={8}
            onScroll={handleScroll}>
            {numb?.map(number => renderPin(number))}
          </ScrollView>
        </ContentContainer>
      </Container>
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
          onPress={() => navigation.navigate('Age')}
        />
      </ButtomWrapper>
    </Content>
  );
}
