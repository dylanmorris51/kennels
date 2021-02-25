import { React } from "react"
import { useState } from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        //good practice:
        //make a copy of state, modify it, and then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    return ( 
       // passes is the argument to yourName, passes in the countClicks variable to the p tags, runs the handleClick function on button click
        <>
            
            <h3>Welcome, {yourName} </h3>
            
            <p>{countClicks}</p>

            <button onClick={(handleClick)}>Click Me, Baby, One More Time</button>
        </>
    )

}