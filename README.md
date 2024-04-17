# 4. 함수 컴포넌트 이벤트

- 리액트의 이벤트 시스템
  - 카멜케이스 작성 HTML의 onclick 은 onClick
  - 함수 형태의 값을 전달
  - DOM 요소에만 이벤트를 설정할 수 있다.
- 이벤트의 종류
  - 모두 다 사용하지는 않지만 확인만 일단 해두자
  - onClick
  - onChange
  - clipboard
  - composition
  - keyboard
  - focus
  - form
  - mouse
  - selection
  - touch
  - ui
  - wheel
  - media
  - image
  - animation
  - transition

## 4.1. 함수 컴포넌트로 이벤트 핸들링 구현해보기

```js
import React, { useState } from "react";

const Main = () => {
  // username 상태
  const [username, setUsername] = useState("");

  // target : html 태그
  const onChangeUsername = event => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        // event 항목, onChange= {()=>{}}
        onChange={onChangeUsername}
      />
    </div>
  );
};

export default Main;
```

```js
import React, { useState } from "react";

const Main = () => {
  // username 상태
  // const [상태 , 상태업데이트함수] = useState(초기값)
  const [username, setUsername] = useState("");

  const [message, setMessage] = useState("");

  const onChangeMessage = event => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  // target : html 태그
  const onChangeUsername = event => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const onClick = () => {
    alert(`${username}: ${message}`);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        // event 항목, onChange= {()=>{}}
        onChange={onChangeUsername}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보새요"
        value={message}
        onChange={onChangeMessage}
        onKeyUp={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Main;
```

- event.target.name을 사용하는 경우
- input의 갯수가 많아질 것 같으면 event.target.name을 쓰는 것이 더 좋을 수도 있다.
