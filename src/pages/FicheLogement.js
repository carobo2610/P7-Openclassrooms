import Products from "../products.json";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/FicheLogement.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"

//rediriger avec useNavigate en cas erreur id

function FicheLogement() {
  //accéder attribut dans url
  const params = useParams();
  //comparer l'id de l'URL à l'id du tableau des produits
  //const product = Products.find((product) => params.id === product.id);
  let product = Products.find((product) => params.id === product.id)

  const navigate = useNavigate();
  useEffect(() => {
     if (!product) {
        navigate("/error");
     }
  },[]);
  console.log(Products);
  console.log(params)
    
  return(
    <div id="place">
      <div className="place">
        <div
          title="Fiche logement"
          description="Présentaion des logements proposés par la site Kasa"
        />
        {Products.filter((product) => product.id === params.id).map(
          (product, index) => (
          <div key={product.id - index} className="place__section">
            <div className="place__carousel">
              <Carousel images={product.pictures} />
            </div> 
            <div className="place__box">
              {/* partie de gauche avec la description du logement et les tags */}
              <div className="place__description">
                <h2>{product.title}</h2>
                  <p className="place__location">{product.location}</p>
                  <div className="place__tags">
                    {product.tags.map((tag, key) => (
                        <div className="tag" key={key}>
                          {tag}
                        </div>
                      ))}
                  </div>
              </div>
              {/* partie de droite avec le propriétaire et la note */}
              <div className="place__hosting">
                <div className="place__host">
                  <p>{product.host.name}</p>
                  <img
                    className="place__host--img"
                    src={product.host.picture}
                    alt="Photo du locataire du logement"
                  />
                </div>
                <div className="rating">
                  <Rating rate={product.rating} />
                </div>
              </div>
            </div>  
            {/* partie inférieure avec les collapses */}
            <div className="FicheLogement__collapse">
              <div className="FicheLogement__collapse--section">
                <Collapse 
                  title={"Description"}
                  content={product.description}  
                />
              </div>
              <div className="FicheLogement__collapse--section">
                <Collapse 
                  title={"Equipements"}
                  content={product.equipments}  
                />
              </div>
            </div>
          </div>
          )
        )}
      </div>
    </div>  
    );
  }
  
  export default FicheLogement