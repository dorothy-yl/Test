import store from "../store"
import { useState, useEffect } from "react"
function Third(props) {
    console.log(store.getState());
    const [buyList, setbuyList] = useState(store.getState().reducer);
    useEffect(() => {
        store.subscribe(() => {
            setbuyList(store.getState().reducer);
        })
    }, [])
    function deleteGoods(goods) {
        store.dispatch({ type: "removeGoods", goods: goods });
    }
    return (
        <div>
            <div>
                {
                    buyList.map((goods) => {
                        return <p key={goods.name}>
                            {goods.name}{goods.price}
                            <button onClick={deleteGoods.bind(this, goods)}>删除</button>
                        </p>
                    })
                }
            </div>
        </div >
    );

}

export default Third;