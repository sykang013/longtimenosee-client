import React from 'react';
import styled from 'styled-components/native';
// import { light } from '@/assets/themes';
import { ButtonMain } from '@/components/buttons';
import { CommonLNBText } from '@/components/common';
import { ButtonCard } from '@/components/buttons';

const CreateStartScreen = () => {
  return (
    <StContainer>
      <CommonLNBText></CommonLNBText>
      <StBodyContainer>
        <ButtonCard contentsMain="약속" contentsSub="일회성 약속에 적합합니다."></ButtonCard>
        <ButtonCard
          // color="pink"
          contentsMain="그룹"
          contentsSub="정기적 모임에 적합합니다."
        ></ButtonCard>
      </StBodyContainer>
      <StBottomContainer>
        <ButtonMain buttonState="ActivePrimary" width={328}>
          다음
        </ButtonMain>
      </StBottomContainer>
    </StContainer>
  );
};

const StContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 40px;
  gap: 28px;
`;

const StBodyContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const StBottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 200px;
  align-items: center;
  padding: 8px;
  flex: 1;
  justify-content: flex-end;
  background-color: teal;
`;

export default CreateStartScreen;
