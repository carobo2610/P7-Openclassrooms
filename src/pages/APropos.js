import React from "react";
import AboutLImg from "../assets/AboutLarge.png";
import Collapse from "../components/Collapse";
import "../styles/APropos.css";

function APropos() {
   const items = [
      {
         id: 1,
         title: "Fiabilité",
         text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes.",
      },
      {
         id: 2,
         title: "Respect",
         text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      },
      {
         id: 3,
         title: "Service",
         text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
         id: 4,
         title: "Sécurité",
         text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
   ];
   return (
      <main className="APropos">
         <div
            title="A Propos"
            description="Section à propos du site Kasa"
         />
         <section className="APropos__section">
            <img
               className="APropos__img"
               src={AboutLImg}
               alt="Paysage de montagne"
            />
         </section>
         {/* <div className="APropos__collapse">
            {items.map((item) => (
               <div 
                  className="APropos__collapse--section" 
                  key={item.id}>
                  <Collapse  title={item.title} text={item.text} />
               </div>
            ))}
         </div> */}
         


         
      </main>
   );
}

export default APropos