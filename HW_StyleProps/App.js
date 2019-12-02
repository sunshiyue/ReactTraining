import React from "react";
import Joke from "./Joke";

function App(props) {
    return (
        <div className="jokes">
            <Joke 
                joke={{question: "What did the policeman say to his belly button?", punchline: "You're under a vest!"}}
            />
            
            <Joke 
                joke={{question: "What do you call a fake noodle?", punchline: "An impasta"}}
            />
            
            <Joke 
                joke={{question: "What did one toilet say to the other toilet?", punchline: "You look flushed"}}
            />
            
            <Joke 
                joke={{question: "What do lawyers wear to court?", punchline: "Lawsuits!"}}
            />
            
            <Joke 
                joke={{question: "Why is there a gate around cemeteries?", punchline: "Because people are dying to get in!"}}
            />  
        </div>
    )
}
export default App;