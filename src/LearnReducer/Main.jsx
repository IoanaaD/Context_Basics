import { useReducer } from "react";
import myReducerFunction, { initialState } from "./reducer";

const Main = () => {
  const [myReducer, dispatch] = useReducer(myReducerFunction, initialState);
  const d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();

  const hallwayOnDispatchHandler = () => {
    dispatch({
      type: "HALLWAY_ON",
      payload: `Hallway Turned on ${hour} : ${minutes}`,
    });
    setTimeout(() => {
      dispatch({ type: "RESET_HOUSE_STATUS" });
    }, 3000);
  };
  const hallwayOffDispatchHandler = () => {
    dispatch({
      type: "HALLWAY_OFF",
      payload: `Hallway Turned off ${hour} : ${minutes}`,
    });
  };

  const officeOnDispatchHandler = () => {
    dispatch({
      type: "OFFICE_ON",
      payload: `Office turned on ${hour} : ${minutes}`,
    });
  };

  const officeOffDispatchHandler = () => {
    dispatch({
      type: "OFFICE_OFF",
      payload: `Office turned off ${hour} : ${minutes}`,
    });
  };

  const kitchenOnDispatchHandler = () => {
    dispatch({
      type: "KITCHEN_ON",
      payload: `Kitchen light is turned on ${hour} : ${minutes}`,
    });
  };

  const kitchenOffDispatchHandler = () => {
    dispatch({
      type: "KITCHEN_OFF",
      payload: `Kitchen light is turned off ${hour} : ${minutes}`,
    });
  };

  const allOffHandler = () => {
    dispatch({ type: "ALL_OFF" });
  };

  const allOnHandler = () => {
    dispatch({ type: "ALL_ON" });
  };

  console.log(myReducer);

  return (
    <>
      <h3>House Status: {myReducer.houseStatus}</h3>

      <div>
        <span>Hallway</span>
        <span>{myReducer.hallway ? "Lights on" : "Lights off"}</span>
        <button onClick={hallwayOnDispatchHandler}>On</button>
        <button onClick={hallwayOffDispatchHandler}>Off</button>
        <div>
          <p>
            On button clicked {myReducer.hallwayButtonClicks.onButton} times
          </p>
          <p>
            Off button clicked {myReducer.hallwayButtonClicks.offButton} times
          </p>
        </div>
      </div>
      <p>
        <span>Office</span>
        <span>{myReducer.office ? "Lights on" : "Lights off"}</span>
        <button onClick={officeOnDispatchHandler}>On</button>
        <button onClick={officeOffDispatchHandler}>Off</button>
      </p>
      <p>
        <span>Kitchen</span>
        <span>{myReducer.kitchen ? "Lights on" : "Lights off"}</span>
        <button onClick={kitchenOnDispatchHandler}>On</button>
        <button onClick={kitchenOffDispatchHandler}>Off</button>
      </p>
      <button onClick={allOffHandler}>All off</button>
      <button onClick={allOnHandler}>All on</button>
      <div>{myReducer.hallway && "Hallway"}</div>
      <div>{myReducer.office && "Office"}</div>
      <div>{myReducer.kitchen && "Kitchen"}</div>
    </>
  );
};

export default Main;
