import React from "react";
import Star from "./Star";

function Stars({count}) {
   
    if (Number.isInteger(count) && count>0 && count<6)
    return (
     <div className="star"> 
        
        {Array.from({ length: count }).map((id) => {
        return(<Star
        key = {id}
        />)
      })}</div>
    )
    }
  export default Stars;
  