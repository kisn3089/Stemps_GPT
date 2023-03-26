import React, { CSSProperties, useMemo } from 'react';
import { StyledInput } from './styles';

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  width: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  backgroundColor?: string;
  placeholder?: string;
  customStyle?: CSSProperties;
  ref: React.RefObject<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, IInput>(
  (
    {
      width,
      height,
      type,
      fontSize,
      fontWeight,
      border,
      backgroundColor,
      customStyle,
      placeholder,
    }: IInput,
    ref
  ) => {
    const style = useMemo(() => {
      return {
        width,
        height,
        fontSize,
        fontWeight,
        border,
        backgroundColor,
        ...customStyle,
      };
    }, [fontSize, fontWeight, border]);
    return (
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        style={style}
      />
    );
  }
);

export default React.memo(Input);
