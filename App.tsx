import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '@/screens/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>{<Navigation />}</NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
