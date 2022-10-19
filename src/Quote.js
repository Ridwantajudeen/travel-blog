import React  from "react";
import { Zoom } from "react-reveal"

import Place from "./Place";

import maldives from "./images/maldives.jpg";
import santorini from "./images/Santorini.jpg"
import amante from "./images/Amante-Ibiza.jpg"
import bora from "./images/bora-bora.jpg"
import back from "./images/back-icon.png"

function Quote(children){
   
    return (
        <div className='quote'>
             <div  className="theplace">
          <Zoom>
            <Place
            image={maldives}
            name="Maldives"
            location='Republic of Maldives'
            navlink={"/maldives"}
            />
            
            
            <Place
            image={santorini}
            name="Santorini"
            location='Greece'
            navlink={"/santorini"}
            />
            <Place
            image={amante}
            name="Amante, Ibiza"
            location='Ibiza, Spain'
            navlink={"/amante"}
            />
            <Place
            image={bora}
            name="Bora Bora"
            location='French Polynesia'
            />
             <div id="smore">
<h2 more="more"> more</h2><img src={back} alt='' id="back"/>
</div>
</Zoom>
            </div>
          

           </div>
    )
}
export default Quote;