import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AuthScreen,
  SignInScreen,
  SignUpScreen,
  EmailAuthenticationScreen,
  KakaoWebViewScreen,
  CreateProfileScreen,
  CreateStartScreen,
  PlanWriteTitleScreen,
  PlanWriteIntroductionScreen,
  PlanSetDateRangeScreen,
} from '@/screens/index';
import { heading, light } from '@/assets/themes';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { userSignedIn, userInfo } from '@/states/userState';
import { NavigatorBottom } from '@/components/navigators';

export type RootStackParamList = {
  AuthScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  EmailAuthenticationScreen: undefined;
  CreateProfileScreen: undefined;
  MainScreen: undefined;
  KakaoWebViewScreen: undefined;
  CreateStartScreen: undefined;
  PlanWriteTitleScreen: undefined;
  PlanWriteIntroductionScreen: undefined;
  PlanSetDateRangeScreen: undefined;
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
  const { is_profile } = useRecoilValue(userInfo);

  return (
    <Stack.Navigator initialRouteName="PlanSetDateRangeScreen">
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
            name="KakaoWebViewScreen"
            component={KakaoWebViewScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : is_profile ? (
        <Stack.Screen
          name="MainScreen"
          component={NavigatorBottom}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
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
      )}
      <Stack.Screen
        name="CreateStartScreen"
        component={CreateStartScreen}
        options={{
          title: '만들기',
          headerTitleAlign: 'center',
          headerTintColor: light.contents.contentMain,
          headerTitleStyle: heading.Small,
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="PlanWriteTitleScreen"
        component={PlanWriteTitleScreen}
        options={{
          title: '약속만들기',
          headerTitleAlign: 'center',
          headerTintColor: light.contents.contentMain,
          headerTitleStyle: heading.Small,
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="PlanWriteIntroductionScreen"
        component={PlanWriteIntroductionScreen}
        options={{
          title: '약속만들기',
          headerTitleAlign: 'center',
          headerTintColor: light.contents.contentMain,
          headerTitleStyle: heading.Small,
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="PlanSetDateRangeScreen"
        component={PlanSetDateRangeScreen}
        options={{
          title: '캘린더 요호호',
          headerTitleAlign: 'center',
          headerTintColor: light.contents.contentMain,
          headerTitleStyle: heading.Small,
          headerShadowVisible: true,
        }}
      />
      {/* 다른 화면들을 여기에 추가할 수 있습니다. */}
    </Stack.Navigator>
  );
};

export default Navigation;
