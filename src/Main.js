// import React from "react";

// const Main = () => {
//   const title = "리액트";
//   const style = {
//     { backgroundColor: "pink", fontSize: "48px", fontWeight: "blod"}
//   }
//   return (
//     <div style={}>{title}</div>
//   );
// };

// export default Main;

import React from "react";
import "./react.css";

const Main = props => {
  return (
    <div>
      <h1>안녕하세요, 나는{props.title}입니다.</h1>
    </div>
  );
};

export default Main;
