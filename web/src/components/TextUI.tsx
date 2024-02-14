import React, { useState } from "react";
import "./App.css";

const TextUI: React.FC<{ keybind: string, label: string}>  = ({ keybind, label}) => (
    <div className="textui">
        <div className="textui-keybind-container">
            <div className="textui-keybind">
                <p>{keybind}</p>
            </div>
        </div>
        <div className="textui-container">
            <p>{label}</p>
        </div>
    </div>
);

export default TextUI;
