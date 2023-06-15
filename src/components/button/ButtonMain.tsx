import React from 'react';
import { PressableProps } from 'react-native';
import styled from 'styled-components/native';
import globalColor from '@/assets/themes/globalColor';

interface ButtonMainProps extends PressableProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  onPress?: () => void;
}

const ButtonMain = ({
  backgroundColor = globalColor.primary,
  width = 312,
  height = 40,
  borderRadius = 4,
  onPress,
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
    ></StButton>
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

export default ButtonMain;
