import React, { useState } from 'react';
import styled from 'styled-components/native';
import { InputAuth } from '@/components/inputs';
import { Alert, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { globalColor, paragraph, light } from '@/assets/themes';
import { ButtonCheckbox, ButtonMain } from '@/components/buttons';
import { signUp } from '@/apis/auth';
import { RootStackParamList } from '../Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CustomError } from '@/types/error';

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUpScreen'>;
};

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [isPasswordConfirmActive, setIsPasswordConfirmActive] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const isEmailValid = /^[a-z0-9-_.]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d@$!%*#?&]{8,20}$/.test(
    password
  );
  const isPasswordConfirmValid = passwordConfirm === password ? true : false;

  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isUseChecked, setIsUseChecked] = useState(false);
  const [isPersonalChecked, setIsPersonalChecked] = useState(false);

  const isAllChecked = isAgeChecked && isUseChecked && isPersonalChecked;
  const toggleIsAllChecked = () => {
    if (isAllChecked) {
      setIsAgeChecked(false);
      setIsUseChecked(false);
      setIsPersonalChecked(false);
    } else {
      setIsAgeChecked(true);
      setIsUseChecked(true);
      setIsPersonalChecked(true);
    }
  };

  const signUpHandler = async () => {
    try {
      await signUp({ email, password });
      navigation.navigate('EmailAuthenticationScreen', { email: email });
    } catch (error) {
      const message = (error as CustomError).response?.data?.error?.message ?? error;
      Alert.alert('에러', `${message}`, [{ text: '확인' }]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StContainer>
        <StInputsContainer>
          <StInputContainer>
            <InputAuth
              placeholder="이메일을 입력해 주세요."
              isActive={isEmailActive}
              onFocus={() => setIsEmailActive(true)}
              onBlur={() => setIsEmailActive(false)}
              value={email}
              onChangeText={(text: string) => setEmail(text)}
            />
            {!isEmailValid && email.length > 0 && (
              <StInputInfoText>*이메일 형식이 올바르지 않습니다.</StInputInfoText>
            )}
          </StInputContainer>
          <StInputContainer>
            <InputAuth
              placeholder="비밀번호를 입력해 주세요."
              isActive={isPasswordActive}
              onFocus={() => setIsPasswordActive(true)}
              onBlur={() => setIsPasswordActive(false)}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              secureTextEntry={true}
              textContentType="oneTimeCode"
            />
            {!isPasswordValid && password.length > 0 && (
              <StInputInfoText>
                *비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상, 20자리 이내여야 합니다.
              </StInputInfoText>
            )}
          </StInputContainer>
          <StInputContainer>
            <InputAuth
              placeholder="비밀번호를 다시 입력해 주세요."
              isActive={isPasswordConfirmActive}
              onFocus={() => setIsPasswordConfirmActive(true)}
              onBlur={() => setIsPasswordConfirmActive(false)}
              value={passwordConfirm}
              onChangeText={(text: string) => setPasswordConfirm(text)}
              secureTextEntry={true}
              textContentType="oneTimeCode"
            />
            {!isPasswordConfirmValid && passwordConfirm.length > 0 && (
              <StInputInfoText>*비밀번호가 일치하지 않습니다.</StInputInfoText>
            )}
          </StInputContainer>
          <StInfoText>
            가입 시 다른 기기에서도 사용 가능하며,
            {'\n'}
            그룹을 생성하여 데이터를 보관할 수 있습니다.
          </StInfoText>
        </StInputsContainer>
        <View>
          <ButtonCheckbox
            color="primary"
            contents="전체 동의"
            isChecked={isAllChecked}
            toggleCheckBox={toggleIsAllChecked}
          />
          <ButtonCheckbox
            contents="저는 14세 이상입니다."
            isChecked={isAgeChecked}
            toggleCheckBox={() => {
              setIsAgeChecked((prev) => !prev);
            }}
          />
          <ButtonCheckbox
            contents="[필수] 이용약관 동의"
            isDetailed={true}
            isChecked={isUseChecked}
            toggleCheckBox={() => {
              setIsUseChecked((prev) => !prev);
            }}
          />
          <ButtonCheckbox
            contents="[필수] 개인정보 처리 방침 동의"
            isDetailed={true}
            isChecked={isPersonalChecked}
            toggleCheckBox={() => {
              setIsPersonalChecked((prev) => !prev);
            }}
          />
        </View>
        <ButtonMain
          buttonState={
            isEmailValid && isPasswordValid && isPasswordConfirmValid && isAllChecked
              ? 'ActivePrimary'
              : 'InActivePrimary'
          }
          disabled={
            isEmailValid && isPasswordValid && isPasswordConfirmValid && isAllChecked ? false : true
          }
          width={312}
          onPress={signUpHandler}
        >
          확인
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
