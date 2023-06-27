import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ButtonAssist, ButtonMain } from '@/components/buttons';
import { InputAuth } from '@/components/inputs';
import { globalColor, light } from '@/assets/themes';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { signIn } from '@/apis/auth';
import { useSetRecoilState } from 'recoil';
import { userInfo } from '@/states/userState';
import { CustomError, ScreenProps, UserInfo } from '@/types';

const SignInScreen = ({ navigation }: ScreenProps<'SignInScreen'>) => {
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [userEmail, setuserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const setUserInfo = useSetRecoilState(userInfo);

  const signInHandler = async () => {
    try {
      if (!userEmail) {
        setErrorMessage('이메일을 입력해 주세요.');
        return;
      }
      if (!/^[a-z0-9-_.]+@[a-z]+\.[a-z]{2,3}$/.test(userEmail)) {
        setErrorMessage('이메일 형식이 올바르지 않습니다.');
        return;
      }
      if (!password) {
        setErrorMessage('비밀번호를 입력해 주세요.');
        return;
      }
      const response = await signIn({ email: userEmail, password: password });
      const { email, nickname } = response.data.data as UserInfo;
      setUserInfo({
        email: email,
        nickname: nickname,
      });
      navigation.navigate('MainPlanScreen');
    } catch (error: unknown) {
      const customError = error as CustomError;
      const errorCode = customError?.response?.data?.error?.code;
      const errorMessage = customError?.response?.data?.error?.message ?? error;
      if (errorCode === 'LOGIN_FAILURE') {
        setErrorMessage(`${errorMessage}`);
      } else {
        Alert.alert(`${errorMessage}`);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StContainer>
        <StInputContainer>
          <InputAuth
            placeholder="이메일"
            isActive={emailActive}
            onFocus={() => setEmailActive(true)}
            onBlur={() => setEmailActive(false)}
            onChangeText={(email) => setuserEmail(email)}
          />
          <InputAuth
            placeholder="비밀번호"
            secureTextEntry={true}
            isActive={passwordActive}
            value={password}
            onFocus={() => setPasswordActive(true)}
            onBlur={() => setPasswordActive(false)}
            onChangeText={(password) => setPassword(password)}
          />
          {errorMessage ? <StErrorMessage>{errorMessage}</StErrorMessage> : null}
        </StInputContainer>
        <ButtonMain
          buttonState="ActivePrimary"
          width={312}
          style={{ marginTop: 28, marginBottom: 16 }}
          onPress={signInHandler}
        >
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

const StErrorMessage = styled.Text`
  color: ${globalColor.warning};
`;
export default SignInScreen;
