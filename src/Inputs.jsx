import React from "react"
import "./index.css";
function Inputs({setAttribute}){
    return (
    <>
        <div>
            <input placeholder="Image Description" onChange={(e)=>{setAttribute(e.target.value)}}/>
        </div>
    </>
    );
}
export default Inputs;