import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ProfileOutlineSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z"
      stroke={props.color ?? "#848A94"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94782 16.5799 7.40972C16.5799 4.87163 14.5227 2.81448 11.9846 2.81448C9.44655 2.81448 7.38845 4.87163 7.38845 7.40972C7.37988 9.93925 9.42369 11.9973 11.9523 12.0059H11.9846Z"
      stroke={props.color ?? "#848A94"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProfileOutlineSVG;
