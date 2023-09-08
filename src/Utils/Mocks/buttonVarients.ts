export const variants = {
  primary: {
    backgroundColor: 'PRIMARY',
    color: 'PRIMARY_CONTRAST',
    BorderColor: 'PRIMARY',
    BorderWidht: 0,
  },
  PrimaryLight: {
    backgroundColor: 'GRAY_Light',
    color: 'GRAYDARK',
    BorderColor: 'GRAY',
    BorderWidht: 1,
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'GRAY',
    BorderColor: 'GRAY',
    BorderWidht: 1,
  },
};

export type variantType = (typeof variants)[keyof typeof variants];
