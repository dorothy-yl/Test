// 函数组件
import { useState, useEffect } from "react";

function LifeCircle() {
  const [obj2, setB] = useState({
    b: 3,
  });
  const [obj, setA] = useState({
    a: 1,
  });
  console.log("renders");
  useEffect(() => {
    console.log("effect");
  }, [obj2]);

  //   监听
  function changeObja() {
    setA({
      a: 2,
    });
  }

  function changeObjb() {
    setA({
      b: 666,
    });
  }
  return (
    <div>
      <div> {"a is " + obj.a} </div>
      <div> {"b is " + obj2.b} </div>
      <button onClick={changeObja}>改变a</button>
      <button onClick={changeObjb}>改变b</button>
    </div>
  );
}
export default LifeCircle;
