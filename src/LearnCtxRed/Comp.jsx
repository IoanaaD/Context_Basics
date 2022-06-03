import React, { useContext } from "react";
import { MyContext } from "./store/myContext";

const Comp = () => {
  const myCtx = useContext(MyContext);
  const reducerHandler = () => {
    myCtx.reducerDispatch({ type: "INCREASE_DAYS", payload: 1 });
  };
  console.log(myCtx);
  return (
    <>
      <h2>
        Hello, my name is {myCtx.myString}
        <br></br>I am {myCtx.myNumber}. I have{" "}
        {myCtx.myBoolean ? "a lot of" : "almost no"} free time. I have been
        working ar {myCtx.reducerCtx.someString} for {myCtx.reducerCtx.someTime}
      </h2>
      <button onClick={myCtx.myFunc}>Show reality</button>
      <button onClick={reducerHandler}>Increase days</button>
    </>
  );
};

export default Comp;
