import { ButtonTypes } from "../enums/ButtonTypes";

export class StyleHelper {
  static getButtonClasses = (type: ButtonTypes) => {
    switch (type) {
      case ButtonTypes.Blue:
        return "border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500  ";
      case ButtonTypes.White:
        return "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500";
      case ButtonTypes.Red:
        return "border-transparent bg-red-600 text-white  hover:bg-red-700 focus:ring-red-500";
    }
  };
  static classNames = (...classes: (string | boolean)[]) => {
    return classes.filter(Boolean).join(" ");
  };
}
