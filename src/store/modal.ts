import create from "zustand";
import { ModalState } from "../types/modalstate";
import { ObjectMap } from "../types/ObjectMap";

const useModalStore = create<ModalState>((set, get) => ({
  inputs: {} as ObjectMap,
  set: (key: string, value: any) => {
    let _obj = get().inputs;
    _obj[key] = value;
    set({
      inputs: _obj,
    });
  },
}));

export default useModalStore;
