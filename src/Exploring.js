import React from "react";
import Export from "./Explore";
import santorini from "./images/Santorini.jpg"
import amante from "./images/Amante-Ibiza.jpg"

import maldives from "./images/maldives.jpg"
import mal1 from "./images/maldives/mal1.jpg"
import mal2 from "./images/maldives/mal2.jpg"
import mal3 from "./images/maldives/mal3.jpg"
import san1 from "./images/santorini/san1.jpg"
import san2 from "./images/santorini/san2.png"
import san3 from "./images/santorini/san3.jpg"


function Exploring(children){
    return(
        <div className="exploring">
           
<Export
img={maldives}
img1={mal1}
img2={mal2}
img3={mal3}
link={'/maldives'}

p1={"The Maldives is a tropical holiday destination in the Indian Ocean. The stunning islands are very relaxed and offer an experience which can best be described as a getaway on a desert island but with high quality accommodation, spectacular food, excellent service and an extensive range of activities."}
p2={"The Maldives are easily accessible from Europe and Asia and many resorts have a very cosmopolitan environment and whilst British visitors account for the largest number of guests after Italians, the islands are also very popular as a holiday destination for German, Japanese, Chinese, and Russian holidaymakers. However even if a resort is full, it is usually still easy to find a peaceful spot with plenty of secluded beaches."}
p3={`The appeal of the Maldives as a honeymoon destination is obvious, thanks to the spectacular setting and beautiful views. The destination is also very child-friendly thanks to the direct flights and resorts that cater well for families with kids’ clubs and varied activities as well as great accommodation options. The turquoise water surrounding an island is usually relatively shallow and perfect for children to play in. 

Breathtaking house reefs make the Maldives a stunning location for a diving holiday, allowing novices and more experienced divers to discover the incredible underwater scenery. Many resorts have a house reef which is perfect for snorkelling and diving, as well as a PADI dive centre with certified instructors. All resorts offer a vast range of water sports, primarily non-motorised, which often include sailing, windsurfing, kayaking and even surfing. Fishing trips and excursions to other islands allow visitors to explore the surrounding area a little.

For ultimate luxury and relaxation, outstanding spas offer a selection of massages and treatments, often in over water villas or in beachfront pavilions with spectacular lagoon and sea views.`}
p4={`Many resorts in the Maldives offer accommodation both on the beach and over the water, allowing guests to enjoy picturesque sea views. There is no self-catering accommodation and all meals need to be taken at the resort's restaurants, many of which offer exceptional cuisine. All inclusive or full board options are good value and are recommended, as any additional meals or drinks purchased in resort will cost significantly more than when booked as part of a package and will be subject to a 10% service charge.`}
/>

<Export
img={santorini}
p1={`Santorini is the most spectacular island in Greece and one of the geologic treasures of Europe. The five villages of Fira, Oia, Imerovigli, Firostefani, and Akrotiri sit atop the caldera and offer spectacular views into the crater created from a 16th-century BC volcanic eruption.
What remains is an incredible sight and a magical setting for island hikes, infinity pools, luxury hotels, clifftop wineries, and dreamy sunset dinners. With a land area of 76 square kilometers, Santorini is a little bigger than New York’s island of Manhattan.`}
p2={`The accommodation options of the island can cover every taste, need and budget and offer the dreamiest atmosphere and extraordinary holiday experiences. Santorini owns an abundance of beautiful hotels and villas as well as luxurious hospitality chains with great amenities and services.`}
p3={`The restaurants in Santorini vary and are distinguished for their location, style and their creative Mediterranean cuisine. Fine dining restaurants are located at the edge of the
 cliffs featuring an amazing view to Caldera and serve delicious gourmet dishes. Most of the luxurious hotels and restaurants provide romantic settings and interpreter the Greek cuisine with cotemporary creations.

Traditional restaurants and tavernas in the picturesque streets, are also perfectly located and offer romantic evenings and a cozy atmosphere. The restaurants set in front of the promenades of the volcanic beaches
 and especially in the cosmopolitan village of Kamari are very popular and definitely suggested for their idyllic beach location and their traditional cuisine.`}
p4={`Santorini is the best romantic holiday destination all over the world.

Luxury whitewashed houses perched on caldera cliffs with extraordinary views to Aegean Sea, mesmerizing sunrises 
and sunsets and a wide range of romantic activities are some reasons why this volcanic island is so popular.

This scenic destination offers many dreamy experiences that will guarantee an unforgettable honeymoon journey.`}
img1={san1}
img2={san2}
img3={san3}
 link={'/santorini'}

/>

<Export
img={amante}
link={"/amante"}
p1={``}
/>

        </div>
    )
}

export default Exploring;