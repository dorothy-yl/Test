import { useNavigate } from "react-router-dom";
function GoodsList(props) {
    const navigate = useNavigate();
    function showDetail(id) {
        navigate("/goodsDetail/" + id, {
            state: {
                c: 999
            }
        });
    }
    return (
        <div>
            {props.goodsArr.map((goods) => {
                return (<div onClick={showDetail.bind(this, goods.id)} key={goods.id}>
                    {goods.goodsName}
                </div>)
            })}
        </div >
    );

}

export default GoodsList;