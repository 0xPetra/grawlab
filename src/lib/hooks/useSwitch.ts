import { useState } from 'react';

const useSwitch = () => {
  const [isVirtual, setVirtual] = useState(true);

  return {isVirtual, setVirtual};
};

export default useSwitch;