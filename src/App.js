import logo from "./logo.svg";
import "./App.css";
import SonCounter from "./components/sonCounter";
import TableList from "./components/tableList";
import { useState } from "react";
function App() {
  const [num, setNum] = useState(6);
  const [stoke, setStoke] = useState(0);
  function getAllStock(stoke) {
    setStoke(stoke);
  }
  return (
    <div className="App tab-choose ">
      {num}
      <div>总库存：{stoke}</div>
      <SonCounter num={num} setNum={setNum}></SonCounter>
      <TableList getAllStock={getAllStock}></TableList>
    </div>
  );
}
export default App;
