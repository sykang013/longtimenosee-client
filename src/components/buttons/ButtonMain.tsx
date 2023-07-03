import React, { ReactNode } from 'react';
import { PressableProps, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { label, light, globalColor } from '@/assets/themes';
interface ButtonMainProps extends PressableProps {
  buttonState?: 'InActivePrimary' | 'ActivePrimary' | 'Line' | 'BW';
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  onPress?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  children?: ReactNode;
  textColor?: string;
}

interface ButtonTextProps extends TextProps {
  textColor?: string;
}

const ButtonMain = ({
  buttonState,
  backgroundColor,
  width = 328,
  height = 44,
  borderRadius = 4,
  onPress,
  children = '텍스트',
  textColor,
  disabled = false,
  ...rest
}: ButtonMainProps) => {
  switch (buttonState) {
    case 'InActivePrimary':
      backgroundColor = globalColor.blue[200];
      textColor = light.background;
      disabled = true;
      break;
    case 'ActivePrimary':
      backgroundColor = globalColor.primary;
      textColor = light.background;
      break;
    case 'Line':
      backgroundColor = light.background;
      textColor = light.contents.contentMain;
      break;
    case 'BW':
      backgroundColor = light.contents.contentMain;
      textColor = light.background;
      break;
    default:
      backgroundColor = globalColor.primary;
      textColor = light.background;
      break;
  }
  return (
    <StButton
      buttonState={buttonState}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      onPress={onPress}
      disabled={disabled}
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
