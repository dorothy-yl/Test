import { useState, React } from "react";
// 函数组件
function Test1() {
  let [obj, setA] = useState({
    a: 123,
  });
  let [show, changeShow] = useState(false);
function showTab(){
if(show == 0){
    if (show) return <div>!!!!!!!!!</div>
}
}
function changeDiv(num1,num2,event){
    event.stopPropagation()
    let _show = !show
    changeShow(_show)
}

  return (
    <div>
      <p>{obj.a}</p>
      {showTab()}
      <button onClick={changeDiv.bind(this,123.456)}>{show ?'隐藏':'显示'}</button>
    </div>
  );
}
export default Test1;
