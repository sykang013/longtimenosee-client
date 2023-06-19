import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ButtonAssist, ButtonMain, ButtonText } from '@/components/buttons';
import { InputAuth } from '@/components/inputs';
import { label, light, paragraph } from '@/assets/themes';
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
        <ButtonMain style={{ marginTop: 28, marginBottom: 16 }}>
          <ButtonText style={label.Small}>확인</ButtonText>
        </ButtonMain>
        <ButtonAssist title="비밀번호 찾기" />
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
  margin-top: 32px;
`;

export default SignInScreen;
