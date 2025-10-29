import { useState, useEffect, useMemo ,useRef} from "react"
function SonCounter(props) {
    let _num = props.num;
    const [sonNum, setSonNum] = useState(_num)
    let ref1 = useRef();
    function addOne() {
        //props.num++;//error
        let _num = sonNum;
        _num += 1;
        setSonNum(_num);
        props.setNum(_num);
    }
    function minusOne() {
        let _num = sonNum;
        _num -= 1;
        setSonNum(_num);
        props.setNum(_num);
    }
    return (
        <div>
            <div>
                <button onClick={addOne}>加一</button>
                <span ref={ref1}>{sonNum}</span>
                <button onClick={minusOne}>减一</button>
            </div>
        </div>
    )
}

export default SonCounter