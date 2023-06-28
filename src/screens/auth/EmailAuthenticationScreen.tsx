import React from 'react';
import styled from 'styled-components/native';
import { light, paragraph } from '@/assets/themes';
import { ButtonMain } from '@/components/buttons';
import { Alert } from 'react-native';
import { CustomError } from '@/types/error';
import { verifyUser } from '@/apis/auth';
import { ScreenProps } from '@/types';

const EmailAuthenticationScreen = ({
  navigation,
  route,
}: ScreenProps<'EmailAuthenticationScreen'>) => {
  const verifyUserHandler = async () => {
    try {
      await verifyUser({ email: route.params.email });
      navigation.navigate('CreateProfileScreen');
    } catch (error) {
      const message = (error as CustomError).response?.data?.error?.message ?? error;
      Alert.alert('에러', `${message}`, [{ text: '확인' }]);
    }
  };

  return (
    <StContainer>
      <StText>
        인증 메일이 {route.params.email}으로 전송되었습니다. 이메일의 링크를 클릭하신 후,{'\n'}{' '}
        하단의 &#39;인증하기&#39; 버튼을 눌러주세요.
      </StText>
      <ButtonMain buttonState="ActivePrimary" width={312} onPress={verifyUserHandler}>
        인증하기
      </ButtonMain>
    </StContainer>
  );
};

export default EmailAuthenticationScreen;

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
