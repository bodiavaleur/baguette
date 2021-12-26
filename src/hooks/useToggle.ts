import {useState, useCallback} from 'react';

function useToggle(): [boolean, () => void] {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => setOpen(!open), [open]);

  return [open, toggleOpen];
}

export default useToggle;
