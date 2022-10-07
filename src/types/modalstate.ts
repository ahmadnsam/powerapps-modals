import { Modal } from "./Modal";
import { ObjectMap } from "./ObjectMap";

export type ModalState = {
  inputs: ObjectMap;
  modal: Modal;
  set: (key: string, value: any) => void;
  setModal: (modal: Modal) => void;
  setError: (id: string, isError: boolean) => void;
};
