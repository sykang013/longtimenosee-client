import { light, paragraph } from '@/assets/themes';
import React from 'react';
import styled from 'styled-components/native';

interface PlaceItemProps {
  address_name?: string;
  place_name: string;
  // eslint-disable-next-line no-unused-vars
  selectPlaceHandler: (placeName: string) => void;
}

const PlaceItem = ({ address_name, place_name, selectPlaceHandler }: PlaceItemProps) => {
  return (
    <StPlaceItem onPress={() => selectPlaceHandler(place_name)}>
      <StPlace>{place_name}</StPlace>
      <StAddress>{address_name}</StAddress>
    </StPlaceItem>
  );
};

export default PlaceItem;

const StPlaceItem = styled.Pressable`
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
