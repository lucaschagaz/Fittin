import React, {useEffect} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
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
    const select = Math.ceil(xx / 20) + 100;
    setMeasurements(select);
  };

  const handleMeasuremants = () => {
    if (measurements == 100) {
      return 1 + ' Metro';
    } else if (measurements == 200) {
      return 2 + ' Metros';
    } else if (measurements == 300) {
      return 3 + ' Metros';
    } else {
      const digitosSeparados = measurements.toString().split('').map(Number);
      if (digitosSeparados[0] == 1) {
        return (
          digitosSeparados[0] +
          'm e ' +
          digitosSeparados[1] +
          digitosSeparados[2] +
          'cm'
        );
      } else {
        return (
          digitosSeparados[0] +
          'm e ' +
          digitosSeparados[1] +
          digitosSeparados[2] +
          'cm'
        );
      }
    }
  };

  return (
    <Content>
      <Header>
        <Title size={26} weight="bold">
          Me conte mais sobre você
        </Title>
        <Title weight="bold" color="GRAY">
          Dados para criação do seu plano personalizado
        </Title>
      </Header>
      <Title size={28} weight="bold">
        Informe sua Altura:
      </Title>
      <Container>
        <Title size={35}>{handleMeasuremants()}</Title>
        <ContentContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 165}}
            snapToInterval={20}
            scrollEventThrottle={16}
            onScroll={handleScroll}>
            {value?.map(number => renderPin(number))}
          </ScrollView>
        </ContentContainer>
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          width={40}
          variant="secondary"
          // onPress={() => navigation.navigate('Measurements')}
        />
        <Button
          title="Proximo passo"
          width={40}
          onPress={() => navigation.navigate('Age')}
        />
      </ButtomWrapper>
    </Content>
  );
}
