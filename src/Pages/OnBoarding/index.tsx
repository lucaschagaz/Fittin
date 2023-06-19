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

const bgs = ['#3425ffcb', '#de4f11d6', '#11a6ecae'];

const shape = [
  {
    bg: '#3425ffcb',
    id: 1,
    photo: '../../Assets/gym1.png',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
  {
    bg: '#3425ffcb',
    id: 2,
    photo: '../../Assets/gym2.png',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
  {
    bg: '#3425ffcb',
    id: 3,
    photo: '../../Assets/gym3.png',
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
    {useNativeDriver: false},
  );

  const BackDrop = ({scrollx, id, bg}: any) => {
    const backgroundAnim = scrollY.interpolate({
      inputRange: [0, id * width],
      outputRange: [bg, bg],
    });

    return (
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {backgroundColor: backgroundAnim},
        ]}
      />
    );
  };

  const renderItem = ({item}: {item: DataProps}) => {
    return (
      <>
        <BackDrop scrollx={scrollY} id={item.id} bg={item.bg} />
        <Animated.View style={styles.conteiner}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../../Assets/gym1.png')}
          />
          <Text style={{color: '#000'}}>{item.title}</Text>
        </Animated.View>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={shape}
        renderItem={renderItem}
        horizontal={true}
        onScroll={handleScroll}
        // onScroll={({nativeEvent}) => console.log(nativeEvent.contentOffset.x)}
        snapToInterval={width}
        scrollEventThrottle={16}
        pagingEnabled
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
    padding: 20,
  },
});
