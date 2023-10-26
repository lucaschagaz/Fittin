import React, {useEffect} from 'react';
import {Box, Button, Content, Text} from '../../../Components';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useMeasurements} from '../../../hook/useMeasurements';
import {Icon} from '../../../Components/Icon';

export const MeasurementsHeight = () => {
  const navigation = useNavigation();

  const {measurements, renderMeasurement, value, setMeasurements, renderPin} =
    useMeasurements(100, 300);

  useEffect(() => {
    renderMeasurement();
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.floor(xx / 16) + 100;
    setMeasurements(select);
  };

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Informe-nos sua Altura
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        Esse dado estará disponivel para alteração
      </Text>
      <Box style={{flex: 1}}>
        <Box style={{flexDirection: 'row'}}>
          <Text font="Heading_two">{measurements}</Text>
          <Text
            style={{paddingLeft: 5, alignSelf: 'flex-end'}}
            font="Heading_three">
            cm
          </Text>
        </Box>
        <Box>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 12 * 16}}
            snapToInterval={16}
            scrollEventThrottle={16}
            onScroll={handleScroll}>
            {value?.map(number => renderPin(number))}
          </ScrollView>
        </Box>
      </Box>
      <Box style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button
          title="Voltar"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          ButtonVariant="outLine"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('MeasurementsWeight')
          }
        />
        <Button
          title="Continuar"
          rightElement={<Icon name="rightArrow" />}
          onPress={() => navigation.navigate('Experience')}
        />
      </Box>
    </Content>
  );
};
