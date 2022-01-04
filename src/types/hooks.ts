export interface MultipleInputs {
  inputs: string[];
  onChange: (index: number, text: string) => void;
  add: () => void;
  remove: (index: number) => void;
}
