import { createContext, useState } from "react";

export const DefaultContext = createContext({
    myCtxString: String,
    myCtxNumber: Number,
    myCtxHandler: Function,
})

const DefaultContextProvider = (props) => {
    const [myState, setMyState] = useState("whatever")
    
    return (
    <DefaultContext.Provider value={{
            myCtxString: myState,
            myCtxHandler: (data) => setMyState(data),
            myCtxNumber: 2
        }}>
            {props.children}
    </DefaultContext.Provider>
    )
}

export default DefaultContextProvider;