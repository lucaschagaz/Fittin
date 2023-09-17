import 'styled-components';
import {Theme} from './ligth';
declare module 'styled-components' {
  type ThemeType = typeof Theme;
  export interface DefaultTheme extends ThemeType {}
}
