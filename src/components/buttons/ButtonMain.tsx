import React, { ReactNode } from 'react';
import { PressableProps, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { label, light, globalColor } from '@/assets/themes';

interface ButtonMainProps extends PressableProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  onPress?: () => void;

  children?: ReactNode;
  textColor?: string;
}

interface ButtonTextProps extends TextProps {
  textColor?: string;
}

const ButtonMain = ({
  backgroundColor = globalColor.primary,
  width = 328,
  height = 44,
  borderRadius = 4,
  onPress,
  children = '텍스트',
  textColor = light.background,
  ...rest
}: ButtonMainProps) => {
  return (
    <StButton
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      onPress={onPress}
      {...rest}
    >
      <StButtonText textColor={textColor}>{children}</StButtonText>
    </StButton>
  );
};

const StButton = styled.Pressable<ButtonMainProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  background-color: ${(props) => props.backgroundColor};
`;

const StButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.textColor};
  ${label.Small};
`;

export default ButtonMain;
