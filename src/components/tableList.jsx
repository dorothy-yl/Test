// 1.表单操作 表示双向绑定
// 2.watch监听
// 3.computed

import React from "react";
import { CSSTransition } from "react-transition-group";
import style from "./tableList.module.css";
import "./transition.css";
class TableList extends React.Component {
  constructor(prop) {
    super(prop);
    this.allLength = 0;
    this.addGoodsPopRef = React.createRef();
    this.state = {
      // 控制添加表单
      addGoodsForm: false,
      // 表单数据
      goodsInfo: {
        goodsName: "",
        stock: 0,
      },

      tabChannel: 0,
  
      addGoodsPop: false,
    };
    this.showGoodsPop = this.showGoodsPop.bind(this);
    this.closeGoodsPop = this.closeGoodsPop.bind(this);
    this.confirmGoods = this.confirmGoods.bind(this);
    this.addGoodsPopConfirm = this.addGoodsPopConfirm.bind(this);
    this.goodsNameChange = this.goodsNameChange.bind(this);
    this.stockChange = this.stockChange.bind(this);
    this.hiddenGoodsPop = this.hiddenGoodsPop.bind(this);
  }

  closeGoodsPop() {
    this.setState({
      addGoodsPop: false,
    });
  }
  confirmGoods() {
    this.setState({
      addGoodsPop: false,
    });
  }
  get allLength() {
    return this.props.arr1.length + this.props.arr2.length;
  }
  set allLength(value) {
    return false;
  }
  changeTab(num) {
    this.setState(
      {
        tabChannel: num,
      },
      () => {}
    );
    console.log(this.state.tabChannel);
  }
  contentOne() {
    let _content = (
      <div>
        <button onClick={this.showGoodsPop}>添加商品</button>
        {this.props.arr1.map((item) => {
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
        {this.props.arr2.map((item) => {
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
  // 显示添加表单
  showAddGoodsPop() {
    this.setState({
      addGoodsPop: true,
    });
  }

  showGoodsPop() {
    this.setState({
      addGoodsPop: true,
    });
  }

  // 隐藏添加表单
  hiddenAddGoodsForm() {
    this.setState({
      addGoodsForm: false,
    });
  }

  addGoodsPopConfirm() {
    var _obj = this.state.goodsInfo;
    var _arr = this.props.arr1;
    _arr.push(_obj);
    this.props.setArr1([..._arr]);
  }

  goodsNameChange(e) {
    const value = e.target.value;
    this.setState((prevState) => ({
      goodsInfo: {
        ...prevState.goodsInfo,
        goodsName: value,
      },
    }));
  }

  stockChange(e) {
    const value = e.target.value - 0;
    this.setState((prevState) => ({
      goodsInfo: {
        ...prevState.goodsInfo,
        stock: value,
      },
    }));
  }

  hiddenGoodsPop() {
    this.setState({
      addGoodsPop: false,
    });
  }
  render() {
    return (
      <div>
        <div>{this.allLength}</div>
      <div className={style["tab-choose"]}>
        <div
          className={
            this.state.tabChannel === 0
              ? `${style["tab-on"]} ${style.tab}`
              : style.tab
          }
          onClick={this.changeTab.bind(this, 0)}
        >
          库存
        </div>
        <div
          className={
            this.state.tabChannel === 1
              ? `${style["tab-on"]} ${style.tab}`
              : style.tab
          }
          onClick={this.changeTab.bind(this, 1)}
        >
          商品
        </div>
        <div>{this.showContent()}</div>
        <CSSTransition
          in={this.state.addGoodsPop}
          timeout={1000}
          classNames="addGoods"
          unmountOnExit
          nodeRef={this.addGoodsPopRef}
        >
          <div className={style["add-goods-pop"]} ref={this.addGoodsPopRef}>
            <h1>添加商品</h1>
            <div>
              <label>货品名字</label>
              <input
                value={this.state.goodsInfo.goodsName}
                onChange={this.goodsNameChange}
              />
            </div>
            <div>
              <label>库存</label>
              <input
                value={this.state.goodsInfo.stock}
                onChange={this.stockChange}
              />
            </div>
            <div>
              <button onClick={this.addGoodsPopConfirm}>确认</button>
              <button onClick={this.hiddenGoodsPop}>取消</button>
            </div>
          </div>
        </CSSTransition>
      </div>
      </div>
    );
  }

  componentDidMount() {
    // 发页面初始化数据请求
    console.log("didmount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
}
export default TableList;
