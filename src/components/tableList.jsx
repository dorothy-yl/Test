// classs 组件
import React from "react";
class TableList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      tabChannel: 0,
      arr1: [
        { goodsName: "电脑", stock: 100 },
        { goodsName: "手机", stock: 100 },
        { goodsName: "平板", stock: 100 },
      ],
      arr2: [
        { goodsName: "xxx电脑", price: 1200 },
        { goodsName: "yyy手机", price: 1900 },
        { goodsName: "zzz平板", price: 4000 },
      ],
    };
  }
  changeTab(num) {
    this.setState({
      tabChannel: num,
    });
  }
  contentOne() {
    let _content = (
      <div>
        {this.state.arr1.map((item) => {
          return (
            <div key={item.goodsName}>
              <span>{item.goodsName}</span>
              <span>{item.stock}</span>
            </div>
          );
        })}
      </div>
    );
    return _content;
  }
  contentTwo() {
    let _content = (
      <div>
        {this.state.arr2.map((item) => {
          return (
            <div key={item.goodsName}>
              <span>{item.goodsName}</span>
              <span>{item.price}</span>
              <span onClick={this.deleteGoods.bind(this, item.goodsName)}>
                删除
              </span>
            </div>
          );
        })}
      </div>
    );
    return _content;
  }
  showContent() {
    return this.state.tabChannel === 0 ? this.contentOne() : this.contentTwo();
  }
  deleteGoods(name) {
    let _arr = [];
    this.state.arr2.forEach((item) => {
      if (item.goodsName !== name) {
        _arr.push(item);
      }
    });
    this.setState({
      arr2: _arr,
    });
  }
  render() {
    return (
      <div>
        <div onClick={this.changeTab.bind(this, 0)}>库存</div>
        <div onClick={this.changeTab.bind(this, 1)}>商品</div>
        <div>{this.showContent()}</div>
      </div>
    );
  }
}
export default TableList;
