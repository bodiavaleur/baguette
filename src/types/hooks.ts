export interface MultipleInputs {
  inputs: string[];
  isEmpty: boolean;
  onChange: (index: number, text: string) => void;
  add: () => void;
  remove: (index: number) => void;
  clear: () => void;
}
