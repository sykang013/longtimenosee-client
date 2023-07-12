import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ButtonMain } from '@/components/buttons';
import { CommonLNBText } from '@/components/common';
import { light, label, paragraph, globalColor } from '@/assets/themes';
import CheckWithoutBox from '@/assets/icons/CheckWithoutBox';
import { ScreenProps } from '@/types';

const CreateStartScreen = ({ navigation }: ScreenProps<'CreateStartScreen'>) => {
  const [planSelected, setPlanSelected] = useState(true);
  const selectPlan = () => {
    setPlanSelected(true);
  };
  const selectGroup = () => {
    setPlanSelected(false);
  };
  return (
    <StContainer>
      <CommonLNBText>어떤 것을 만들고 싶으신가요?</CommonLNBText>
      <StBodyContainer>
        <StCardContainer>
          <StCard
            onPress={selectPlan}
            style={{ borderColor: planSelected ? globalColor.primary : light.background }}
          >
            <StTextContainer>
              <StTextMain
                style={{ color: planSelected ? globalColor.primary : light.contents.contentMain }}
              >
                약속
              </StTextMain>
              <StTextSub
                style={{ color: planSelected ? globalColor.primary : light.contents.contentMain }}
              >
                일회성 약속에 적합합니다.
              </StTextSub>
            </StTextContainer>
            {planSelected && <CheckWithoutBox />}
          </StCard>
          <StCard
            onPress={selectGroup}
            style={{ borderColor: !planSelected ? globalColor.primary : light.background }}
          >
            <StTextContainer>
              <StTextMain
                style={{ color: !planSelected ? globalColor.primary : light.contents.contentMain }}
              >
                그룹
              </StTextMain>
              <StTextSub
                style={{ color: !planSelected ? globalColor.primary : light.contents.contentMain }}
              >
                정기적 모임에 적합합니다.
              </StTextSub>
            </StTextContainer>
            {!planSelected && <CheckWithoutBox />}
          </StCard>
          <StTextDetail>*그룹은 로그인 회원 기능입니다.</StTextDetail>
        </StCardContainer>
      </StBodyContainer>
      <StBottomContainer>
        <ButtonMain
          buttonState="ActivePrimary"
          width={328}
          onPress={() => navigation.navigate('CreatePlanWriteTitleScreen')}
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
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
`;

const StCardContainer = styled.View`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
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

const StCard = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  width: 328px;
  height: 75px;
  border: 1px;
  border-radius: 4px;
  background: ${light.background};
`;

const StTextContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const StTextMain = styled.Text`
  ${label.Medium};
`;

const StTextSub = styled.Text`
  ${paragraph.XS}
`;

const StTextDetail = styled.Text`
  ${paragraph.XS}
  color : ${light.contents.contentSub};
  width: 100%;
  top: -8px;
`;
export default CreateStartScreen;
