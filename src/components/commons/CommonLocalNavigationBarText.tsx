import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { label, light } from '@/assets/themes';

interface StLocalNavigationBarTextProps extends TextProps {
  textColor?: string;
}

interface CommonLocalNavigationBarTextProps extends StLocalNavigationBarTextProps {
  backgroundColor?: string;
  width?: string;
  height?: number;
  children?: ReactNode;
}

const CommonLocalNavigationBarText = ({
  width = '100%',
  height = 40,
  backgroundColor = light.background,
  textColor = light.contents.contentMain,
  children = '텍스트를 입력해주세요.',
}: CommonLocalNavigationBarTextProps) => {
  return (
    <StCommonLocalNavigationBarText width={width} height={height} backgroundColor={backgroundColor}>
      <StLocalNavigationBarText textColor={textColor}>{children}</StLocalNavigationBarText>
    </StCommonLocalNavigationBarText>
  );
};

const StCommonLocalNavigationBarText = styled.View<CommonLocalNavigationBarTextProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
`;
const StLocalNavigationBarText = styled.Text<StLocalNavigationBarTextProps>`
  color: ${(props) => props.textColor};
  ${label.Medium};
  position: relative;
  left: 5.5%;
  text-align: left;
  top: 4;
`;

export default CommonLocalNavigationBarText;
