import React, { useEffect } from "react";
import Products from "../products.json";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/FicheLogement.css";
import { useParams } from "react-router";

function FicheLogement() {
  //accéder attribut dans url
  const {id} = useParams()
  //comparer l'id de l'URL à l'id du tableau des produits
  const product = Products.find(item => item.id === id)
  console.log(product)
    return(
    <div id="house">
      <div className="house">
        <div className="house__carousel">
          <Carousel data={product.pictures} />
        </div>
        {/* <div className="house__collapse">
          <Collapse data={product.pictures} />
        </div> */}

      </div>
    
    
    
    </div>

    )
  }
  
  export default FicheLogement