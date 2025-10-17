import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronRightSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.5 19L15.5 12L8.5 5"
      stroke="#756EF3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChevronRightSVG;
