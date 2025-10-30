import { ImageSourcePropType } from "react-native";

export type theme = {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  borderColor: string;
  textColorSecondary: string;
  onBoarding1?: ImageSourcePropType | undefined;
  onBoarding2?: ImageSourcePropType | undefined;
  onBoarding3?: ImageSourcePropType | undefined;
  chatBox1?: ImageSourcePropType | undefined;
  chatBox2?: ImageSourcePropType | undefined;
  chatBox3?: ImageSourcePropType | undefined;
  chatBox4?: ImageSourcePropType | undefined;
};
