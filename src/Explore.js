import React from "react";
import {BrowserRouter as Router, Route,Switch } from "react-router-dom";

function Export(props){
    return(
        <div className="export">
             <Router>
                <Switch>
                    <Route exact path={props.link}>
            <div className="img-det">
           <img src={props.img} className="exp-img" alt="maldives-img"/>
           <div className="img-text"><p>{props.p1}</p>
           <p>{props.p2}</p>
           <p>{props.p3}</p>
<p>{props.p4}</p>
           
           </div>
           </div>
           <div className="exp-down-img">
            <img src={props.img1} className="exp-1st-img" alt=""/>
            <img src={props.img2} className="exp-2nd-img" alt=""/>
            <img src={props.img3} className="exp-3rd-img" alt=""/>
           </div>
           </Route>
</Switch>
</Router>

   
        </div>
    )
}

export default Export;
