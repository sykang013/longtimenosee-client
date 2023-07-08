const fontFamily = 'Pretendard-Regular';
const fontSizeXL = 28.43;
const fontSizeLarge = 21.328;
const fontSizeMedium = 16;
const fontSizeSmall = 14;
const fontSizeXS = 12;
const fontSizeXXS = 10;
const letterSpacing = 0;
const lineHeight = 1.6; // 상대적인 값으로 설정 (예: 1.6은 160%를 의미)

const paragraph = {
  XL: {
    fontFamily: fontFamily,
    fontSize: fontSizeXL,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeXL}px`,
  },
  Large: {
    fontFamily: fontFamily,
    fontSize: fontSizeLarge,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeLarge}px`,
  },
  Medium: {
    fontFamily: fontFamily,
    fontSize: fontSizeMedium,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeMedium}px`,
  },
  Small: {
    fontFamily: fontFamily,
    fontSize: fontSizeSmall,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeSmall}px`,
  },
  XS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXS,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeXS}px`,
  },
  XXS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXS,
    letterSpacing: letterSpacing,
    lineHeight: `${lineHeight * fontSizeXXS}px`,
  },
  inlineXL: {
    fontFamily: fontFamily,
    fontSize: fontSizeXL,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXL,
  },
  inlineLarge: {
    fontFamily: fontFamily,
    fontSize: fontSizeLarge,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeLarge,
  },
  inlineMedium: {
    fontFamily: fontFamily,
    fontSize: fontSizeMedium,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeMedium,
  },
  inlineSmall: {
    fontFamily: fontFamily,
    fontSize: fontSizeSmall,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeSmall,
  },
  inlineXS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXS,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXS,
  },
  inlineXXS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXS,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXXS,
  },
};

export default paragraph;
