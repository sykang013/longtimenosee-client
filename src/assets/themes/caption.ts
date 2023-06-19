import { StyleSheet } from 'react-native';

const fontFamily = 'Pretendard-Regular';
const fontSizeXS = 12;
const fontSizeXXS = 10;
const fontSizeSmall = 14;
const letterSpacing = 0;
const lineHeight = 1.0; //100%
const textDecoration = 'underline';

const caption = StyleSheet.create({
  Small: {
    fontFamily: fontFamily,
    fontSize: fontSizeSmall,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeSmall,
    textDecorationLine: textDecoration,
  },
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
