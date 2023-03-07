import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";

function Routing() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FicheLogement/:id" element={<FicheLogement />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="/*" element={<Error />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default Routing;