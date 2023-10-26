import styled from 'styled-components/native';

export const InputConteiner = styled.View`
  width: 100%;
  align-items: center;
`;

export const PassWordConteiner = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0px 15px;
  margin-bottom: 40px;
`;

type ISyqareProps = {
  select?: boolean;
};

export const RemenberContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Square = styled.View<ISyqareProps>`
  height: 12px;
  width: 12px;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${({theme, select}) =>
    select ? theme.COLORS.SUCCESS : 'transparent'};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY};
`;
export const TextConteiner = styled.View`
  width: 90%;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const LoginSocialContainer = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const LoginSocialBox = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const IconLogin = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Line = styled.View`
  width: 70px;
  height: 2px;
  background-color: ${({theme}) => theme.COLORS.GRAY};
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
`;
