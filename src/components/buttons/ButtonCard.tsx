import React, { useState } from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { light, label, paragraph } from '@/assets/themes';
import CheckWithoutBox from '@/assets/icons/CheckWithoutBox';

interface ButtonCardProps extends TextProps {
  contentsMain: string;
  contentsSub: string;
}

const ButtonCard = ({ contentsMain, contentsSub }: ButtonCardProps) => {
  const [buttonColor, setButtonColor] = useState('basic');

  const changeButtonColor = () => {
    // 현재상태가 basic이랑 같으면 흰색 반환, 아니면 프라이머리 반환
    const newColor = buttonColor === 'basic' ? 'green' : 'blue';
    setButtonColor(newColor);
  };
  return (
    <StContainer onPress={changeButtonColor}>
      <StTextContainer>
        <StTextMain color={buttonColor}>{contentsMain}</StTextMain>
        <StTextSub color={buttonColor}>{contentsSub}</StTextSub>
      </StTextContainer>
      <CheckWithoutBox></CheckWithoutBox>
    </StContainer>
  );
};

const StContainer = styled.Pressable<ButtonCardProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  width: 328px;
  height: 75px;
  border-radius: 4px;
  border: 1px;
  background: ${light.background};
`;

const StTextContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const StTextMain = styled.Text`
  ${label.Medium};
`;

const StTextSub = styled.Text`
  ${paragraph.XS}
`;

export default ButtonCard;
