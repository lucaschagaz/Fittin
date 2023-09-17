import React, {useState} from 'react';
import {Button, Content, Text} from '../../../Components';
import {ButtomWrapper, Container} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {Diets} from '../../../Utils/Mocks/Variabels';

export default function Goal() {
  const navigation = useNavigation();

  const [selectedDiet, setSelectedDiet] = useState('Dieta Cetogênica');

  return (
    <Content>
      <Text font="Heading_one">Deseja seguir alguma Dieta?</Text>
      <Text font="Heading_three" color="GRAY">
        Dados necessarios para criação do seu plano personalizado
      </Text>
      <Container>
        {Diets.map(diet => (
          <Button
            key={diet}
            width="large-311"
            bold={diet === selectedDiet ? true : false}
            style={{
              borderColor: selectedDiet === diet ? '#001eff' : 'transparent',
              marginBottom: 25,
              borderWidth: 2,
            }}
            title={diet}
            variant="secondary"
            onPress={() => setSelectedDiet(diet)}
          />
        ))}
      </Container>
      <ButtomWrapper>
        <Button
          title="Passo anterior"
          variant="secondary"
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Goal')
          }
        />
        <Button
          title="Proximo passo"
          onPress={() => navigation.navigate('Foods')}
        />
      </ButtomWrapper>
    </Content>
  );
}
