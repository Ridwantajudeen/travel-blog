import React from "react";
// import { NavLink  } from 'react-router-dom';
function Navbar(){
 
    return(
        <div className="navbar">
            <div id="nav-name">
                <h1 className="nav-name">HOME AWAY</h1>
            </div>
            <div id="nav">
               
            <a href="/"><h1 className="nav">HOME</h1></a> 

           <h1 className="nav">EXPLORE</h1>
            <h1 className="nav">STORIES</h1>
            
            <h1 className="nav">TIPS</h1>
            </div>
        </div>
    )
}
export default Navbar;