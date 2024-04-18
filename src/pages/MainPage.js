import React from "react";
import Counter from "../components/Counter";
import CounterReducer from "../components/CounterReducer";
import InputReducer from "../components/InputReducer";
import CounterUst from "../components/CounterUst";

const MainPage = () => {
  return (
    <div>
      <h1>Hooks study</h1>
      <div>
        <h2>useState</h2>
        <h3>예시: 카운터앱</h3>
        <CounterUst />
      </div>
      <div>
        <h2>useEffect</h2>
        <h3>예시: 카운터앱</h3>
        <Counter />
      </div>
      <div>
        <h2>useReducer</h2>
        <h3>예시: input 상태 관리하기</h3>
        <CounterReducer />
      </div>
      <div>
        <h3>예시: input 상태 관리하기</h3>
        <InputReducer />
      </div>
    </div>
  );
};

export default MainPage;
