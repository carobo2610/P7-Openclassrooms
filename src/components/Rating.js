import React from "react";
import Star from "../assets/Star.png";
import EmptyStar from "../assets/EmptyStar.png";

function Rating(rate) {
   const range = [1, 2, 3, 4, 5];

   return range.map((rangeStar, key) =>
      rangeStar <= rate.rate ? (
        <img 
            key={key} 
            src={Star} 
            alt="étoile jaune" />
      ) : (
        <img
            className="empty__star"
            key={key}
            src={EmptyStar}
            alt="étoile vide"/>
      )
   );
}

export default Rating