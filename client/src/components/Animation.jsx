import React from "react";
import "./Animation.css";
function Animation(){
    return (
        <div>
                <video 
                    autoPlay muted
                    src={require("./vid2.mp4")}
                />
        </div>
    );
}
export default Animation;




