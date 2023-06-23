const fontFamily = 'Pretendard-Regular';
const fontSizeXS = 12;
const fontSizeXXS = 10;
const fontSizeSmall = 14;
const letterSpacing = 0;
const lineHeight = 1.0; //100%
const textDecoration = 'underline';

const caption = {
  Small: {
    fontFamily: fontFamily,
    fontSize: fontSizeSmall,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeSmall}px`,
    textDecorationLine: textDecoration,
  },
  XS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXS,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeXS}px`,
    textDecorationLine: textDecoration,
  },
  XXS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXS,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeXXS}px`,
    textDecorationLine: textDecoration,
  },
};

export default caption;
