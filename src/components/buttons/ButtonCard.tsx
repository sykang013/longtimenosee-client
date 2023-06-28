import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { light, label, paragraph } from '@/assets/themes';
import CheckWithoutBox from '@/assets/icons/CheckWithoutBox';

const ButtonCard = () => {
  return (
    <StContainer>
      <StTextContainer>
        <StTextMain>Text</StTextMain>
        <StTextSub>TextTextTextText</StTextSub>
      </StTextContainer>
      <CheckWithoutBox></CheckWithoutBox>
    </StContainer>
  );
};

const StContainer = styled.View`
  display: flex;
  width: 328px;
  height: 75px;
  background: ${light.background};
  border-radius: 4px;
  padding: 16px 28px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  background: teal;
`;

const StTextMain = styled.Text<TextProps>`
  ${label.Medium}
`;

const StTextSub = styled.Text<TextProps>`
  ${paragraph.XS}
`;

export default ButtonCard;
