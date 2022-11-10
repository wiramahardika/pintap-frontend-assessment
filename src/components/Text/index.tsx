import { FC, PropsWithChildren } from "react";
import { TextProps } from "./Text.types";


const Text: FC<PropsWithChildren<TextProps>> = ({
  textElement = 'span',
  children,
  weight,
  color,
  size,
  letterSpacing,
  className,
}) => {
  const TextElement = textElement;

  return (
    <TextElement
      className={[
        color && `text-${color}`,
        weight && `font-${weight}`,
        size && `text-${size}`,
        letterSpacing && `tracking-${letterSpacing}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </TextElement>
  );
};

export default Text;
