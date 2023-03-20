import React from 'react'
import { useState } from 'react'
import VectorLeft from '../assets/VectorLeft.png'
import VectorRight from '../assets/VectorRight.png'

//utiliser useState pour le current index de la slide
//"images" = props qui va être appele dans la page ou besoin Carousel
function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const Slider = images

  //dernier slider = lenght -1 parce que la dernière image à un chiffre décalé de 1 en JS
  //Arrivé à la dernière image, on remet le State currentIndex à 0
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === Slider.length - 1) setCurrentIndex(0)
  }
  //dernier slider = lenght -1 parce que la dernière image à un chiffre décalé de 1 en JS
  //Arrivé à la première image, on met le State au currentIndex de la dernière image soit lenght-1
  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) setCurrentIndex(Slider.length - 1)
  }
  //condition si plus d'une image dans le carousel: si oui -> flèches, si non -> pas de flèches
  //utiliser useState pour déterminer si l'image affichée est bien celle avec le CSS actif
  return (
    <div className="carousel">
      {images.length > 1 ? (
        <img
          className="carousel__vectorRight fleche"
          src={VectorRight}
          alt="voir slide suivante"
          onClick={nextSlide}
        />
      ) : null}

      {images.map((item, index) => (
        <img
          key={item}
          className={
            index === currentIndex ? 'carousel-image actif' : 'carousel-image'
          }
          alt={`aperçu du logement ${index}`}
          src={item}
        />
      ))}
      {images.length > 1 ? (
        <img
          className="carousel__vectorLeft fleche"
          src={VectorLeft}
          alt="voir slide précédente"
          onClick={previousSlide}
        />
      ) : null}
    </div>
  )
}

export default Carousel
