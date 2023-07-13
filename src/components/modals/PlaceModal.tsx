import React from 'react';
import { light } from '@/assets/themes';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import PlaceModalDescription from '@/components/modals/PlaceModalDescription';
import { InputSearch } from '@/components/inputs';
import PlaceItem from '@/components/modals/PlaceItem';
import { IconClose } from '@/assets/icons';

interface PlaceModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

const PlaceModal = ({ isVisible, closeModal }: PlaceModalProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Modal isVisible={isVisible} backdropColor={light.dim} style={{ margin: 0 }}>
        <StModalContainer>
          <StPlaceModalContainer>
            <StCloseInputContainer>
              <StClose>
                <Pressable onPress={closeModal}>
                  <IconClose />
                </Pressable>
              </StClose>
              <InputSearch />
            </StCloseInputContainer>
            <PlaceModalDescription />
            <PlaceItem />
            <PlaceItem />
            <PlaceItem />
          </StPlaceModalContainer>
        </StModalContainer>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default PlaceModal;

const StModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const StPlaceModalContainer = styled.View`
  height: 550px;
  align-items: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${light.background};
`;

const StCloseInputContainer = styled.View`
  width: 100%;
  padding: 8px 8px 24px 8px;
  gap: 24px;
  align-items: center;
`;

const StClose = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: flex-end;
  padding-right: 13px;
`;
