import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { light } from '@/assets/themes';

const IconHamburger = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
        fill={light.contents.contentMain}
      />
    </Svg>
  );
};

export default IconHamburger;
