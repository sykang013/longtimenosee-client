import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { light } from '@/assets/themes';

interface InputAuthProps extends TextInputProps {
  // style
  width?: number;
  height?: number;
  // input option
  value?: string;
  isActive?: boolean;
  onChangeText?: () => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const StInput = styled.TextInput<InputAuthProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-color: ${(props) =>
    props.isActive ? light.contents.contentMain : light.contents.contentThird};
  border-bottom-width: 1px;
  padding: 0;
  margin: 0;
`;

const InputAuth = ({
  width,
  height,
  placeholder = 'placeholder',
  value,
  isActive = false,
  onChangeText,
  secureTextEntry,
  ...rest
}: InputAuthProps) => {
  return (
    <StInput
      width={width || 312}
      height={height || 40}
      value={value}
      isActive={isActive}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={light.contents.contentThird}
      secureTextEntry={secureTextEntry}
      {...rest}
    />
  );
};

export default InputAuth;
