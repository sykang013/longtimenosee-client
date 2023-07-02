import React, { useRef } from 'react';
import { API_URL } from '@env';
import WebView, { WebViewMessageEvent, WebViewNavigation } from 'react-native-webview';
import styled from 'styled-components/native';
import { light } from '@/assets/themes';
import { Alert, Dimensions } from 'react-native';
import { ScreenProps, UserInfo } from '@/types';
import { useSetRecoilState } from 'recoil';
import { userInfo } from '@/states/userState';

interface ResponseData {
  success: boolean;
  data: UserInfo;
  error: string;
}

const getScreen = Dimensions.get('window');

const KakaoWebViewScreen = ({ navigation }: ScreenProps<'KakaoWebViewScreen'>) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const webViewRef = useRef<WebView>(null);

  const webViewMessageHandler = (event: WebViewMessageEvent) => {
    const response = JSON.parse(event.nativeEvent.data) as ResponseData;
    if (response.success) {
      const { social_id, nickname }: UserInfo = response.data;
      setUserInfo({ email: social_id, nickname: nickname });
      navigation.navigate('MainPlanScreen');
    } else {
      const error = response.error;
      Alert.alert(error);
    }
  };

  const navigationStateChangeHandler = (navState: WebViewNavigation) => {
    const { url } = navState;
    if (url.includes('/auth/kakao/callback')) {
      webViewRef.current?.injectJavaScript(`
        if (window.ReactNativeWebView) {
          const preElement = document.querySelector('pre');
          if (preElement) {
            preElement.style.color = 'white';
            const jsonText = preElement.innerText;
            const jsonData = JSON.parse(jsonText);
            window.ReactNativeWebView.postMessage(JSON.stringify(jsonData));
          }
        }
      `);
    }
  };

  return (
    <StContainer>
      <StWebView
        ref={webViewRef}
        source={{ uri: `${API_URL}/auth/kakao` }}
        javaScriptEnabled={true}
        onMessage={webViewMessageHandler}
        onNavigationStateChange={navigationStateChangeHandler}
      />
    </StContainer>
  );
};

const StContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${light.background};
`;

const StWebView = styled(WebView)`
  flex: 1;
  width: ${getScreen.width}px;
  height: ${getScreen.height}px;
`;

export default KakaoWebViewScreen;
