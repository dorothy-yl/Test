//class组件
import React from "react";
import style from "./menu.module.css"
import { NavLink } from "react-router-dom"
class Menu extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {

        }
    }
    render() {
        return (
            //<Link> <NavLink>
            <div className={style.menucontent}>
                {this.props.menuArr.map((item) => {
                    return <div className={style['menu-item']} key={item.menuName}>
                        <NavLink className={(obj) => {
                            return obj.isActive ? style["menu-on"] : ""
                        }} to={item.path}>{item.menuName}</NavLink>
                    </div>
                })}
            </div>
        )

    }
}


export default Menu
