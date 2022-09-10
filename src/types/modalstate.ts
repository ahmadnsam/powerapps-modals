import { ObjectMap } from "./ObjectMap";

export type ModalState = {
  inputs: ObjectMap;
  set: (key: string, value: any) => void;
};
