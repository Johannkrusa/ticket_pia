import { useState } from 'react';

const useDisabled = (initialState = true) => {
  const [isDisabled, setIsDisabled] = useState(initialState);

  const toggleDisabled = () => {
    setIsDisabled((prev) => !prev);
  };

  return [isDisabled, toggleDisabled];
};

export default useDisabled;
