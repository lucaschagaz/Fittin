import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  width: 90%;
  /* background-color: aquamarine; */
  align-items: center;
  /* justify-content: center; */
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
  margin: 0px 5px;
  align-items: center;
  justify-content: center;
`;

export const Pin = styled.View`
  width: 3.5px;
  background-color: '#001eff';
  border-radius: 10px;
`;
export const MeasurementsValue = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const AgeBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 100px;
  margin: 5px 0px;
`;
export const ButtomWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SearchFoodInput = styled.TextInput`
  width: 100%;
  padding: 0px 20px;
  height: 50px;
  border-radius: 30px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  margin-top: 20px;
  font-size: 20px;
`;
