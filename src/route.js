import Index from "./pages/index.jsx"
import Second from "./pages/second.jsx"
import Third from "./pages/third.jsx"
import Couter from "./pages/couter.jsx"
import GoodsList from "./pages/goodsList.jsx"
import GoodsDetail from "./pages/goodsDetail.jsx"
export default [
    {
        path: "/",
        element: Index,
    },
    {
        path: "/second/*",
        element: Second,
        children: [
            {
                path: "couter",
                element: Couter
            },
            {
                path: "goodsList",
                element: GoodsList
            }
        ]
    },
    {
        path: "/third",
        element: Third,
    },
    //动态路由
    {
        path: "/goodsDetail/:id",
        element: GoodsDetail
    },
]