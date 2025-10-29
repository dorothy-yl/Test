import { useParams, useLocation, useSearchParams, } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
import store from "../store";

const mockGoodsDetailMap = {
    "1": {
        id: "1",
        name: "电脑",
        price: 5800,
    },
    "2": {
        id: "2",
        name: "手机",
        price: 3999,
    },
    "3": {
        id: "3",
        name: "平板",
        price: 2899,
    },
};
function GoodsDetail(props) {
    const [goodsDetail, setDetail] = useState({
        id: "",
        name: "商品",
        price: 0
    })
    const params = useParams();
    const _id = params.id;
    const location = useLocation();
    const [search, setSearch] = useSearchParams();
    console.log(location);
    console.log(search.get("a"), search.get("b"))
    useEffect(() => {
        let isUnmounted = false;
        const controller = new AbortController();

        const loadGoodsDetail = async () => {
            if (process.env.NODE_ENV === "development") {
                const mockDetail = mockGoodsDetailMap[_id];
                if (mockDetail) {
                    setDetail({ ...mockDetail, id: _id });
                    return;
                }
            }

            try {
                const res = await axios.get("http://localhost:3000/shopDetail?id=" + _id, {
                    signal: controller.signal,
                });
                if (!isUnmounted) {
                    setDetail({ id: _id, ...res.data });
                }
            } catch (error) {
                if (!isUnmounted) {
                    const fallback = mockGoodsDetailMap[_id] || {
                        name: "商品信息获取失败",
                        price: 0,
                    };
                    setDetail({ id: _id, ...fallback });
                }
            }
        };

        if (_id) {
            loadGoodsDetail();
        }

        return () => {
            isUnmounted = true;
            controller.abort();
        };
    }, [_id])

    const handleBuy = () => {
        if (!_id || !goodsDetail.name) {
            return;
        }
        store.dispatch({
            type: "addGoods",
            goods: {
                id: goodsDetail.id || _id,
                name: goodsDetail.name,
                price: goodsDetail.price,
            },
        });
    }
    return (<div>
        <p>{goodsDetail.name}</p>
        <p>价格:{goodsDetail.price}</p>
        <button onClick={handleBuy}>购买</button>
    </div>)
}

export default GoodsDetail;