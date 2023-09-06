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
    const select = Math.ceil(xx / 16) + 40;
    setMeasurements(select);
  };

  return (
    <Content>
      <Header>
        <Title size={28} mb={5} weight="bold">
          Informe seu Peso?
        </Title>
        <Title weight="bold" color="GRAY">
          Informção poderá ser alterada posteriormente
        </Title>
      </Header>
      <Container>
        <MeasurementsValue>
          <Title size={45}>{measurements}</Title>
          <Title mb={10} ml={2}>
            kg
          </Title>
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
          width={45}
          variant="secondary"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Age')
          }
        />
        <Button
          title="Proximo passo"
          width={45}
          onPress={() => navigation.navigate('MeasurementsHeight')}
        />
      </ButtomWrapper>
    </Content>
  );
}
