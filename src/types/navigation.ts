import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/screens/Navigation';
import { RootTabParamList } from '@/components/navigators/NavigatorBottom';

export type ScreenProps<ScreenName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  ScreenName
>;

export type TabProps<ScreenName extends keyof RootTabParamList> = NativeStackScreenProps<
  RootTabParamList,
  ScreenName
>;
