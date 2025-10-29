import { useParams, useLocation, useSearchParams, } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
function GoodsDetail(props) {
    const [goodsDetail, setDetail] = useState({
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
        axios.get("http://localhost:1000/shopDetail?id=" + _id).then((res) => {
            setDetail(res.data);
        })
    }, [])
    return (<div>
        <p>{goodsDetail.name}</p>
        <p>价格:{goodsDetail.price}</p>
    </div>)
}

export default GoodsDetail;