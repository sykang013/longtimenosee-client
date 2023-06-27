import React from 'react'; // import, export를 이용한 ESmodule 사용. 리액트 불러오기
import styled from 'styled-components/native'; //
import { light, paragraph } from '@/assets/themes';
import { ButtonMain } from '@/components/buttons';
import { CommonLNBText } from '@/components/common';

const CreateStartScreen = () => {
  return (
    <StContainer>
      <CommonLNBText></CommonLNBText>
      <StText>이것은 테스트화면입니다. 약속 만들기 버튼을 표시할 거에요.</StText>
      <ButtonMain buttonState="ActivePrimary" width={312}>
        인증하기
      </ButtonMain>
    </StContainer>
  );
};

const StContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 40px;
  gap: 28px;
  background-color: ${light.background};
`;

const StText = styled.Text`
  color: ${light.contents.contentMain};
  ${paragraph.Small};
  width: 312px;
  text-align: center;
`;

export default CreateStartScreen;
