import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { label, light } from '@/assets/themes';

interface StLNBTextProps extends TextProps {
  textColor?: string;
}

interface CommonLNBTextProps extends StLNBTextProps {
  backgroundColor?: string;
  width?: string;
  height?: number;
}

const CommonLNBText = ({
  width = '100%',
  height = 40,
  backgroundColor = light.background,
  textColor = light.contents.contentMain,
}: CommonLNBTextProps) => {
  return (
    <StCommonLNBText width={width} height={height} backgroundColor={backgroundColor}>
      <StLNBText textColor={textColor}>어떤 것을 만들고 싶으신가요?</StLNBText>
    </StCommonLNBText>
  );
};

const StCommonLNBText = styled.View<CommonLNBTextProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
`;
const StLNBText = styled.Text<StLNBTextProps>`
  color: ${(props) => props.textColor};
  ${label.Medium};
  position: relative;
  left: 5.5%;
  text-align: left;
  top: 4;
`;

export default CommonLNBText;
