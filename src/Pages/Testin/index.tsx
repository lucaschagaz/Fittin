import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';

const {width, height} = Dimensions.get('screen');

const shape = [
  {
    title: 'Frase 01 para ser renderizada',
    image:
      'https://www.transparentpng.com/thumb/fitness/eIf2Ob-fitness-free-cut-out.png',
    backgroundColor: '#d47c34',
  },
  {
    title: 'Frase 02 para ser renderizada com um pouco mais de informação',
    image:
      'https://www.transparentpng.com/thumb/fitness/8J3GLV-fitness-images-png.png',
    backgroundColor: '#3447d4',
  },
  {
    title: 'Frase 03 para ser renderizada, teste um pouco menor',
    image:
      'https://www.transparentpng.com/thumb/fitness/wMAm0G-fitness-background.png',
    backgroundColor: '#d47c34',
  },
];

export default function Testing() {
  const scroolX = useRef(new Animated.Value(0)).current;

  const handleScrollX = () => {};

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={shape}
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={[styles.box, {backgroundColor: item.backgroundColor}]}>
            <Image
              style={{width: 250, height: 250}}
              source={{uri: item.image}}
            />
            <Text>{item.title}</Text>
          </View>
        )}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
  },
});
