import { useContext, useRef } from "react";
import {DefaultContext} from "./store/myContext";

const Main = () => {
    const myCtx = useContext(DefaultContext);
    console.log(myCtx)

    const myInput = useRef();

    const clickHandler = () => {
        myCtx.myCtxHandler(myInput.current.value);
    }

    return (
        <>
            <h1>{myCtx.myCtxString}</h1>
            <input ref={myInput} type='text'></input>
            <button onClick={clickHandler}>Click</button>
        </>
    )
   
}

export default Main;