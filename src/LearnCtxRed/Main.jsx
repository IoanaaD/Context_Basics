import React from "react";
import Comp from "./Comp";
import MyContextProvider from "./store/myContext";

const Main = () => {
  return (
    <>
      <MyContextProvider>
        <Comp />
      </MyContextProvider>
    </>
  );
};

export default Main;
