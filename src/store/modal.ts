import create from "zustand";
import { Modal } from "../types/Modal";
import { ModalState } from "../types/modalstate";
import { ObjectMap } from "../types/ObjectMap";

const useModalStore = create<ModalState>((set, get) => ({
  inputs: {} as ObjectMap,
  modal: {
    icon: "",
    labels: [],
    inputs: [],
    buttons: [],
  } as Modal,
  set: (key: string, value: any) => {
    let _obj = get().inputs;
    _obj[key] = value;
    set({
      inputs: _obj,
    });
  },
  setModal: (modal: Modal) => {
    set({ modal: modal });
  },
  setError: (id: string, isError: boolean) => {
    let modal = get().modal;
    if (modal.inputs) {
      modal.inputs.filter((x) => x.id === id)[0].error = isError;
      set({ modal: modal });
    }
  },
}));

export default useModalStore;
