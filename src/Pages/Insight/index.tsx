import {View} from 'react-native';
import React from 'react';
import {Content, Text} from '../../Components';

export const Insight = () => {
  return (
    <Content>
      <View style={{width: '100%', height: 300, backgroundColor: '#999'}}>
        <View
          style={{
            width: '100%',
            height: 250,
            backgroundColor: '#be0a0a',
          }}>
          <Text>Grafico</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#0abe0a',
          }}>
          <Text>Mudar Grafico</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#999',
          marginVertical: 20,
        }}>
        <Text>calorias</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 5,
            height: 140,
            backgroundColor: '#999',
          }}></View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 5,
            height: 140,
            backgroundColor: '#999',
          }}></View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 5,
            height: 140,
            backgroundColor: '#999',
          }}></View>
      </View>
    </Content>
  );
};
