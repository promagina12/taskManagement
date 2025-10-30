import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CheckSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Tick Square">
      <G id="Tick Square_2">
        <Path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3345 2.75018H7.66549C4.64449 2.75018 2.75049 4.88918 2.75049 7.91618V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91618C21.2505 4.88918 19.3645 2.75018 16.3345 2.75018Z"
          stroke={props.color ?? "#002055"}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Stroke 3"
          d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272"
          stroke={props.color ?? "#002055"}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default CheckSVG;
