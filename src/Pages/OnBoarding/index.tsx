import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Content from '../../Components/Content';

const {width, height} = Dimensions.get('screen');

const shape = [
  {
    photo: '../../Assets/foto01.jpg',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
  {
    photo: '../../Assets/foto02.jpg',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
  {
    photo: '../../Assets/foto03.jpg',
    title: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
  },
];

type DataProps = {
  photo: string;
  title: string;
};

const renderItem = ({item}: {item: DataProps}) => {
  console.log(item, 'data');
  return (
    <View style={styles.conteiner}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../Assets/foto01.jpg')}
      />
      <Text style={{color: '#000'}}>{item.title}</Text>
    </View>
  );
};

export default function OnBoarding() {
  return (
    <Content>
      <FlatList data={shape} renderItem={renderItem} horizontal={true} />
    </Content>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff000',
  },
});
