import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action){

    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action");
    }
}

function CounterAdvanced(){
    const [state, dispatch] = useReducer(reducer, initialState);

    const performAction = function(action){
        console.log(action);
        return dispatch({type : action})
    }

    return <div>
        <p> Count : {state.count} </p>
        <button onClick = {() => {performAction("increment")}}> + </button>
        <button onClick = {() => {performAction("decrement")}}> - </button>
        <button onClick = {() => {performAction("reset")}}> Reset </button>
    </div>
}

export default CounterAdvanced;