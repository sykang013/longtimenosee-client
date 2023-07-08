import React from 'react';
import styled from 'styled-components/native';
import { light, paragraph } from '@/assets/themes';
import { verticalScale } from '@/utils/metric';
import { IconCalendar, IconGroup, IconLocation } from '@/assets/icons';

interface LabelIconDetailProps {
  name: string;
  text: string;
}

const LabelIconDetail = ({ name, text = '텍스트' }: LabelIconDetailProps) => {
  const renderIcon = () => {
    switch (name) {
      case 'calendar':
        return <IconCalendar />;
      case 'group':
        return <IconGroup />;
      case 'location':
        return <IconLocation />;
      default:
        return null;
    }
  };

  return (
    <StContainer>
      {renderIcon()}
      <StText>{text}</StText>
    </StContainer>
  );
};

const StContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  height: ${verticalScale(16)}px;
`;

const StText = styled.Text`
  ${paragraph.XXS};
  color: ${light.contents.contentSub};
`;
export default LabelIconDetail;
