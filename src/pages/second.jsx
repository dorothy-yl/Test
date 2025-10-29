import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react"
function Second(props) {
    const [goodsArr, setgoodsArr] = useState([
        {
            goodsName: "电脑",
            id: "1"
        },
        {
            goodsName: "手机",
            id: "2"
        },
        {
            goodsName: "平板",
            id: "3"
        },
    ])
    const childRoutes = Array.isArray(props.children) ? props.children : [];
    return (
        <div>
            <Link to="couter">总种类</Link>
            <Link to="goodsList">商品列表</Link>
            <div>
                <Routes>
                    {
                        childRoutes.map((item, index) => {
                            return <Route key={item.path} path={item.path} element={<item.element goodsArr={goodsArr}></item.element>}></Route>
                        })
                    }
                </Routes>
            </div>
        </div >
    );

}

export default Second;