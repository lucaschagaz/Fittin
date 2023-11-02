import React from 'react';
import {ThemeColors} from '../../Styles/Theme/ligth';
import {LeftArrow} from '../../assets/icons/LeftArrow';
import {RightArrow} from '../../assets/icons/RightArrow';
import {Plus} from '../../assets/icons/Plus';
import {Pressable} from 'react-native';
import {X} from '../../assets/icons/X';

export interface IIconBaseProps {
  size?: number;
  color?: keyof ThemeColors;
}

interface IIconProps extends IIconBaseProps {
  name: IconsNames;
  pressable?: boolean;
  onPress?: () => void;
}

export const Icon = ({
  name,
  size = 25,
  color,
  onPress,
  pressable = false,
}: IIconProps) => {
  const SvgIcon = icons[name];
  if (pressable) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SvgIcon size={size} color={color} />
      </Pressable>
    );
  }
  return <SvgIcon size={size} color={color} />;
};

const icons = {
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  plus: Plus,
  x: X,
};

type IconsNames = keyof typeof icons;
