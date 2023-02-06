import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import sundownersHero from "../../../img/photogallery-hero1.jpg";
import carousel1 from "../../../img/photogallery-1.jpg";
import carousel2 from "../../../img/photogallery-2.jpg";
import carousel3 from "../../../img/photogallery-3.jpg";
import carousel4 from "../../../img/photogallery-4.jpg";
import carousel5 from "../../../img/photogallery-5.jpg";
import carousel6 from "../../../img/photogallery-6.jpg";
import carousel7 from "../../../img/photogallery-7.jpg";
import separator from "../../../img/heading-separator.png";

const PhotoGallery = () => {
  return (
    <div className="pagesBackground">
    <div className="main-content">

     <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${sundownersHero})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="container">
            <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
              <h2 className="page-title">PHOTO GALLERY</h2>
              <img className="separator1 " src={separator}></img>
              <h3 className="page-subtitle"> Worthy photos from our best photographers!</h3>
            </div>
          </div>
        </div>

      <div className="col-12 justify-content-center">
        <div className="card m-3 border-light">
          <div className="pageDescriptionContainerCenter container-fluid home">
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
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
          </div>
        </div>
      </div>

 {/*---------------------------------------------------- Description--------------------------------------------------- */}

 <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-xl-6 order-xl-1 mb-5 mb-xl-0">
              <div className="card card-profile ">
                <div className="pageDescriptionContainerLeft  pt-md-4 pb-0 pb-md-4">
                  <h2 className="description-title">BOOK AN EXPERIENCE</h2>
                  <div className="description-content">
                    <p className="description-content">
                    The Safary Adventure's invites you to participate in an
                unforgettable experience. Book now with one of our photographers
                and take home the best memories of our safary.
                    </p>
                    <p className="description-content">
                     
                    </p>
                  </div>
                  <div className="row justify-content-center mt-4 p-3">
                  <button
                      type="button"
                      className="btn btn-creamD text-center"
                    >
                      <Link to="/Contact" style={{ color: "white", textDecoration: 'none' }}>
                        BOOK WITH US
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

            <div className="col-xl-6 order-xl-2">
              <div className="card ">
                <div className="">
                  <div className=" border-0   pb-0 ">
                    <div className="carouselContainerRigth">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel5}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel6}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel7}
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




      
        
        {/*---------------------------------------------------- footer for spacing--------------------------------------------------- */}
        <footer className="footerDestinations"> </footer>
      
    </div>
    </div>
  );
};

export default PhotoGallery;
