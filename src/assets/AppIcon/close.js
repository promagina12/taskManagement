import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CloseSVG = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.16666 3.33334L17.5 16.6667"
      stroke={props.color ?? "white"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 3.33334L4.16666 16.6667"
      stroke={props.color ?? "white"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CloseSVG;
