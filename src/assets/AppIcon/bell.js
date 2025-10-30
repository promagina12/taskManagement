import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BellSVG = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99996 14.873C14.6993 14.873 16.8733 14.2701 17.0833 11.8504C17.0833 9.43229 15.5676 9.58779 15.5676 6.62089C15.5676 4.30341 13.371 1.66663 9.99996 1.66663C6.62894 1.66663 4.43233 4.30341 4.43233 6.62089C4.43233 9.58779 2.91663 9.43229 2.91663 11.8504C3.12742 14.2793 5.30144 14.873 9.99996 14.873Z"
      stroke={props.color ?? "#002055"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9906 17.381C10.8539 18.6432 9.08052 18.6582 7.93286 17.381"
      stroke={props.color ?? "#002055"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BellSVG;
