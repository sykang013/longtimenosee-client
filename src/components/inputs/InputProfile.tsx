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
}

const InputProfile = ({ placeholder, isActive, label, maxLength, ...rest }: InputProfileProps) => {
  return (
    <StContainer>
      <StInputContainer isActive={isActive}>
        <StLabel>{label}</StLabel>
        <StInput placeholder={placeholder} {...rest} />
      </StInputContainer>
      <StCount>0/{maxLength}</StCount>
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
  ${paragraph.Small};
`;

const StInput = styled.TextInput`
  padding: 0;
`;

const StCount = styled.Text`
  margin-top: 4px;
  align-self: flex-end;
  color: ${light.contents.contentSub};
  ${paragraph.XS};
`;
