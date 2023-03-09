import React from "react";
import { useState, useEffect } from "react";
import VectorLeft from "../assets/VectorLeft.png";
import VectorRight from "../assets/VectorRight.png";


//utiliser useState pour le current index de la slide 
//"images" = propos qui va être appele dans la page ou besoin Carousel
function Carousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0)
    const Slider = images;
    console.log(images)

    //dernier slider = lenght -1 parce que la dernière image à un chiffre décalé de 1 en JS
    //Arrivé à la dernière image, on remet le State currentIndex à 0
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === Slider.length - 1)
            setCurrentIndex(0)
    }
    //dernier slider = lenght -1 parce que la dernière image à un chiffre décalé de 1 en JS
    //Arrivé à la première image, on met le State au currentIndex de la dernière image soit lenght-1
    const previousSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(Slider.length - 1)
    }

    return (
        <section className='carousel'>
                   { images.length > 1 ? <img 
                        className='carousel_vectorRight' 
                        src={VectorRight} 
                        alt="voir slide suivante" 
                        onClick={nextSlide}
                    /> : null} 

                    {images.map(item => <img src={item}/>)}
                     { images.length > 1 ? <img 
                        className='carousel_vectorLeft' 
                        src={VectorLeft} 
                        alt="voir slide précédente" 
                        onClick={previousSlide}
                    /> : null }
        </section>
    )

}

export default Carousel