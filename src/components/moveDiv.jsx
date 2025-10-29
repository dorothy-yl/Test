import "../movediv.moudle.css"
import React from "react";
//import { useRef, useState } from "react";
//vue refs
//移动dom

//按下-》开启拖拽，获取到鼠标按下的位置距离div左上角的距离
//move->设置stylepop的值
//送开-》结canmove -false
class MoveDiv extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            canMove: false,
            stylePop: { left: "50%", top: "50%" },
            disTance: {
                disX: 0,
                disY: 0
            }
        }
        this.movediv = React.createRef()

    }
    ready = (e) => {
        this.setState({
            canMove: true,
            disTance: {
                disX: e.clientX - this.movediv.current.offsetLeft,
                disY: e.clientY - this.movediv.current.offsetTop,
            }
        })
    }
    move = (e) => {
        if (this.state.canMove) {
            this.setState({
                stylePop: {
                    left: e.clientX - this.state.disTance.disX,
                    top: e.clientY - this.state.disTance.disY,
                },
            },()=>{
                this.props.moveAction(this.state.stylePop.left,this.state.stylePop.top)
            })
        }
    }
    finish = (e) => {
        this.setState({
            canMove: false,
            disTance: {
                disX: 0,
                disY: 0,
            }
        })
    }
    render() {
        console.log(this.props.children)
        return (
            <div className="movediv"
                onMouseDown={this.ready}
                onMouseMove={this.move}
                onMouseUp={this.finish}
                style={
                    this.state.stylePop
                }
                ref={this.movediv}
            >
                {this.props.input1("i am input1")}
                {this.props.input2("i am input2")}
                {this.props.text}
            </div >
        );
    }
}


export default MoveDiv;