import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const initState = {
  username: "",
  nickname: "",
};

const InputReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const { username, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b> {username}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default InputReducer;
