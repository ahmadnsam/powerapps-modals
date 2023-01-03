import { InputTypes } from "../enums/InputTypes";

export type Input = {
  id: string;
  label: string;
  type?: string;
  multi?: boolean;
  options?: { id: string; label: string }[];
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
};
