import React, { useState } from 'react';
import styled from 'styled-components/native';
import { label, light, paragraph } from '@/assets/themes';
import { Platform } from 'react-native';

interface StLabelEndProps {
  isActive: boolean;
  selected?: boolean;
}

interface StInputContainerProps extends StLabelEndProps {
  children?: React.ReactNode;
}

interface InputLineProps {
  placeholder: string;
  label?: string;
  maxLength?: number;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (value: string) => void;
  children?: React.ReactNode;
  editable?: boolean;
  onPress?: () => void;
  labelEnd?: string;
  selected?: boolean;
}

const InputLine = ({
  placeholder,
  label,
  maxLength,
  value,
  onChangeText,
  children,
  editable = true,
  onPress,
  labelEnd,
  selected,
}: InputLineProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StContainer onPress={onPress}>
      <StInputContainer isActive={isActive} selected={selected}>
        {children && <StIconBox>{children}</StIconBox>}
        {label && <StLabel>{label}</StLabel>}
        <StInput
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          editable={editable}
          onPressIn={onPress}
        />
        {labelEnd && (
          <StLabelEnd isActive={isActive} selected={selected}>
            {labelEnd}
          </StLabelEnd>
        )}
      </StInputContainer>
      {maxLength && (
        <StCount>
          {value.length}/{maxLength}
        </StCount>
      )}
    </StContainer>
  );
};

export default InputLine;

const StContainer = styled.Pressable`
  width: 312px;
`;

const StInputContainer = styled.View<StInputContainerProps>`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  padding-top: ${(props) => (props.children ? '8px' : '9px')};
  padding-bottom: ${(props) => (props.children ? '8px' : '9px')};
  border-color: ${(props) =>
    props.isActive || props.selected ? light.contents.contentMain : light.contents.contentThird};
  box-sizing: border-box;
`;

const StLabel = styled.Text`
  width: 60px;
  color: ${light.contents.contentMain};
  vertical-align: middle;
  padding: 0;
  ${paragraph.Small}
`;

const StInput = styled.TextInput.attrs({ placeholderTextColor: light.contents.contentThird })`
  color: ${light.contents.contentMain};
  flex: 1;
  padding: 0;
  ${paragraph.Small};
  line-height: ${Platform.OS === 'ios' ? 0 : paragraph.Small.lineHeight};
`;

const StLabelEnd = styled.Text<StLabelEndProps>`
  color: ${(props) =>
    props.isActive || props.selected ? light.contents.contentMain : light.contents.contentSub};
  ${label.Small};
`;

const StCount = styled.Text`
  margin-top: 4px;
  align-self: flex-end;
  color: ${light.contents.contentSub};
  ${paragraph.XS};
`;

const StIconBox = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;
