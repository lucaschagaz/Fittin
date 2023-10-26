import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Content, Text, Icon, Box} from '../../../Components';
import {AgeBox, Container} from '../styles';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useMeasurements} from '../../../hook/useMeasurements';

export const Age = () => {
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
    const select = Math.round(yy / 80) + 12;
    console.log(select);
    setMeasurements(select);
  };

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Informe-nos sua Idade
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        usaremos para criação do seu plano personalizado
      </Text>
      <Box style={{flexDirection: 'column', flex: 1}}>
        <View style={{height: '80%'}}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 80 * 2,
            }}
            snapToInterval={80}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            scrollEventThrottle={16}
            onScroll={handleScroll}>
            {value?.map(number => (
              <AgeBox activeOpacity={1} key={number}>
                <Text
                  font="Heading_one"
                  style={{
                    fontSize:
                      number == measurements + 1 || number == measurements - 1
                        ? 28
                        : number == measurements
                        ? 30
                        : 25,
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
        </View>
      </Box>
      <Box style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button
          title="Voltar"
          width="medium"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          ButtonVariant="outLine"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('ChooseSex')
          }
        />
        <Button
          title="Continuar"
          width="medium"
          rightElement={<Icon name="rightArrow" />}
          onPress={() => navigation.navigate('MeasurementsWeight')}
        />
      </Box>
    </Content>
  );
};
