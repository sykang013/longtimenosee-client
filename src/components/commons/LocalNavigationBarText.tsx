import React from 'react';
import styled from 'styled-components/native';
import { label, light } from '@/assets/themes';

interface StLocalNavigationBarTextProps {
  textColor?: string;
}

interface LocalNavigationBarTextProps extends StLocalNavigationBarTextProps {
  backgroundColor?: string;
  width?: string;
  height?: number;
  text: string;
}

const LocalNavigationBarText = ({
  width = '100%',
  height = 40,
  backgroundColor = light.background,
  textColor = light.contents.contentMain,
  text,
}: LocalNavigationBarTextProps) => {
  return (
    <StCommonLocalNavigationBarText width={width} height={height} backgroundColor={backgroundColor}>
      <StLocalNavigationBarText textColor={textColor}>{text}</StLocalNavigationBarText>
    </StCommonLocalNavigationBarText>
  );
};

export default LocalNavigationBarText;

const StCommonLocalNavigationBarText = styled.View<Omit<LocalNavigationBarTextProps, 'text'>>`
  display: flex;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  padding: 12px 20px 4px 20px;
  border-bottom-width: 1px;
  border-color: ${light.border.borderSub};
`;

const StLocalNavigationBarText = styled.Text<StLocalNavigationBarTextProps>`
  color: ${(props) => props.textColor};
  ${label.Medium};
`;
