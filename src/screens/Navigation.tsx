import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AuthScreen,
  SignInScreen,
  SignUpScreen,
  EmailAuthenticationScreen,
  CreateProfileScreen,
} from '@/screens/index';
import { heading, light } from '@/assets/themes';
import { RecoilRoot, useRecoilState } from 'recoil';
import MainPlanScreen from './plan/MainPlanScreen';
import { userSignedIn } from '@/states/userState';

export type RootStackParamList = {
  AuthScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  EmailAuthenticationScreen: { email: string };
  CreateProfileScreen: undefined;
  MainPlanScreen: undefined;
  // 필요에 따라 다른 화면들을 추가할 수 있습니다.
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  return (
    <RecoilRoot>
      <NavigationContent />
    </RecoilRoot>
  );
};

const NavigationContent = () => {
  const [isUserSignedIn] = useRecoilState(userSignedIn);

  return (
    <Stack.Navigator initialRouteName="AuthScreen">
      {!isUserSignedIn ? (
        <>
          <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
              title: '로그인',
              headerTitleAlign: 'center',
              headerTintColor: light.contents.contentMain,
              headerTitleStyle: heading.Small,
            }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              title: '회원가입',
              headerTitleAlign: 'center',
              headerTintColor: light.contents.contentMain,
              headerTitleStyle: heading.Small,
            }}
          />
          <Stack.Screen
            name="EmailAuthenticationScreen"
            component={EmailAuthenticationScreen}
            options={{
              title: '이메일 인증',
              headerTitleAlign: 'center',
              headerTintColor: light.contents.contentMain,
              headerTitleStyle: heading.Small,
            }}
          />
          <Stack.Screen
            name="CreateProfileScreen"
            component={CreateProfileScreen}
            options={{
              title: '프로필 만들기',
              headerTitleAlign: 'center',
              headerTintColor: light.contents.contentMain,
              headerTitleStyle: heading.Small,
            }}
          />
        </>
      ) : (
        <Stack.Screen name="MainPlanScreen" component={MainPlanScreen} />
      )}
      {/* 다른 화면들을 여기에 추가할 수 있습니다. */}
    </Stack.Navigator>
  );
};

export default Navigation;
