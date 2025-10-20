import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SearchSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={11.7666}
      cy={11.7666}
      r={8.98856}
      stroke="#848A94"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.0183 18.4851L21.5424 22"
      stroke="#848A94"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchSVG;
