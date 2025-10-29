import logo from "./logo.svg";
import "./App.css";
import SonCounter from "./components/sonCounter";
import TableList from "./components/tableList";
import { useState } from "react";
function App() {
  const [num, setNum] = useState(6);
  const [stoke, setStoke] = useState(0);
  const [arr1, setArr1] = useState([
    { goodsName: "电脑", stock: 100 },
    { goodsName: "手机", stock: 100 },
    { goodsName: "平板", stock: 100 }
  ]);
  const [arr2, setArr2] = useState([
    { goodsName: "xxx电脑", price: 1200 },
    { goodsName: "yyy手机", price: 1900 },
    { goodsName: "zzz平板", price: 4000 }
  ]);

  function getAllStock() {
    let _allStock=0;
    arr1.forEach(item => {
      _allStock += item.stock;
    });
    return _allStock;
  }
  return (
    <div className="App tab-choose ">
      <div>总库存：{getAllStock()}</div>
      <TableList arr1={arr1} arr2={arr2} setArr1={setArr1} setArr2={setArr2}></TableList>
    </div>
  );
}
export default App;
