import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ButtonAssist, ButtonMain } from '@/components/buttons';
import { InputAuth } from '@/components/inputs';
import { light } from '@/assets/themes';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const SignInScreen = () => {
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StContainer>
        <StInputContainer>
          <InputAuth
            placeholder="이메일"
            isActive={emailActive}
            onFocus={() => setEmailActive(true)}
            onBlur={() => setEmailActive(false)}
          />
          <InputAuth
            placeholder="비밀번호"
            secureTextEntry={true}
            isActive={passwordActive}
            onFocus={() => setPasswordActive(true)}
            onBlur={() => setPasswordActive(false)}
          />
        </StInputContainer>
        <ButtonMain width={312} style={{ marginTop: 28, marginBottom: 16 }}>
          확인
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
