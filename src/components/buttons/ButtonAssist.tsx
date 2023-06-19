import React from 'react';
import styled from 'styled-components/native';
import { caption } from '@/assets/themes';

interface ButtonAssistProps {
  title: string;
  onPress?: () => void;
}

const ButtonAssist = ({ title, onPress }: ButtonAssistProps) => {
  return (
    <StButtonAssist onPress={onPress}>
      <StText>{title}</StText>
    </StButtonAssist>
  );
};

export default ButtonAssist;

const StButtonAssist = styled.Pressable`
  padding: 15px 134.5px;
`;

const StText = styled.Text`
  ${caption.Small}
`;
