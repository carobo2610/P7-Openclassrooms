import React from "react";
import Error404 from "../assets/404.png";
import { Link } from "react-router-dom";
import "../styles/Error.css"

function Error() {
    return (
        <main className="error">
          <h1 className="error__txt"></h1>
          <img className="error__logo" src={Error404} alt="logo erreur 404" />
          <p className="error__p">
            Oups ! La page que vous demandez n'existe pas.
          </p>
          <Link className="error__return" to="/">
            Retourner sur la page d'accueil
          </Link>
        </main>
      );
  }

export default Error