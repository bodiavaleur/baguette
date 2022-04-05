import {useState} from 'react';
import {MultipleInputs} from '~types/hooks';

const DEFAULT_INPUTS = [''];
function useMultipleInputs(customInputs = DEFAULT_INPUTS): MultipleInputs {
  const [inputs, setInputs] = useState<string[]>(customInputs);
  const isEmpty = inputs.filter(Boolean).length === 0;

  const onChange = (index: number, text: string) => {
    const prevInputs = [...inputs];
    prevInputs[index] = text;
    setInputs(prevInputs);
  };

  const add = () => {
    setInputs([...inputs, '']);
  };

  const remove = (index: number) => {
    const newInputs = inputs.filter((_, idx) => idx !== index);
    setInputs(newInputs);
  };

  const clear = () => {
    setInputs(DEFAULT_INPUTS);
  };

  return {inputs, isEmpty, onChange, add, remove, clear};
}

export default useMultipleInputs;
