import React from "react";

function ConditionalRenderingFunctional(props) {
    return (
        <div>
            <hi>{props.connected ? "Connected" : "Not Connected"}</hi>
        </div>
    );
}

export default ConditionalRenderingFunctional;
