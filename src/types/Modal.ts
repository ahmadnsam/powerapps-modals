export type Modal = {
  icon: string;
  labels: { text: string; type: string }[];
  inputs: { id: string; label: string }[];
  buttons: { id: string; label: string; type: string }[];
};
