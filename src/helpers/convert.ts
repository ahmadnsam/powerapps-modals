import { ButtonTypes } from "../enums/ButtonTypes";
import { IconTypes } from "../enums/IconTypes";
import { InputTypes } from "../enums/InputTypes";
import { LabelTypes } from "../enums/LabelTypes";

export class ConvertHelper {
  static getIconType = (type: string) => {
    switch (type) {
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
      default:
        return LabelTypes.H2;
    }
  };
  static getButtonType = (type: string) => {
    switch (type) {
      case "blue":
        return ButtonTypes.Blue;
      case "red":
        return ButtonTypes.Red;
      default:
        return ButtonTypes.White;
    }
  };
  static getInputType = (type?: string) => {
    switch (type) {
      case "radio":
        return InputTypes.Radio;
      case "choice":
        return InputTypes.DropDown;
    }
    return InputTypes.Text;
  };
}
