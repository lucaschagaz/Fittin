import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Content, Header, Title} from '../../../Components';
import {AgeBox, ButtomWrapper, Container} from '../styles';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from 'react-native';
import useMeasurements from '../../../hook/useMeasurements';

export default function Age() {
  const navigation = useNavigation();

  const {value, renderMeasurement, measurements, setMeasurements} =
    useMeasurements(12, 100);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    renderMeasurement();
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yy = e.nativeEvent.contentOffset.y;
    console.log(yy);
    const select = Math.ceil(yy / 85) + 12;
    console.log(select);
    setMeasurements(select);
  };

  return (
    <Content>
      <Header>
        <Title size={28} weight="bold">
          Informe sua Idade:
        </Title>
        <Title weight="bold" color="GRAY">
          Dados para criação do seu plano personalizado
        </Title>
      </Header>
      <Container>
        <View style={{height: '80%'}}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 70 * 2,
            }}
            snapToInterval={85}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            scrollEventThrottle={16}
            onScroll={handleScroll}>
            {value?.map(number => (
              <AgeBox activeOpacity={1} key={number}>
                <Text
                  style={{
                    fontSize:
                      number == measurements + 1 || number == measurements - 1
                        ? 28
                        : number == measurements
                        ? 30
                        : 25,
                    opacity:
                      number == measurements + 1 || number == measurements - 1
                        ? 0.7
                        : number == measurements
                        ? 1
                        : 0.3,
                    fontWeight: 'bold',
                    color: measurements == number ? '#001eff' : '#6b6a6a',
                    transform: [
                      {scale: measurements == number ? 2.2 : 1.3},
                      {rotateX: measurements > number ? '50deg' : '0deg'},
                      {rotateX: measurements < number ? '-50deg' : '0deg'},
                    ],
                  }}>
                  {number}
                </Text>
              </AgeBox>
            ))}
          </ScrollView>
        </View>
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          width={40}
          variant="secondary"
          onPress={() => navigation.navigate('Measurements2')}
        />
        <Button
          title="Proximo passo"
          width={40}
          onPress={() => navigation.navigate('Goal')}
        />
      </ButtomWrapper>
    </Content>
  );
}
