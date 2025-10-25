// Class组件
import React from "react";
class Test2 extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      a: 111,
      arr: [1, 23, 3],
      obj:{
        obj1:123
      }
    };
  }
  render() {
    setTimeout(() => {
        let _obj = this.state.obj;
        _obj.obj1 = 777;
        this.setState({
          obj:_obj
        });
    },1000);
    return (
      <div>
        <p>{this.state.a}</p>
        <p>{this.state.obj.obj1}</p>
      </div>
    );
  }
}
export default Test2;
