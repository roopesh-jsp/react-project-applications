import React, { memo, useEffect, useState } from "react";
import Toaster from "./components/Toaster";
import Button from "./components/Button";

const App = memo(() => {
  const [list, setList] = useState([]);
  function handleClick(info) {
    const createdTime = Date.now();
    info = {
      id: createdTime,
      ...info,
      expiry: createdTime + 3000,
    };
    setList((prev) => [...prev, info]);
  }

  return (
    <div className="main">
      <h1>toaster component</h1>
      <div className="btn">
        <Button
          onClick={handleClick}
          info={{
            type: "sucess",
            heading: "done",
            msg: "implemention done",
            duration: 2000,
          }}
        >
          sucess
        </Button>
        <Button
          onClick={handleClick}
          info={{
            type: "failure",
            heading: "failed",
            msg: "try again",
            duration: 2000,
          }}
        >
          failure
        </Button>
        {/* <Button>info</Button> */}
      </div>
      <Toaster toasts={list} setToast={setList} />
    </div>
  );
});
export default App;
