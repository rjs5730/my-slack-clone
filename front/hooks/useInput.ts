import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import axios from 'axios';

type ReturnType<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T extends string | number>(initialData: T): ReturnType => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
