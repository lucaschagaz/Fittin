import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: 10px 0px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_CONTRAST};
`;

export const ProfileItem = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  /* border-end-start-radius: 10px; */
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 0px 10px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_CONTRAST};
  flex-direction: row;
`;

export const NameBox = styled.View`
  margin-top: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Box = styled.View`
  width: 100%;
  padding: 10px 0px;
  align-items: center;
`;
