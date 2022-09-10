import { ButtonTypes } from "../enums/ButtonTypes";
import { IconTypes } from "../enums/IconTypes";
import { LabelTypes } from "../enums/LabelTypes";

export class ConvertHelper {
  static getIconType = (type: string) => {
    switch (type) {
      case "success":
        return IconTypes.Success;
      case "warning":
        return IconTypes.Warning;
      case "error":
        return IconTypes.Error;
      default:
        return IconTypes.Success;
    }
  };
  static getLabelType = (type: string) => {
    switch (type) {
      case "h1":
        return LabelTypes.H1;
      case "h2":
        return LabelTypes.H2;
      default:
        return LabelTypes.H2;
    }
  };
  static getButtonType = (type: string) => {
    switch (type) {
      case "blue":
        return ButtonTypes.Blue;
      case "white":
        return ButtonTypes.White;
      case "red":
        return ButtonTypes.Red;
      default:
        return ButtonTypes.White;
    }
  };
}
