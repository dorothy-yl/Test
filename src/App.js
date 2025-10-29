import logo from "./logo.svg";
import "./App.css";
import MoveDiv from "./components/moveDiv";
import { useState } from "react";
function App() {
  const [text, setText] = useState("i am a");
  const [placeholder1,setPlaceholder1] = useState("请输入账号");
  function moveAction(left, top) {
    setText(left, top);
  }
  function input1(placeholder) {
    return <input placeholder={placeholder} />;
  }
  function input2(placeholder) {
    return <input placeholder={placeholder} />;
  }

  return (
    <div className="App tab-choose ">
      <MoveDiv
        moveAction={moveAction}
        input1={input1}
        input2={input2}
        text={text}
      ></MoveDiv>
    </div>
  );
}

export default App;
