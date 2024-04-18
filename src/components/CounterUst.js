//Counter.js (useEffect)를 useState 로  바꿔보기

import React, { useState } from "react";

function CounterUst() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value} 입니다.</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
}

export default CounterUst;
