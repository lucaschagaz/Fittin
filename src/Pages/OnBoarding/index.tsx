import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Content from '../../Components/Content';
import {Button, Title} from '../../Components';

const {width, height} = Dimensions.get('window');

const shape = [
  {
    bg: '#25ff25ca',
    id: 1,
    photo: require('../../Assets/onBoarding/gym1.png'),
    title: 'Um texto Fitness qualquer',
  },
  {
    bg: '#ff25c1ca',
    id: 2,
    photo: require('../../Assets/onBoarding/gym2.png'),
    title: 'Saude, seguranca e representatividade',
  },
  {
    bg: '#3425ffcb',
    id: 3,
    photo: require('../../Assets/onBoarding/gym3.png'),
    title: 'outro texto fitness qualquer sobre qualquer coisa',
  },
];

type DataProps = {
  photo: string;
  title: string;
  bg: string;
  id: number;
};

export default function OnBoarding() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollY}}}],
    {useNativeDriver: false},
  );

  const renderItem = ({item}: {item: DataProps}) => {
    return (
      <Animated.View style={[styles.conteiner]}>
        <Image
          style={{
            width: 300,
            height: 300,
          }}
          source={item.photo}
        />
        <Title mt={10}>texto</Title>
      </Animated.View>
    );
  };

  return (
    <Content>
      <Animated.FlatList
        data={shape}
        renderItem={renderItem}
        horizontal={true}
        onScroll={handleScroll}
        // onScroll={({nativeEvent}) => console.log(nativeEvent.contentOffset.x)}
        snapToInterval={width - 20}
        // scrollEventThrottle={16}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Title mb={10}>Passo 1 de 3</Title>
      <Button>
        <Title weight="bold" color="PRIMARY_CONTRAST">
          Prosseguir
        </Title>
      </Button>
    </Content>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    width: width - 20,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
