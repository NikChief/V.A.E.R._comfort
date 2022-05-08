import React from 'react';
import './Carousel.css'

function Carousel(props) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="carousel_images/car1.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="carousel_images/car2.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="carousel_images/carous1.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="carousel_images/car4.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="carousel_images/car5.png" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
