import React from 'react';
import HomeImg from "../assets/Home.png";


function Banner() {
    return (
        <div className="home__section">
        <h2 className="home__title">Chez vous, partout et ailleurs</h2>
            <div className="home__img">
                <img src={HomeImg} 
                    alt="Paysage de rochers">
                </img>
            </div>
        </div>
    );
};

export default Banner;