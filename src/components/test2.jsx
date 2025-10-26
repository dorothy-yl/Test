// Class组件
import React from "react";
class Test2 extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      a: 111,
      arr: [
        { title: "title1", content: "content1" },
        { title: "title2", content: "content2" },
        { title: "title3", content: "content3" },
      ],
      obj: {
        obj1: 123,
      },
    };
  }
createArrList(){
    let arr = [];
    this.state.arr.forEach((item) => {
      let _itemText =<div key={item.title}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
         arr.push(_itemText);
     });    
     return arr
}

  render() {
    setTimeout(() => {
      let _obj = this.state.obj;
      _obj.obj1 = 777;
      this.setState({
        obj: _obj,
      });
    }, 1000);


    return (
      <div>
        <p>{this.state.a}</p>
        <p>{this.state.obj.obj1}</p>
        {this.createArrList()}
      </div>
    );
  }
}
export default Test2;
