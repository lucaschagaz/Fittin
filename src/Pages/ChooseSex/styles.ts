import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 125px;
`;

export const ButtonImage = styled.TouchableOpacity`
  margin: 0px 10px;
  width: 125px;
  height: 125px;
  border-radius: 125px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-width: 4px;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;
