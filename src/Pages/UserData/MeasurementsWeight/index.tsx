import React, {useEffect} from 'react';
import {Button, Content, Text} from '../../../Components';
import {
  Container,
  MeasurementsValue,
  ContentContainer,
  ButtomWrapper,
} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import useMeasurements from '../../../hook/useMeasurements';

export default function MeasurementsWeight() {
  const navigation = useNavigation();

  const {renderMeasurement, renderPin, value, setMeasurements, measurements} =
    useMeasurements(40, 200);

  useEffect(() => {
    renderMeasurement();
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.ceil(xx / 16) + 40;
    setMeasurements(select);
  };

  return (
    <Content>
      <Text font="Heading_one">Informe-nos seu Peso</Text>
      <Text font="Heading_three" color="GRAY">
        Esse dado estará disponivel para alteração
      </Text>
      <Container>
        <MeasurementsValue>
          <Text font="Heading_two">{measurements}</Text>
          <Text font="Heading_two" style={{marginLeft: 5}}>
            kg
          </Text>
        </MeasurementsValue>
        <ContentContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 16 * 10.5}}
            snapToInterval={16}
            scrollEventThrottle={16}
            onScroll={handleScroll}>
            {value?.map(number => renderPin(number))}
          </ScrollView>
        </ContentContainer>
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          variant="secondary"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Age')
          }
        />
        <Button
          title="Proximo passo"
          onPress={() => navigation.navigate('MeasurementsHeight')}
        />
      </ButtomWrapper>
    </Content>
  );
}
