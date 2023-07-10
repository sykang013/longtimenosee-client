import React, { useState } from 'react';
// import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { ButtonMain } from '@/components/buttons';
import { CommonLNBText } from '@/components/common';
import { light, label, paragraph, globalColor } from '@/assets/themes';
import CheckWithoutBox from '@/assets/icons/CheckWithoutBox';
import { ScreenProps } from '@/types';

{
  /*interface ButtonCardProps extends TextProps {
  //contentsMain, Sub이란 프롭스의 데이터 타입은 string 이어야 한다.
  contentsMain: string;
  contentsSub: string;
  //onPress 이벤트 핸들러는 옵션값이다.클릭시 onPress prop으로 전달된 콜백함수가 실행됨.
  // onPress?: () => void;
}*/
}

const CreateStartScreen = ({ navigation }: ScreenProps<'CreateStartScreen'>) => {
  const [planSelected, setPlanSelected] = useState(true);
  const selectPlan = () => {
    setPlanSelected(true);
    // console.log(`약속버튼 클릭시 ${planSelected}`);
  };
  const selectGroup = () => {
    setPlanSelected(false);
    // console.log(`그룹버튼 클릭시 ${planSelected}`);
  };
  return (
    <StContainer>
      <CommonLNBText>어떤 것을 만들고 싶으신가요?</CommonLNBText>
      <StBodyContainer>
        <StContainer2
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
        </StContainer2>
        <StContainer2
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
        </StContainer2>
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

// ButtonCardComponent 스타일
const StContainer2 = styled.Pressable`
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
export default CreateStartScreen;
