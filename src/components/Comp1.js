import React from 'react';
import { useToggle } from '../customHooks/useToggle';
function Comp1() {
  let [myval, f1] = useToggle('true');
  return (
    <>
      <input value="zx" type="checkbox" onChange={f1} />

      {myval && <h2>comp1 val</h2>}
    </>

    // <h1>hello</h1>
  );
}

export default Comp1;
