import React from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import { Icon } from '.';

const Plus = (props: Icon) => {
  return (
    <Svg viewBox="0 0 16 16" width={props.size} height={props.size}>
      {/* <Path fill={props.color} d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /> */}
      <Path
        fill={props.color}
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
      />
      <Line
        x1="98.4828"
        y1="3.51711"
        x2="97.5367"
        y2="196.515"
        stroke="black"
        stroke-width="7"
        stroke-linecap="round"
      />
      <Line
        x1="3.49996"
        y1="96.5024"
        x2="196.5"
        y2="96.5"
        stroke="black"
        stroke-width="7"
        stroke-linecap="round"
      />
    </Svg>
  );
};
export default Plus;
