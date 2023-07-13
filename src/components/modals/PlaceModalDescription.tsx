import React from 'react';
import styled from 'styled-components/native';
import { light, paragraph } from '@/assets/themes';
import { IconLocationLarge } from '@/assets/icons';

const PlaceModalDescription = () => {
  return (
    <StDescription>
      <IconLocationLarge />
      <StDescriptionText>
        구체적인 장소가 떠오르지 않는다면{'\n'}대략적인 장소를 정해보세요.{'\n'}약속에 응답하는
        친구에게 도움이 됩니다. :&#41;{'\n'}ex&#41; 서울시, 부산시, 마포구, 문래동
      </StDescriptionText>
    </StDescription>
  );
};

export default PlaceModalDescription;

const StDescription = styled.View`
  width: 236px;
  height: 132px;
  justify-content: center;
  align-items: center;
`;

const StDescriptionText = styled.Text`
  margin-top: 12px;
  color: ${light.contents.contentSub};
  text-align: center;
  ${paragraph.Small};
`;
