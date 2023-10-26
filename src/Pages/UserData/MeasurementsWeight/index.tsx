import React, {useEffect} from 'react';
import {Button, Content, Text, Box} from '../../../Components';
import {MeasurementsValue, ContentContainer} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import {useMeasurements} from '../../../hook/useMeasurements';
import {Icon} from '../../../Components/Icon';

export const MeasurementsWeight = () => {
  const navigation = useNavigation();

  const {renderMeasurement, renderPin, value, setMeasurements, measurements} =
    useMeasurements(40, 200);

  useEffect(() => {
    renderMeasurement();
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.floor(xx / 16) + 40;
    setMeasurements(select);
  };

  return (
    <Content>
      <Text font="Heading_one" style={{marginBottom: 10}}>
        Informe-nos seu Peso
      </Text>
      <Text font="Button_Text" color="GRAY" style={{textAlign: 'center'}}>
        Esse dado estará disponivel para alteração
      </Text>
      <Box style={{flex: 1}}>
        <Box style={{flexDirection: 'row'}}>
          <Text font="Heading_two">{measurements}</Text>
          <Text
            font="Heading_three"
            style={{paddingLeft: 5, alignSelf: 'flex-end'}}>
            kg
          </Text>
        </Box>
        <Box>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 12 * 16,
            }}
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
          ButtonVariant="outLine"
          leftElement={<Icon name="leftArrow" color="GRAY" />}
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Age')
          }
        />
        <Button
          title="Continuar"
          rightElement={<Icon name="rightArrow" />}
          onPress={() => navigation.navigate('MeasurementsHeight')}
        />
      </Box>
    </Content>
  );
};
