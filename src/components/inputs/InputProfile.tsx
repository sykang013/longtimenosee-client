import React from 'react';
import styled from 'styled-components/native';
import { light, paragraph } from '@/assets/themes';

interface StContainerProps {
  isActive: boolean;
}

interface InputProfileProps extends StContainerProps {
  placeholder: string;
  label: string;
  onFocus: () => void;
  onBlur: () => void;
  maxLength: number;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (value: string) => void;
}

const InputProfile = ({
  placeholder,
  isActive,
  label,
  maxLength,
  value,
  onChangeText,
}: InputProfileProps) => {
  return (
    <StContainer>
      <StInputContainer isActive={isActive}>
        <StLabel>{label}</StLabel>
        <StInput
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
        />
      </StInputContainer>
      <StCount>
        {value.length}/{maxLength}
      </StCount>
    </StContainer>
  );
};

export default InputProfile;

const StContainer = styled.View`
  width: 312px;
`;

const StInputContainer = styled.View<StContainerProps>`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  padding: 9px 0;
  border-color: ${(props) =>
    props.isActive ? light.contents.contentMain : light.contents.contentThird};
`;

const StLabel = styled.Text`
  width: 60px;
  color: ${light.contents.contentMain};
  vertical-align: middle;
  padding: 0;
  ${paragraph.Small}
`;

const StInput = styled.TextInput.attrs({ placeholderTextColor: light.contents.contentThird })`
  flex: 1;
  padding: 0;
  ${paragraph.Small};
  line-height: 0;
`;

const StCount = styled.Text`
  margin-top: 4px;
  align-self: flex-end;
  color: ${light.contents.contentSub};
  ${paragraph.XS};
`;
