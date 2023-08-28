import React from "react";
import './Carousel.css'

function Carousel() {
  return (
    
    <div 
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
      <a href="http://localhost:3000/mobile-details/prod004"> <div class="carousel-item active">
         <img
            src="https://www.oneplus.in/content/dam/oasis/page/2023/in/kv-banner/nord-ce-3-5g/2_NordCE35G-tablet.jpg.thumb.webp"
            class="d-block w-100"
            alt="..."
          />
          
          <div
            style={{ textAlign: "left", paddingBottom: "35%" }}
            className="carousel-caption d-none d-md-block"
          >
            <h1 className="text-black">OnePlusNord CE 3 5G</h1>
          </div>

          <div
            style={{ textAlign: "left" }}
            className="carousel-caption d-none d-md-block"
          >
            <p className="text-black">From 27,999 Sale is now live!</p>
            <button className="bg-dark text-white px-5 py-1" type="button">
              Buy now
            </button>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
        </a>
        <div class="carousel-item">
          <img
            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/keyboard-81-pro/3_Keyboard81Pro-tablet.jpg.thumb.webp"
            class="d-block w-100"
            alt="..."
          />
          <div
            style={{ textAlign: "left", paddingBottom: "35%" }}
            className="carousel-caption d-none d-md-block"
          >
            <h1 className="text-white">OnePlus Keyboard 81 Pro</h1>
          </div>

          <div
            style={{ textAlign: "left" }}
            className="carousel-caption d-none d-md-block"
          >
            <p className="text-white">
              From 17,999 Sale is now live! Get 3 Months NCEMI
            </p>
            <button className="bg-white text-black px-5 py-1" type="button">
              Buy now
            </button>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
        <a href="http://localhost:3000/mobile-details/prod003">
        <div class="carousel-item">
          <img
            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/nord-3-5g/1_Nord35G-tablet.jpg.thumb.webp"
            class="d-block w-100"
            alt="..."
            />
          <div
            style={{ textAlign: "left", paddingBottom: "35%" }}
            className="carousel-caption d-none d-md-block"
          >
            <h1 className="text-black">OnePlusNord 3</h1>
          </div>

          <div
            style={{ textAlign: "left" }}
            className="carousel-caption d-none d-md-block"
            >
            <p className="text-black">
              From 34,999 Sale is now live! Get 3 Months NCEMI
            </p>
            <button className="bg-dark text-white px-5 py-1" type="button">
              Buy now
            </button>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
            </a>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
