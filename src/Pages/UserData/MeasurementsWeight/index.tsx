import React, {useEffect} from 'react';
import {Button, Content, Header, Title} from '../../../Components';
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
    const select = Math.ceil(xx / 20) + 40;
    setMeasurements(select);
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
        Informe seu Peso?
      </Title>
      <Container>
        <MeasurementsValue>
          <Title size={40}>{measurements}</Title>
          <Title mb={5} ml={2}>
            kg
          </Title>
        </MeasurementsValue>
        <ContentContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20 * 8}}
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
          onPress={() => navigation.navigate('MeasurementsHeight')}
        />
      </ButtomWrapper>
    </Content>
  );
}
