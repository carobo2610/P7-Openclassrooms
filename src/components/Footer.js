import React from "react";
import LogoF from "../assets/Logo.png";

function Footer() {
   return (
      <div className="footer">
         <div className="footer__logo">
            <img src={LogoF} alt="logo de Kasa"></img>
         </div>
         <p className="footer__p">© 2020 Kasa. All rights reserved</p>
      </div>
   );
}

export default Footer