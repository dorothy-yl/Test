import { useState, React } from "react";
// 函数组件
function Test1() {
  let [obj, setA] = useState({
    a: 123,
  });
  let b = "i am b";
  setTimeout(() => {
    setA({
      a: 999,
    });
  }, 1000);
  return (
    <div>
      <p>{obj.a}</p>
      <p>{b}</p>
    </div>
  );
}
export default Test1;
