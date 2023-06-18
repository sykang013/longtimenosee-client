import React from 'react';
import styled from 'styled-components/native';
import { paragraph } from '@/assets/themes';
import { View } from 'react-native';

interface ButtonAssistProps {
  title: string;
  onPress?: () => void;
}

const ButtonAssist = ({ title, onPress }: ButtonAssistProps) => {
  return (
    <StButtonAssist onPress={onPress}>
      <View style={{ borderBottomWidth: 1 }}>
        <StText>{title}</StText>
      </View>
    </StButtonAssist>
  );
};

export default ButtonAssist;

const StButtonAssist = styled.Pressable`
  padding: 15px 134.5px;
`;

const StText = styled.Text`
  ${paragraph.Small}
  line-height: 14px;
`;
