import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const AddSquareSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Plus">
      <G id="Plus_2">
        <Path
          id="Line_185"
          d="M12 8.32733V15.6537"
          stroke="#002055"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Line_186"
          d="M15.6667 11.9905H8.33334"
          stroke="#002055"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Path"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
          stroke="#002055"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default AddSquareSVG;
