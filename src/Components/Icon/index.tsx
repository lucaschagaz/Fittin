import React from 'react';
import {ThemeColors} from '../../Styles/Theme/ligth';
import {LeftArrow} from '../../assets/icons/LeftArrow';
import {RightArrow} from '../../assets/icons/RightArrow';
import {Plus} from '../../assets/icons/Plus';

export interface IIconBaseProps {
  size?: number;
  color?: keyof ThemeColors;
}

interface IIconProps {
  name: IconsNames;
}

export const Icon = ({
  name,
  size = 25,
  color = 'PRIMARY_CONTRAST',
}: IIconBaseProps & IIconProps) => {
  const SvgIcon = icons[name];
  return <SvgIcon size={size} color={color} />;
};

const icons = {
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  plus: Plus,
};

type IconsNames = keyof typeof icons;
