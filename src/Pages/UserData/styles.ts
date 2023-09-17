import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FoodsWrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  margin-top: 30px;
  gap: 12px;
`;

export const ContentContainer = styled.View`
  width: 90%;
  /* align-items: ; */
`;

export const Box = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Change = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BLACK};
`;

export const PinBox = styled.TouchableOpacity`
  width: 10px;
  height: 160px;
  margin: 0px 3px;
  align-items: center;
  justify-content: center;
`;

export const Pin = styled.View`
  width: 3px;
  /* background-color: '#001eff'; */
  border-radius: 10px;
`;
export const MeasurementsValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AgeBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 120px;
  margin: 5px 0px;
`;
export const ButtomWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const FoodsInput = styled.TextInput`
  width: 100%;
  height: 60px;
  border-radius: 60px;
  padding: 10px;
  margin: 20px 0px 30px 0px;
  background-color: #ddd;
`;
