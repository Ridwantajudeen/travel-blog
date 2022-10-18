import React from "react";
import back from "./images/back-icon.png"


function Place(props){
    return(
        <div className="places">
            <a href={props.navlink} className="navlink">
<img src={props.image} className="maldivesimg" alt=""/>
<div className="name">
    <h1>Name:</h1>
    <h2 id="name">{props.name}</h2>
    </div>
<div className="location">
    <h1>Location:</h1>
    <h2 className="locate">{props.location}</h2>
    
</div>
<div className="smore">
<h2 className="more">see more</h2><img src={back} alt='' className="back"/>
</div>

</a>
        </div>
    )
    
}
export default Place;