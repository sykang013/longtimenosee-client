import React, { useState } from 'react';
import styled from 'styled-components/native';
import { light } from '@/assets/themes';
import { InputProfile } from '@/components/inputs';
import { ButtonMain } from '@/components/buttons';

const MakeProfileScreen = () => {
  const [isNicknameActive, setIsNicknameActive] = useState(false);
  return (
    <StContainer>
      <StProfile></StProfile>
      <InputProfile
        placeholder="닉네임은 최소 두글자 이상이어야 합니다."
        isActive={isNicknameActive}
        onFocus={() => setIsNicknameActive(true)}
        onBlur={() => setIsNicknameActive(false)}
        label="닉네임"
        maxLength={15}
      />
      <ButtonMain buttonState="ActivePrimary" width={312}>
        확인
      </ButtonMain>
    </StContainer>
  );
};

export default MakeProfileScreen;

const StContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 36px;
  gap: 28px;
  background-color: ${light.background};
`;

const StProfile = styled.View.attrs<{ borderRadius: number }>(() => ({
  borderRadius: 100,
}))`
  width: 100px;
  height: 100px;
  background-color: ${light.backgroundSub};
`;
