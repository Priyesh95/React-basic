import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }

    return <div>
        <p> Count : {count} </p>
        <button onClick = {increase}> Click Me! </button>
    </div>
}

export default Counter;