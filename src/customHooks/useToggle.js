import { useState } from 'react';

let useToggle = (value) => {
  const [toggle, setToggle] = useState(value);
  console.log('z', value);
  function changeToggle() {
    setToggle((toggle) => !toggle);
  }

  return [toggle, changeToggle];
};

export { useToggle };
