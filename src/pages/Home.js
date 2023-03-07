import Products from "../products.json";
import "../styles/Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
    const homeTitle = "Kasa";
    const homeDescription = "Kasa pour la location d'appartements entre particuliers.";
  console.log(Products)
    return (
      <main className="home">
        <Banner />
        <div className="gallery">
          {Products.map((product) => (
          <Card product={product} />
            ))}
        </div>
      </main>
    );
 }
 
 export default Home