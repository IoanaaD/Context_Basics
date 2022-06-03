export const initialState = {
    hallway: false,
    hallwayButtonClicks: {
        onButton: 0,
        offButton: 0,
    },
    office: false,
    kitchen: false,
    houseStatus: 'Awaiting input'
}

const myReducerFunction = (state, action) => {
    switch(action.type){
        case "HALLWAY_ON":
            return {
                ...state,
                hallwayButtonClicks: {...state.hallwayButtonClicks, onButton: state.hallwayButtonClicks.onButton + 1},
                hallway:true,
                houseStatus: action.payload,
            };
        case "HALLWAY_OFF":
            return {
                ...state,
                hallwayButtonClicks: {...state.hallwayButtonClicks, offButton: state.hallwayButtonClicks.offButton + 1},
                hallway:false,
                };
        case "OFFICE_ON":
            return{
                ...state,
                office: true,
                houseStatus: action.payload
            }
        case "OFFICE_OFF":
            return {
                ...state,
                office: false,
                houseStatus: action.payload
            }
        case "KITCHEN_ON":
            return {
                ...state,
                kitchen: true,
                houseStatus: action.payload
            }
        case "KITCHEN_OFF":
            return {
                ...state,
                kitchen: false,
                houseStatus: action.payload
            }
        case "ALL_ON":
            return{
                hallway: true,
                office: true,
                kitchen: true,
                houseStatus: 'Awaiting input'
            }
        case "RESET_HOUSE_STATUS":
            return {
                ...state,
                houseStatus: initialState.houseStatus
            }
        case "ALL_OFF":
            return initialState;
        default:
            return state
    }
}

export default myReducerFunction;