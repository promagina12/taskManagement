import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PaperPlaneSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      fill={props.color ?? "#444"}
      d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"
    />
  </Svg>
);
export default PaperPlaneSVG;
