// InputReducerUst.js
// InputReducer.js userReducer를 useState hook으로 바꿔보기
import React, { useState } from "react";

const InputReducer = () => {
  // username 상태
  const [username, setUsername] = useState("");
  // nickname 상태
  const [nickname, setNickname] = useState("");

  //   username 이벤트 핸들러
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  // userNickname 이벤트 핸들러
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
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
