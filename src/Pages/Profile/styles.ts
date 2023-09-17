import styled from 'styled-components/native';

export const Conteiner = styled.View``;

export const ProfileItem = styled.TouchableOpacity`
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 0px 10px;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const Logout = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 15px 0px;
`;

export const LogoutWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-top-width: 3px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const NameBox = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 15px;
`;
