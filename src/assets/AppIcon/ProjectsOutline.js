import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ProjectsOutlineSVG = (props) => (
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
      d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94988C4.36288 21.4191 2.24988 19.3101 2.24988 15.7321V7.93209C2.24988 4.35909 3.56388 2.25009 7.14288 2.25009H9.14288C9.86088 2.25109 10.5369 2.58809 10.9669 3.16309L11.8799 4.37709C12.3119 4.95109 12.9879 5.28909 13.7059 5.29009H16.5359C20.1229 5.29009 21.4469 7.11609 21.4469 10.7671L21.4189 15.7321Z"
      stroke={props.color ?? "#848A94"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.48096 14.463H16.216"
      stroke={props.color ?? "#848A94"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProjectsOutlineSVG;
