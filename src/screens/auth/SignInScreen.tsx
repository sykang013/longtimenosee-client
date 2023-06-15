import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ButtonMain, ButtonText } from '@/components/button';
import { InputAuth } from '@/components/form';
import { caption, label, light, paragraph } from '@/assets/themes';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const SignInScreen = () => {
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StContainer>
        <StInputContainer>
          <InputAuth
            style={paragraph.Small}
            placeholder="이메일"
            isActive={emailActive}
            onFocus={() => setEmailActive(true)}
            onBlur={() => setEmailActive(false)}
          />
          <InputAuth
            style={paragraph.Small}
            placeholder="비밀번호"
            secureTextEntry={true}
            isActive={passwordActive}
            onFocus={() => setPasswordActive(true)}
            onBlur={() => setPasswordActive(false)}
          />
        </StInputContainer>
        <ButtonMain style={{ marginTop: 28 }}>
          <ButtonText style={label.Small}>확인</ButtonText>
        </ButtonMain>
        <StFindPwButton>
          <StFindPwText style={caption.XS}>비밀번호 찾기</StFindPwText>
        </StFindPwButton>
      </StContainer>
    </TouchableWithoutFeedback>
  );
};

const StContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${light.background};
`;

const StInputContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 21px;
`;

const StFindPwButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 10px;
  margin-top: 14px;
`;

const StFindPwText = styled.Text`
  color: ${light.contents.contentMain};
`;

export default SignInScreen;
