import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-bootstrap/Carousel";

import SafariMain from "../../img/SafariMain.jpeg";
import carousel1 from "../../img/Safari1.jpeg";
import carousel2 from "../../img/Safari2.jpeg";
import carousel3 from "../../img/Safari3.jpeg";

const Safari = () => {

  return (
    <div className="pagesBackground">
    <div>
      <div>
        <div className="main-content">
          <div
            className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              // minHeight: "500px",
              backgroundImage: `url(${SafariMain})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="container-fluid d-flex align-items-center">
              <div className="text-on-image">
                <h2 className="page-title">SAFARI</h2>
                <span className="page-subtitle">
                In the most private location away from the crowds inside the Masai Mara
                                </span>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Description--------------------------------------------------- */}

          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile ">
                  <div className="pageDescriptionContainerRigth  pt-md-4 pb-0 pb-md-4">
                    <h2 className="description-title">
                    FEEL OUR WILDLIFE
                    </h2>
                    <div className="description-content">
                      <p className="description-content">
                      Our privileged location inside the National Reserve together with our philosophy of tracking and searching for our own wildlife sightings far from the transited areas, makes the Safari Adventure experience amongst the best in the Masai Mara. We are located in superb big5 country with access to 4 different lion prides within minutes from camp as well as the best leopard territory inside the reserve. The Black rhino density in our area is the highest in the entire Maasai Mara-Serengeti Eco-System. For centuries the Maasai tribe has learned to coexist with its surroundings and its wildlife and our experienced and skilled Maasai spotters –trackers- will read all signs in order to find the best opportunities to observe the wildlife of the African Savannah. Our custom built 4×4 vehicles allow us to access the most remote places where we avoid the more crowded routes of the Mara as well as to enjoy privacy during our safaris.
                      </p>
                      <p className="description-content">
                      
                      </p>                       
                    </div>
                    <div className="row justify-content-center mt-4 p-3">
                    <Link to="/Contact">
                          <button
                            type="button"
                            className="btn btn-cream col-12 "
                          >
                            BOOK WITH US
                          </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

              <div className="col-xl-6 order-xl-1">
                <div className="card ">
                  <div className="">
                    <div className=" border-0   pb-0 ">
                      <div className="carouselContainerLeft">

                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <footer className="footer">
          
        </footer>
      </div>
    </div>
  </div>

  )
}

export default Safari