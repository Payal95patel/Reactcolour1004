import React, { useState } from "react";
function Colour(){
    const[colour,setColour]=useState();
    function Red(){
        setColour=(Red);
    }
    function Green(){
        setColour=(Green);
    }
    return<>
    {colour}<br></br>
    <button className="btn btn-primary" onClick={"You have clicked on red"}>Red</button>
    <button className="btn btn-primary" onClick={"You have clicked on green"}>Green</button>
    </>

}