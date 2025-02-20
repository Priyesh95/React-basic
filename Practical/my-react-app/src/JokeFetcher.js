import { useState, useEffect } from "react";

function JokeFetcher(){
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then((newJoke) => {
            return newJoke.json()
        })
        .then((data) => {
            console.log(data)
            setJoke(data.value)
        });
    }, [])

    function fetchJoke(){
        fetch("https://api.chucknorris.io/jokes/random")
        .then((newJoke) => {
            return newJoke.json()
        })
        .then((data) => {
            console.log(data)
            setJoke(data.value)
        });
    }

    return <div>
        <p>{joke}</p>
        <button onClick={fetchJoke}>New Joke!</button>
    </div>
}

export default JokeFetcher;