import { createContext } from "react";
import { useState, useReducer } from "react";
import { defaultState, MyReducer } from "./myReducer";

export const MyContext = createContext({});

const MyContextProvider = props => {
  const [myState, setMyState] = useState(true);
  const { children } = props;
  const [reducerState, reducerActions] = useReducer(MyReducer, defaultState);

  return (
    <MyContext.Provider
      value={{
        myString: "Ioana",
        myNumber: 22,
        myBoolean: myState,
        myFunc: () => setMyState(prevState => !prevState),
        reducerCtx: reducerState,
        reducerDispatch: reducerActions,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
