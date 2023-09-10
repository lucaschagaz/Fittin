export const variants = {
  primary: {
    backgroundColor: 'PRIMARY',
    color: 'PRIMARY_CONTRAST',
    BorderColor: 'PRIMARY',
    BorderWidht: 0,
  },
  PrimaryLight: {
    backgroundColor: 'PRIMARY_BLUR',
    color: 'GRAY_Light',
    BorderColor: 'PRIMARY_BLUR',
    BorderWidht: 0,
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'GRAY',
    BorderColor: 'GRAY',
    BorderWidht: 1,
  },
};

export type variantType = (typeof variants)[keyof typeof variants];
