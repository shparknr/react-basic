import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    console.log("버튼 작동");
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=455a7a10f2b340229acb7a6f8bc0f201",
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>axios</h2>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          readOnly={true}
          value={JSON.stringify(data, null, 2)}
        />
      )}
    </div>
  );
};
export default Axios;
