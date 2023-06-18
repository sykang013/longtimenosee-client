import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RootStackParamList } from '../Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { globalColor, label, light } from '@/assets/themes';
import { ButtonAssist } from '@/components/button';

type AuthScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthScreen'>;
};

const AuthScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <StContainer>
      <StMainTitle>언제어디</StMainTitle>
      <StSubTitle>당신을 위한 약속 도우미</StSubTitle>
      <StButtonContainer>
        <StButtonInnerContainer>
          <StButton>
            <StButtonText style={label.Small}>게스트로 이용</StButtonText>
          </StButton>
          <StButton onPress={() => navigation.navigate('SignInScreen')}>
            <StButtonText style={label.Small}>로그인</StButtonText>
          </StButton>
        </StButtonInnerContainer>
        <StKaKaoButton>
          <Image source={require('@/assets/images/kakao_login.png')} />
        </StKaKaoButton>
        <ButtonAssist onPress={() => navigation.navigate('SignUpScreen')} title="회원가입" />
      </StButtonContainer>
    </StContainer>
  );
};

const StContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${light.background};
`;

const StMainTitle = styled.Text`
  font-family: 'GmarketSansMedium';
  font-weight: 400;
  font-size: 50px;
  margin-top: 227px;
  color: ${globalColor.primary};
`;

const StSubTitle = styled.Text`
  font-family: 'GmarketSansMedium';
  font-weight: 400;
  font-size: 18px;
  color: ${globalColor.primary};
`;

const StButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 187px;
`;

const StButtonInnerContainer = styled.View`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
`;

const StButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 44px;
  border: 1px solid ${light.contents.contentMain};
  border-radius: 4px;
`;

const StButtonText = styled.Text`
  color: ${light.contents.contentMain};
`;

const StKaKaoButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AuthScreen;
