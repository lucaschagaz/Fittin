import styled from 'styled-components/native';

export const ContentContainer = styled.View`
  width: 90%;
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
