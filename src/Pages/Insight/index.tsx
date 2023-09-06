import {View, Text} from 'react-native';
import React from 'react';
import {Content, Title} from '../../Components';

export default function Insight() {
  return (
    <Content>
      <View style={{width: '100%', height: 300, backgroundColor: '#999'}}>
        <View
          style={{
            width: '100%',
            height: 250,
            backgroundColor: '#be0a0a',
          }}>
          <Title>Grafico</Title>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#0abe0a',
          }}>
          <Title>Mudar Grafico</Title>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#999',
          marginVertical: 20,
        }}>
        <Title>calorias</Title>
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
}
