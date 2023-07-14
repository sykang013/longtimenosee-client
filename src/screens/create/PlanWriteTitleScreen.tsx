import React from 'react';
import styled from 'styled-components/native';
import { ButtonMain } from '@/components/buttons';
import { CommonLocalNavigationBarText } from '@/components/commons';
import { light } from '@/assets/themes';
import { ScreenProps } from '@/types';

const PlanWriteTitleScreen = ({ navigation }: ScreenProps<'PlanWriteTitleScreen'>) => {
  return (
    <StContainer>
      <CommonLocalNavigationBarText>약속 제목을 적어보세요.</CommonLocalNavigationBarText>
      <StBodyContainer></StBodyContainer>
      <StBottomContainer>
        <ButtonMain
          buttonState="ActivePrimary"
          width={328}
          onPress={() => navigation.navigate('PlanWriteIntroductionScreen')}
        >
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
  width: 100%;
  height: 90px;
  align-items: center;
  padding-top: 8px;
  flex: 1;
  background-color: ${light.background};
`;

export default PlanWriteTitleScreen;
