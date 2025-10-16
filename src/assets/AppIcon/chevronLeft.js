import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronLeftSVG = (props) => (
  <Svg
    width={props.size ?? 20}
    height={props.size ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.9167 15.8333L7.08341 9.99996L12.9167 4.16663"
      stroke={props.color ?? "#002055"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChevronLeftSVG;
