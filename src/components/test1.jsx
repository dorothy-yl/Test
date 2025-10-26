import { useState, React } from "react";
// 函数组件
function Test1() {
  let [obj, setA] = useState({
    a: 123,
  });
  let [show, changeShow] = useState(0);
function showTab(){
if(show == 0){
    return <div>!!!!!!!!!</div>
}else if(show===1){
    return <div>~~~~~~~~</div>
}else {
    return <div>********</div>
}

}
  let b = "i am b";
  setTimeout(()=>{
    changeShow(1)
  },1000)
//   setTimeout(() => {
//     setA({
//       a: 999,
//     });
//   }, 1000);
  return (
    <div>
      <p>{obj.a}</p>
      <p>{b}</p>
      {showTab()}
    </div>
  );
}
export default Test1;
