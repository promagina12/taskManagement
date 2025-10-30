import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ClockSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Time Circle">
      <G id="Time Circle_2">
        <Path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.89079 21.2505 2.74979 17.1095 2.74979 12.0005C2.74979 6.89149 6.89079 2.75049 11.9998 2.75049C17.1088 2.75049 21.2498 6.89149 21.2498 12.0005Z"
          stroke={props.color ?? "#002055"}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Stroke 3"
          d="M15.4314 14.9429L11.6614 12.6939V7.84689"
          stroke={props.color ?? "#002055"}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default ClockSVG;
