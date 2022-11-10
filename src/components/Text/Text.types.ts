import Colors from "../../types/colors.types";

export type TextProps = {
  textElement?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  weight?: 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  color?: Colors;
  className?: string;
  size?: 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  letterSpacing?: 'tighter'
    | 'tight'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest'
};
