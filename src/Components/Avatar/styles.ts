import styled from 'styled-components/native';
import {ThemeColors} from '../../Styles/Theme/ligth';

interface IAvatarWrapperProps {
  size?: number;
  borderColor?: keyof ThemeColors;
}

export const Wrapper = styled.TouchableOpacity<IAvatarWrapperProps>`
  width: ${({size}) => (size ? size : 110)}px;
  height: ${({size}) => (size ? size : 110)}px;
  border-radius: ${({size}) => (size ? size : 110)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_CONTRAST};
  margin: 0px 10px;
`;

export const Image = styled.Image<IAvatarWrapperProps>`
  width: ${({size}) => (size ? size : 110)}px;
  height: ${({size}) => (size ? size : 110)}px;
  border-radius: ${({size}) => (size ? size : 110)}px;
`;
