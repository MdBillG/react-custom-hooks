import React from "react";
import useToggle from "./useToggle"; // Adjust the import path as necessary

const Toggle = () => {
    const [value, toggle] = useToggle(false);
    console.log("value: ", value)

    return (
        <div>
            <p>The toggle is {value ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Toggle</button>
            <button onClick={() => { toggle(true) }}>Make true</button>
            <button onClick={() => { toggle(false) }}>Make false</button>
        </div>
    );
};

export default Toggle;
