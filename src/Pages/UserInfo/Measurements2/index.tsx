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
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
            width: 10,
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
              backgroundColor: '#001eff',
            }}></TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            width: 10,
            height: 80,
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Text style={{fontSize: 18}}>{data}</Text> */}
          <TouchableOpacity
            onPress={() => setweight(data)}
            style={{
              width: 3,
              height: 35,
              backgroundColor: '#001eff',
            }}></TouchableOpacity>
        </View>
      );
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.ceil(xx / 20) + 40;
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
          Peso:
        </Title>
        <Title size={40}>{height} kg</Title>
        <Icon
          name="sort-desc"
          size={25}
          color="#001eff"
          style={{marginBottom: 20, marginTop: 50, marginLeft: 5}}
        />
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
        onPress={() => navigation.navigate('Age')}>
        <Title weight="bold" color="TEXT">
          Proximo passo
        </Title>
      </Button>
    </Content>
  );
}
