// import React from "react";

// function ScrollBar(){
//     return(
//         <div className="main-scroll-bar">

//         </div>
//     )
// }

// export default ScrollBar;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './scroll-bar.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="main-slider-cards" style={{position:'relative' , bottom : 100 }}>
        <Slider {...settings}>
          
          <div className="cards" id="cards">
            <label for="cards">
            <Link to={`/martial-arts/${"karate-uniforms"}`}>
            <img src="/Assets/martial-arts.jpg" />
            <h4>Jiu Jitsu</h4>
            </Link>
            </label> 
          </div>
          
          <div className="cards">
            <img src="/Assets/boxing-mma.jpg" />
            <h4>MMA</h4>
          </div>
          <div className="cards">
            <img src="/Assets/sports-wear.jpg" />
            <h4>Judo</h4>
          </div>
          <div className="cards">
            <img src="/Assets/martial-arts.jpg" />
            <h4>Karate</h4>
          </div>
          <div className="cards">
            <img src="/Assets/boxing-mma.jpg" />
            <h4>Apparel</h4>
          </div>
          <div className="cards">
            <img src="/Assets/sports-wear.jpg" />
            <h4>Taekwondo</h4>
          </div>
          <div className="cards">
            <img src="/Assets/martial-arts.jpg" />
            <h4>Boxing</h4>
          </div>
          <div className="cards">
            <img src="/Assets/boxing-mma.jpg" />
            <h4>Sports Gloves</h4>
          </div>
          <div className="cards">
            <img src="/Assets/sports-wear.jpg" />
            <h4>Accessories</h4>
          </div>
        </Slider>
      </div>
    );
  }
}