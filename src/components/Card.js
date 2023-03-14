import React from "react";
import { Link } from "react-router-dom";

function Card({product}) {
  return (
    <Link
    to={`/FicheLogement/${product.id}`}
    className="product__item"
    >
    <img
      className="product__cover"
      src={product.cover}
      alt="aperçu du logement"
    />
    <div className="product__title">
      <h3>{product.title}</h3>
    </div>
    </Link>
  );
}


export default Card