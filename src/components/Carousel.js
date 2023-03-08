import React from "react";
import { useState, useEffect } from "react";
import VectorLeft from "../assets/VectorLeft.png";
import VectorRight from "../assets/VectorRight.png";


//utiliser useState pour le current index de la slide 
function Carousel({product}){
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const Slider = product.data;

    // const nextSlide = () => {
    //     setCurrentIndex(currentIndex + 1)
    //     if(currentIndex === Slider.length - 1)
    //         setCurrentIndex(0)
    // }

    // const previousSlide = () => {
    //     setCurrentIndex(currentIndex - 1)
    //     if(currentIndex === 0)
    //         setCurrentIndex(Slider.length - 1)
    // }

    // return (
    //     <section className='carousel'>
    //                 <img 
    //                     className='carousel_arrow carousel_arrow_right' 
    //                     src={VectorRight} 
    //                     alt="voir slide suivante" 
    //                     onClick={nextSlide}
    //                 />
    //                 <img 
    //                     className='carousel_arrow carousel_arrow_left' 
    //                     src={VectorLeft} 
    //                     alt="voir slide précédente" 
    //                     onClick={previousSlide}
    //                 />
    //     </section>
    // )

}

export default Carousel