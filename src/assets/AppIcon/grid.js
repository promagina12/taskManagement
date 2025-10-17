import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridSVG = (props) => (
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
      d="M2.5 5.41667C2.5 3.22899 2.52342 2.5 5.41667 2.5C8.30991 2.5 8.33333 3.22899 8.33333 5.41667C8.33333 7.60434 8.34256 8.33333 5.41667 8.33333C2.49077 8.33333 2.5 7.60434 2.5 5.41667Z"
      stroke="#002055"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6666 5.41667C11.6666 3.22899 11.6901 2.5 14.5833 2.5C17.4765 2.5 17.5 3.22899 17.5 5.41667C17.5 7.60434 17.5092 8.33333 14.5833 8.33333C11.6574 8.33333 11.6666 7.60434 11.6666 5.41667Z"
      stroke="#002055"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 14.5833C2.5 12.3956 2.52342 11.6666 5.41667 11.6666C8.30991 11.6666 8.33333 12.3956 8.33333 14.5833C8.33333 16.771 8.34256 17.5 5.41667 17.5C2.49077 17.5 2.5 16.771 2.5 14.5833Z"
      stroke="#002055"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6666 14.5833C11.6666 12.3956 11.6901 11.6666 14.5833 11.6666C17.4765 11.6666 17.5 12.3956 17.5 14.5833C17.5 16.771 17.5092 17.5 14.5833 17.5C11.6574 17.5 11.6666 16.771 11.6666 14.5833Z"
      stroke="#002055"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default GridSVG;
