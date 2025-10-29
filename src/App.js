import logo from './logo.svg';
import './App.css';
import MoveDiv from "./components/moveDiv"
import { useState } from "react"
function App() {
  const [text, setText] = useState("i am a")

  return (
    <div className="App tab-choose ">
      <MoveDiv >

      </MoveDiv>
    </div>
  );
}

export default App;
