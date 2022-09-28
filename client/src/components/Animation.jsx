import React from "react";

function Animation(){
    return (
        <div>
                <video 
                    autoPlay muted
                    src={require("./vid1.mp4")}
                />
        </div>
    );
}
export default Animation;




