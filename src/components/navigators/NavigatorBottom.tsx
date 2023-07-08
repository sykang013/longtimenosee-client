import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { globalColor } from '@/assets/themes';
import { NavigatorTop } from '@/components/navigators';
import { horizontalScale, verticalScale } from '@/utils/metric';
import {
  IconChat,
  IconCreate,
  IconHamburger,
  IconHome,
  IconNotification,
  IconProfile,
  IconSearch,
} from '@/assets/icons';

export type RootTabParamList = {
  HomeScreen: undefined;
  NotificationScreen: undefined;
  AddScreen: undefined;
  ChatScreen: undefined;
  MyInfoScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Screen1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NotificationScreen</Text>
    </View>
  );
};
const Screen2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AddScreen</Text>
    </View>
  );
};
const Screen3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ChatScreen</Text>
    </View>
  );
};
const Screen4 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyInfoScreen</Text>
    </View>
  );
};
const NavigatorBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          height: verticalScale(52),
        },
        tabBarItemStyle: {
          marginBottom: verticalScale(5),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={NavigatorTop}
        options={{
          tabBarIcon: ({ focused }) => <IconHome focused={focused} />,
          tabBarLabel: '홈',
          title: '언제어디',
          headerTintColor: globalColor.primary,
          headerTitleStyle: {
            fontFamily: 'GmarketSansMedium',
            letterSpacing: -0.5,
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: horizontalScale(80),
                height: verticalScale(40),
              }}
            >
              <IconSearch />
              <IconHamburger />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={Screen1}
        options={{
          tabBarIcon: ({ focused }) => <IconNotification focused={focused} />,
          tabBarLabel: '알림',
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={Screen2}
        options={{
          tabBarIcon: ({ focused }) => <IconCreate focused={focused} />,
          tabBarLabel: '',
          tabBarItemStyle: {
            marginTop: verticalScale(12),
          },
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={Screen3}
        options={{
          tabBarIcon: ({ focused }) => <IconChat focused={focused} />,
          tabBarLabel: '채팅',
        }}
      />
      <Tab.Screen
        name="MyInfoScreen"
        component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => <IconProfile focused={focused} />,
          tabBarLabel: '내정보',
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigatorBottom;
