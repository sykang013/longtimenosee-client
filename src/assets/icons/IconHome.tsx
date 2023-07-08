import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { globalColor, light } from '@/assets/themes';

const IconHome = ({ focused }: { focused: boolean }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z"
        fill={focused ? globalColor.primary : light.contents.contentThird}
      />
    </Svg>
  );
};

export default IconHome;
