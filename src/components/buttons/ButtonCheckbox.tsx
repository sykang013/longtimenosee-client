import React, { useState } from 'react';
import { TouchableOpacity, Pressable } from 'react-native';
import styled from 'styled-components/native';
import CheckTrue from '@/assets/icons/CheckTrue';
import CheckFalseGray from '@/assets/icons/CheckFalseGray';
import CheckFalsePrimary from '@/assets/icons/CheckFalsePrimary';
import { globalColor, paragraph, light } from '@/assets/themes';

interface StTextProps {
  color?: 'gray' | 'primary';
}

interface ButtonCheckBoxProps extends StTextProps {
  contents: string;
  isDetailed?: boolean;
}

const ButtonCheckbox = ({ color = 'gray', contents, isDetailed = false }: ButtonCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <StButtonCheckboxContainer>
      <StButtonCheckbox>
        <TouchableOpacity activeOpacity={1} onPress={toggleCheckBox}>
          {isChecked && <CheckTrue />}
          {!isChecked && color === 'gray' && <CheckFalseGray />}
          {!isChecked && color === 'primary' && <CheckFalsePrimary />}
        </TouchableOpacity>
        <StText color={color}>{contents}</StText>
      </StButtonCheckbox>
      {isDetailed && (
        <Pressable>
          <StTextDetails>보기</StTextDetails>
        </Pressable>
      )}
    </StButtonCheckboxContainer>
  );
};

export default ButtonCheckbox;

const StButtonCheckboxContainer = styled.View`
  width: 312px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8.5px 3px;
`;

const StButtonCheckbox = styled.View`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const StText = styled.Text<StTextProps>`
  color: ${(props) => (props.color === 'primary' ? globalColor.primary : globalColor.black)};
  ${paragraph.XS};
`;

const StTextDetails = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${light.contents.contentThird};
  color: ${light.contents.contentThird};
  ${paragraph.XS};
`;
