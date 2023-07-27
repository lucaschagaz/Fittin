import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Content, Header, Title} from '../../../Components';
import {AgeBox, ButtomWrapper, Container, ContentContainer} from '../styles';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from 'react-native';

export default function Age() {
  const navigation = useNavigation();
  const [age, setAge] = useState(12);

  const [numb, setNumb] = useState<number[]>();

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const renderHeight = () => {
      const num = [];
      for (let i = 12; i <= 100; i++) {
        num.push(i);
      }

      setNumb(num);
    };

    renderHeight();
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yy = e.nativeEvent.contentOffset.y;
    console.log(yy);
    const select = Math.ceil(yy / 70) + 12;
    console.log(select);
    setAge(select);
  };

  const scrollTo = (number: number) => {};

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
            {numb?.map(number => (
              <AgeBox key={number} onPress={() => scrollTo(number)}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: age == number ? '#001eff' : '#bdbcbc',
                    transform: [
                      {scale: age == number ? 2.2 : 1.3},
                      {rotateX: age > number ? '50deg' : '0deg'},
                      {rotateX: age < number ? '-50deg' : '0deg'},
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
