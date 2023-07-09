import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { label, light } from '@/assets/themes';
import { MainPlanScreen, MainGroupScreen } from '@/screens';

export type RootTabParamList = {
  MainPlanScreen: undefined;
  MainGroupScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

const NavigatorTop = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: light.contents.contentMain,
        tabBarInactiveTintColor: light.contents.contentThird,
        tabBarIndicatorStyle: { backgroundColor: light.contents.contentMain },
        tabBarLabelStyle: label.inlineSmall,
      }}
    >
      <Tab.Screen
        name="MainPlanScreen"
        component={MainPlanScreen}
        options={{ tabBarLabel: '약속보기' }}
      />
      <Tab.Screen
        name="MainGroupScreen"
        component={MainGroupScreen}
        options={{ tabBarLabel: '그룹보기' }}
      />
    </Tab.Navigator>
  );
};

export default NavigatorTop;
