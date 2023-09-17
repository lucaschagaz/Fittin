import React, {useEffect} from 'react';
import {Button, Content, Text} from '../../../Components';
import {ButtomWrapper, Container, ContentContainer} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import useMeasurements from '../../../hook/useMeasurements';

export default function MeasurementsHeight() {
  const navigation = useNavigation();

  const {measurements, renderMeasurement, value, setMeasurements, renderPin} =
    useMeasurements(100, 300);

  useEffect(() => {
    renderMeasurement();
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xx = e.nativeEvent.contentOffset.x;
    const select = Math.ceil(xx / 16) + 100;
    setMeasurements(select);
  };

  const handleMeasuremants = () => {
    if (measurements == 100) {
      return 1 + 'm';
    } else if (measurements == 200) {
      return 2 + 'm';
    } else if (measurements == 300) {
      return 3 + 'm';
    } else {
      const digitosSeparados = measurements.toString().split('').map(Number);
      if (digitosSeparados[0] == 1) {
        return (
          digitosSeparados[0] +
          'm ' +
          digitosSeparados[1] +
          digitosSeparados[2] +
          'cm'
        );
      } else {
        return (
          digitosSeparados[0] +
          'm ' +
          digitosSeparados[1] +
          digitosSeparados[2] +
          'cm'
        );
      }
    }
  };

  return (
    <Content>
      <Text font="Heading_one">Informe-nos sua Altura</Text>
      <Text font="Heading_three" color="GRAY">
        Esse dado estará disponivel para alteração
      </Text>
      <Container>
        <Text style={{fontSize: 30}} font="Heading_two">
          {measurements} cm
        </Text>
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
              : navigation.navigate('MeasurementsWeight')
          }
        />
        <Button
          title="Proximo passo"
          onPress={() => navigation.navigate('Goal')}
        />
      </ButtomWrapper>
    </Content>
  );
}
