import React from 'react';
import styled from 'styled-components/native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { light } from '@/assets/themes';
import { userInfo, userSignedIn } from '@/states/userState';
import { Alert, Text } from 'react-native';
import { signOut } from '@/apis/auth';
import { ScreenProps } from '@/types';
import { ButtonMain } from '@/components/buttons';

const MainPlanScreen = ({ navigation }: ScreenProps<'MainPlanScreen'>) => {
  const [isUserSignedIn, setUserSignedIn] = useRecoilState(userSignedIn);
  const { email, nickname } = useRecoilValue(userInfo);

  const signOutHandler = async () => {
    try {
      await signOut();
      setUserSignedIn(false);
      navigation.navigate('AuthScreen');
    } catch (error: unknown) {
      Alert.alert('에러!!');
    }
  };

  return (
    <StContainer>
      {isUserSignedIn ? (
        <>
          <Text>이메일: {email}</Text>
          <Text>닉네임: {nickname}</Text>
          <ButtonMain onPress={signOutHandler}>
            <Text>로그아웃</Text>
          </ButtonMain>
        </>
      ) : (
        <Text>로그인 중..</Text>
      )}
    </StContainer>
  );
};

const StContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${light.background};
`;

export default MainPlanScreen;
