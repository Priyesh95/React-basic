import { useState, useEffect } from "react";

function Stopwatch(){

    const [time,setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if(isRunning){
            interval = setInterval(() => {
            setTime(prevTime => prevTime + 1); // Update time every second
            }, 1000);
        }
        else{
            clearInterval(interval);
        }
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, [isRunning]);

    function startTime(){
        setIsRunning(true);
    }

    function stopTime(){
        setIsRunning(false);
    }

    function resetTime(){
        setIsRunning(false);
        setTime(0);
    }

    return <div>
        <p>{new Date(time * 1000).toISOString().substr(11, 8)}</p>
        <button onClick = {startTime} disabled = {isRunning}>Start!</button>
        <button onClick = {stopTime} disabled = {!isRunning}>Stop!</button>
        <button onClick = {resetTime} >Reset!</button>
    </div>
}

export default Stopwatch;