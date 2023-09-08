import styled from 'styled-components/native';

interface IAvatarWrapperProps {
  width?: number;
  height?: number;
  radius?: number;
  borderColor?: 'GRAY' | 'PRIMARY';
}

export const Wrapper = styled.TouchableOpacity<IAvatarWrapperProps>`
  width: ${({width}) => (width ? width : 110)}px;
  height: ${({height}) => (height ? height : 110)}px;
  border-radius: ${({radius}) => (radius ? radius : 110)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_CONTRAST};
  margin: 0px 10px;
  border-width: 3px;
  border-color: ${({theme, borderColor}) =>
    borderColor ? theme.COLORS[borderColor] : theme.COLORS.GRAY};
`;

export const Image = styled.Image<IAvatarWrapperProps>`
  width: ${({width}) => (width ? width : 110)}px;
  height: ${({height}) => (height ? height : 110)}px;
  border-radius: ${({radius}) => (radius ? radius : 110)}px;
`;
