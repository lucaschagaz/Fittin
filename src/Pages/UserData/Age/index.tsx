import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Content, Header, Title} from '../../../Components';
import {AgeBox, ButtomWrapper, Container, ContentContainer} from '../styles';
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
    const select = Math.ceil(yy / 70) + 12;
    console.log(select);
    setMeasurements(select);
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
      <Title size={28} weight="bold" mt={30}>
        Informe sua Idade:
      </Title>
      <Container>
        <ContentContainer style={{height: '90%'}}>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingVertical: 70 * 2,
            }}
            snapToInterval={70}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            scrollEventThrottle={2}
            onScroll={handleScroll}>
            {value?.map(number => (
              <AgeBox
                activeOpacity={1}
                key={number}
                onPress={() => scrollTo(number)}>
                <Text
                  style={{
                    fontSize:
                      number == measurements + 1 || number == measurements - 1
                        ? 30
                        : number == measurements
                        ? 30
                        : 18,
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
        </ContentContainer>
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
