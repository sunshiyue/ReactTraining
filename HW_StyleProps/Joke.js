import React from "react";

function Joke(props) {
    return (
        <div className="joke">
            <h3>Question: </h3>
            <p>{props.joke.question}</p>
            <h3>Punchline: </h3>
            <p>{props.joke.punchline}</p>
        </div>
    )
}

export default Joke;