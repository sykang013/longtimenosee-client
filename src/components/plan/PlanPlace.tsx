import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { ButtonSmall } from '@/components/buttons';
import { InputLine } from '@/components/inputs';
import { PlaceModal } from '@/components/modals/place';
import { IconLocationMedium, IconOnline } from '@/assets/icons';
import PlanContainer from './PlanContainer';
import { horizontalScale, verticalScale } from '@/utils/matric';

const PlanPlace = () => {
  const [onlinePlace, setOnlinePlace] = useState('');
  const [offlinePlace, setOfflinePlace] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isOffline, setIsOffline] = useState(true);

  return (
    <PlanContainer navigationBarText="어디서 만나나요?">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StContainer>
          <PlaceModal
            isVisible={isModal}
            closeModal={() => setIsModal(false)}
            changePlaceHandler={(text: string) => setOnlinePlace(text)}
          />
          <StButtonBox>
            <ButtonSmall
              buttonState={isOffline ? 'ActivePrimary' : 'Line'}
              onPress={() => setIsOffline(true)}
            >
              오프라인
            </ButtonSmall>
            <ButtonSmall
              buttonState={!isOffline ? 'ActivePrimary' : 'Line'}
              onPress={() => setIsOffline(false)}
            >
              온라인
            </ButtonSmall>
          </StButtonBox>
          {isOffline && (
            <InputLine
              placeholder="장소를 입력해보세요."
              value={onlinePlace}
              onPress={() => setIsModal(true)}
              editable={false}
            >
              <IconLocationMedium />
            </InputLine>
          )}
          {!isOffline && (
            <InputLine
              placeholder="(선택사항) 링크정보를 입력해보세요."
              value={offlinePlace}
              onChangeText={(text) => setOfflinePlace(text)}
            >
              <IconOnline />
            </InputLine>
          )}
        </StContainer>
      </TouchableWithoutFeedback>
    </PlanContainer>
  );
};

export default PlanPlace;

const StContainer = styled.View`
  flex: 1;
  padding: ${verticalScale(24)}px ${horizontalScale(24)}px 0px ${horizontalScale(24)}px;
`;

const StButtonBox = styled.View`
  flex-direction: row;
  gap: ${horizontalScale(8)}px;
  margin-bottom: ${verticalScale(16)}px;
`;
