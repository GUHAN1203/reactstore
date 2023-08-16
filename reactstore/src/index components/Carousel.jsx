import React from 'react'

function Carousel() {
  return (
    <div>
      <div class="col">
          <div id="demo" class="carousel slide" data-bs-ride="carousel">

    
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            
            <div class="carousel-inner">
              <div class="carousel-item active carousal-img ">
                <img
                  src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/nord-3-5g/1_Nord35G-tablet.jpg.thumb.webp"
                  alt="Los Angeles" class="d-block"  />

                <div  class=" carousel-caption d-none d-md-block ">
                  <h1 class="text-black">OnePlusNord 3</h1>

                </div>

                <div class="carousel-caption d-none d-md-block  ">

                  <p class="text-black">From 17,999
                    Sale is now live! Get 3 Months NCEMI
                  </p>
                  <button class=" bg-dark text-white   px-5 py-1" type="button">Buy now</button>
                  <a href="#" class="btn">Learn More</a>
                </div>

              </div>
              <div class="carousel-item carousal-img ">
                <img
                  src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/keyboard-81-pro/3_Keyboard81Pro-tablet.jpg.thumb.webp"
                  alt="Chicago" class="d-block" />
                <div  class=" carousel-caption  d- d-none d-md-block ">
                  <h1 class="text-white" >OnePlusNord 3</h1>

                </div>

                <div class="carousel-caption d-none d-md-block  ">

                  <p class="text-black">From 17,999
                    Sale is now live! Get 3 Months NCEMI
                  </p>
                  <button class=" bg-white text-black   px-5 py-1" type="button">Buy now</button>
                  <a href="#" class="btn text-white">Learn More</a>
                </div>


              </div>
              <div class="carousel-item carousal-img ">
                <img
                  src="https://www.oneplus.in/content/dam/oasis/page/2023/in/kv-banner/nord-ce-3-5g/2_NordCE35G-tablet.jpg.thumb.webp"
                  alt="New York" class="d-block"  />
                <div  class=" carousel-caption  d- d-none d-md-block ">
                  <h1 class="text-black">OnePlusNord 3</h1>
                </div>

                <div  class="carousel-caption d-none d-md-block  ">

                  <p class="text-black">From 17,999
                    Sale is now live! Get 3 Months NCEMI
                  </p>
                  <button class=" bg-dark text-white   px-5 py-1" type="button">Buy now</button>
                  <a href="" class="btn">Learn More</a>
                </div>
              </div>
            </div>

            
            <button class="carousel-control-prev h-50  "  type="button" data-bs-target="#demo"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next  h-50  "  type="button" data-bs-target="#demo"
              data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>

        </div>
    </div>
  )
}

export default Carousel
