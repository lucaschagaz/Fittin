import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Content from '../../Components/Content';

const {width, height} = Dimensions.get('screen');

const shape = [
  {
    bg: '#ff2c25',
    id: 1,
    photo: '../../Assets/foto01.jpg',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
  {
    bg: '#dbde11',
    id: 2,
    photo: '../../Assets/foto02.jpg',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
  {
    bg: '#ff2c25',
    id: 3,
    photo: '../../Assets/foto03.jpg',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
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

  // const handleScroll = Animated.event([
  //   {nativeEvent: {contentOffset: {x: scrollY}}},
  // ]);

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollY}}}],
    // {useNativeDriver: true},
  );

  const renderItem = ({item}: {item: DataProps}) => {
    // const backgroundAnim = scrollY.interpolate([
    //   {inputRange: [], outputRange: []}
    // ]);

    const backgroundAnim = scrollY.interpolate({
      inputRange: [
        (item.id - 2) * width,
        item.id - 1 + width,
        (item.id + 1) * width + width,
      ],
      outputRange: ['#FFFF', item.bg, '#FFFF'],
      extrapolate: 'extend',
    });

    return (
      <Animated.View
        style={[styles.conteiner, {backgroundColor: backgroundAnim}]}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../Assets/foto01.jpg')}
        />
        <Text style={{color: '#000'}}>{item.title}</Text>
      </Animated.View>
    );
  };

  useEffect(() => {
    console.log(width, 'TAMANHO');
  }, []);

  return (
    <View>
      <FlatList
        data={shape}
        renderItem={renderItem}
        horizontal={true}
        onScroll={handleScroll}
        // onScroll={({nativeEvent}) => console.log(nativeEvent.contentOffset.x)}
        snapToInterval={width}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
