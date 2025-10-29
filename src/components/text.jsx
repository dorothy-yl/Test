//class组件
import React from "react";


class TableList extends React.PureComponent {
    constructor(prop) {
        super(prop);
        this.state = {
            arr: [1, 2, 3]
        }
    }
    change = () => {
        let _arr = this.state.arr;
        this.setState({
            arr: _arr
        })
    }
    render() {
        console.log('render')
        return (
            <>
                <div>{this.props.father}</div>
                <div>{this.state.arr}</div>
                <button onClick={this.change}>变动</button>
            </>
        )
    }


}


export default TableList
