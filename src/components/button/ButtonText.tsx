import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { light } from '@/assets/themes';

interface ButtonTextProps extends TextProps {
  textColor?: string;
}

const StButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.textColor};
`;

const ButtonText = ({
  textColor = light.background,
  children = '텍스트',
  ...rest
}: ButtonTextProps) => {
  return (
    <StButtonText textColor={textColor} {...rest}>
      {children}
    </StButtonText>
  );
};

export default ButtonText;
