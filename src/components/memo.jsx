import { memo, useEffect } from "react"
function MemoComponent(props) {

    useEffect(() => {
        console.log("mount")
    })
    return <div> {props.propsNum}</div>
}
export default memo(MemoComponent)