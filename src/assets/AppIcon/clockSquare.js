import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ClockSquareSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Time Square">
      <G id="Time Square_2">
        <Path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3347 2.75018H7.66573C4.64473 2.75018 2.75073 4.88918 2.75073 7.91618V16.0842C2.75073 19.1112 4.63473 21.2502 7.66573 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91618C21.2507 4.88918 19.3647 2.75018 16.3347 2.75018Z"
          stroke="#002055"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Stroke 3"
          d="M15.3912 14.0177L12.0002 11.9947V7.63367"
          stroke="#002055"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default ClockSquareSVG;
