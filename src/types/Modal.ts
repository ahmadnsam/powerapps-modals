import { Input } from "./Input";

export type Modal = {
  icon: string;
  labels: { text: string; type: string }[];
  inputs?: Input[];
  buttons: { id: string; label: string; type: string; cancel?: boolean }[];
};
