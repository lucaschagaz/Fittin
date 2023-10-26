import styled from 'styled-components/native';

export const ImageBackgroud = styled.ImageBackground`
  width: 100%;
  height: 250px;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const WorkoutEmpty = styled.View`
  width: 100%;
  border-radius: 15px;
  height: 200px;
  margin-top: 30px;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-evenly;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_CONTRAST};
`;

export const WorkoutHomeHeader = styled.View`
  width: 100%;
  padding: 10px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const WorkoutHomeTitle = styled.View`
  padding: 5px 10px;
  /* border-radius: 10px; */
  margin-bottom: 15px;
  margin-left: 10px;
  border-bottom-width: 3px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAYDARK};
  /* background-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT}; */
  flex-direction: row;
`;

export const TagWorkoutInformation = styled.TouchableOpacity`
  height: 30px;
  min-width: 90px;
  max-width: 150px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAYDARK};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT};
  border-radius: 15px;
  padding: 0px 10px;
  margin: 5px;
`;
