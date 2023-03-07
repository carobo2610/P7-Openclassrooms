import React, { useState } from 'react'
import VectorTop from "../assets/VectorTop.png";
import VectorBottom from "../assets/VectorBottom.png";

function Collapse(text, title, section) {
  //useState à false car collapse fermée par défaut
    const [open, setOpen] = useState(false)
    return open ? (
      <div>
         <button
            className="collapse__button"
            type="button"
            onClick={() => setOpen(false)}
         >
            <span>{title}</span>
            <img src={VectorTop} alt="flèche vers le haut" />
         </button>
         {section ? (
            <div className="collapse__section">
               {section.map((text, e) => (
                  <p className="collapse__section--p" key={e}>
                     {text}
                  </p>
               ))}
            </div>
         ) : (
            <p className="collapse__p">{text}</p>
         )}
      </div>
   ) : (
      <button
         className="collapse__button"
         type="button"
         onClick={() => setOpen(true)}
      >
         <span>{title}</span>
         <img src={VectorBottom} alt="flèche vers le bas" />
      </button>
   );
}

export default Collapse

   // <div>
    //     <div onClick={() => setOpen(!open)}>
    //         afficher
    //     </div>
    //    { !open ?  <div>
    //         le contenu de ma collapse
    //     </div> : null}
    // </div>