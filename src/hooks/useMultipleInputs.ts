import {useState} from 'react';
import {MultipleInputs} from '~types/hooks';

function useMultipleInputs(): MultipleInputs {
  const [inputs, setInputs] = useState<string[]>(['']);

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

  return {inputs, onChange, add, remove};
}

export default useMultipleInputs;
