import { RootStackParamList } from '@/screens/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ScreenProps<ScreenName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  ScreenName
>;
