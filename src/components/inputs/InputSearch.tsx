import React from 'react';
import { Keyboard, Platform, Pressable } from 'react-native';
import { light, paragraph } from '@/assets/themes';
import styled from 'styled-components/native';
import { IconSearch } from '@/assets/icons';

interface InputSearchProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void;
  onPress: () => void;
}
const InputSearch = ({ value, onChangeText, onPress }: InputSearchProps) => {
  const onPressSearchButtonHandler = () => {
    onPress();
    Keyboard.dismiss();
  };

  return (
    <StInputContainer>
      <StInput
        placeholder="장소를 검색해보세요."
        value={value}
        onChangeText={onChangeText}
        maxLength={20}
      />
      <Pressable onPress={onPressSearchButtonHandler}>
        <IconSearch />
      </Pressable>
    </StInputContainer>
  );
};

export default InputSearch;

const StInputContainer = styled.View`
  flex-direction: row;
  width: 312px;
  height: 40px;
  border-radius: 4px;
  padding: 9px 11px 9px 12px;
  background-color: ${light.backgroundSub};
  align-items: center;
`;

const StInput = styled.TextInput.attrs({ placeholderTextColor: light.contents.contentThird })`
  height: 22px;
  color: ${light.contents.contentMain};
  ${paragraph.Small};
  padding: 0;
  line-height: ${Platform.OS === 'ios' ? 0 : paragraph.Small.lineHeight};
  flex-grow: 1;
  margin-right: 11px;
`;
