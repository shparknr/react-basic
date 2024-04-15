// import React from "react";

// const Main = () => {
//   const title = 리액트;

//   return <div>{{ backgroundColor: "pink", fontsize: "48px", fontweight: 700}
//   </div>;
// };

// export default Main;
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
import styled from "@emotion/styled"; // const StyledTitle = styled 하면 생성됨

const StyledTitle = styled.button`
  background-color: pink;
  font-size: 49px;
  font-weight: bold;
`;

const Main = () => {
  const title = "리액트";

  return <StyledTitle>{title}</StyledTitle>;
};

export default Main;
