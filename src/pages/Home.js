import Products from "../products.json";
import "../styles/Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  <div
    title="Kasa, home page"
    description="Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France."
  />
  console.log(Products)
    return (
      <main className="home">
        <Banner />
        <div className="gallery">
          {Products.map((product) => (
          <Card key={product.id} product={product} />
            ))}
        </div>
      </main>
    );
 }
 
 export default Home