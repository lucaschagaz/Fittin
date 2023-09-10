import styled from 'styled-components/native';

export const ImageBackgroud = styled.ImageBackground`
  width: 100%;
  height: 250px;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const WorkoutHomeHeader = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  flex: 1;
`;

export const WorkoutHomeTitle = styled.View`
  padding: 10px;
  width: 100%;
  justify-content: center;
  flex: 1;
`;

export const TagWorkoutInformation = styled.TouchableOpacity`
  height: 30;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_TRANSPARENT};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT};
  border-radius: 15px;
  padding: 0px 10px;
  margin: 0px 5px;
`;
