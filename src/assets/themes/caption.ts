import { StyleSheet } from 'react-native';

const fontFamily = 'Pretendard-Regular';
const fontSizeXS = 12;
const fontSizeXXS = 10;
const letterSpacing = 0;
const lineHeight = 1.0; //100%
const textDecoration = 'underline';

const caption = StyleSheet.create({
  XS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXS,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXS,
    textDecorationLine: textDecoration,
  },
  XXS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXS,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXXS,
    textDecorationLine: textDecoration,
  },
});

export default caption;
