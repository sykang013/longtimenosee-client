import { light, paragraph } from '@/assets/themes';
import React from 'react';
import styled from 'styled-components/native';

const PlaceItem = () => {
  return (
    <StPlaceItem>
      <StPlace>장소명</StPlace>
      <StAddress>상세 주소 표기란</StAddress>
    </StPlaceItem>
  );
};

export default PlaceItem;

const StPlaceItem = styled.View`
  width: 100%;
  height: 72px;
  padding: 0 24px;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${light.backgroundSub};
`;

const StPlace = styled.Text`
  color: ${light.contents.contentMain};
  ${paragraph.Small}
`;

const StAddress = styled.Text`
  color: ${light.contents.contentSub};
  ${paragraph.XS};
`;
