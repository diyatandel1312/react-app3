import React from "react";

function TabButton({children,onSelect,isSelected}){
 
    console.log("TabButton component Executed");
    return <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children} </button>
        </li>
       
}

export default TabButton;