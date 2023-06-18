import React, { useState } from 'react';
import styled from 'styled-components/native';
import { InputAuth } from '@/components/inputs';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { globalColor, paragraph, light, label } from '@/assets/themes';
import { ButtonCheckbox, ButtonMain, ButtonText } from '@/components/buttons';

const SignUpScreen = () => {
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [isPasswordConfirmActive, setIsPasswordConfirmActive] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StContainer>
        <StInputsContainer>
          <StInputContainer>
            <InputAuth
              style={paragraph.Small}
              placeholder="이메일을 입력해 주세요."
              isActive={isEmailActive}
              onFocus={() => setIsEmailActive(true)}
              onBlur={() => setIsEmailActive(false)}
            />
            <StInputInfoText>*이메일 형식이 올바르지 않습니다.</StInputInfoText>
          </StInputContainer>
          <StInputContainer>
            <InputAuth
              style={paragraph.Small}
              placeholder="비밀번호를 입력해 주세요."
              isActive={isPasswordActive}
              onFocus={() => setIsPasswordActive(true)}
              onBlur={() => setIsPasswordActive(false)}
            />
            <StInputInfoText>
              *비밀번호는 영문, 숫자, 특수문자 중 2가지 이상 조합 및 8자리 이상이어야 합니다.
            </StInputInfoText>
          </StInputContainer>
          <StInputContainer>
            <InputAuth
              style={paragraph.Small}
              placeholder="비밀번호를 다시 입력해 주세요."
              isActive={isPasswordConfirmActive}
              onFocus={() => setIsPasswordConfirmActive(true)}
              onBlur={() => setIsPasswordConfirmActive(false)}
            />
            <StInputInfoText>*비밀번호가 일치하지 않습니다.</StInputInfoText>
          </StInputContainer>
          <StInfoText>
            가입 시 다른 기기에서도 사용 가능하며,
            {'\n'}
            그룹을 생성하여 데이터를 보관할 수 있습니다.
          </StInfoText>
        </StInputsContainer>
        <View>
          <ButtonCheckbox color="primary" contents="전체 동의" />
          <ButtonCheckbox contents="저는 14세 이상입니다." />
          <ButtonCheckbox contents="[필수] 이용약관 동의" isDetailed={true} />
          <ButtonCheckbox contents="[필수] 개인정보 처리 방침 동의" isDetailed={true} />
        </View>
        <ButtonMain>
          <ButtonText style={label.Small}>확인</ButtonText>
        </ButtonMain>
      </StContainer>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const StContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    gap: 28,
  },
}))`
  flex: 1;
  background-color: ${light.background};
  padding-top: 32px;
`;

const StInputsContainer = styled.View`
  max-width: 312px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StInputContainer = styled.View`
  display: flex;
  gap: 8px;
`;

const StInputInfoText = styled.Text`
  color: ${globalColor.warning};
  ${paragraph.XS}
`;

const StInfoText = styled.Text`
  color: ${globalColor.primary};
  ${paragraph.XS}
`;
