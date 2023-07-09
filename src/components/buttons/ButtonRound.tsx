import React from 'react';
import { styled } from 'styled-components/native';
import { globalColor, label, light } from '@/assets/themes';
import { horizontalScale, verticalScale } from '@/utils/metric';

interface StButtonProps {
  isFocused: boolean;
  onPress: () => void;
}

interface ButtonRoundProps {
  text: string;
  isFocused: boolean;
  onPress: () => void;
  disabled?: boolean;
}
const ButtonRound = ({ text, isFocused, onPress, disabled }: ButtonRoundProps) => {
  return (
    <StButton onPress={onPress} isFocused={isFocused} disabled={disabled}>
      <StText isFocused={isFocused}>{text}</StText>
    </StButton>
  );
};

const StButton = styled.Pressable<StButtonProps>`
  justify-content: center;
  height: ${verticalScale(28)}px;
  padding: ${verticalScale(4)}px ${horizontalScale(16)}px;
  border-radius: 50px;
  background-color: ${({ isFocused }) => (isFocused ? globalColor.primary : light.background)};
`;

const StText = styled.Text<StButtonProps>`
  ${label.XS}
  color: ${({ isFocused }) => (isFocused ? light.background : light.contents.contentMain)};
`;
export default ButtonRound;
