import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import photoSafariHero from "../../../img/photoSafari-hero2.jpg";
import carousel1 from "../../../img/carousel1-photosafari-pic1.jpg";
import carousel2 from "../../../img/carousel1-photosafari-pic2.jpg";
import carousel3 from "../../../img/carousel1-photosafari-pic3.jpg";
import carousel4 from "../../../img/carousel1-photosafari-pic4.jpg";

const PhotoSafari = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
        <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${photoSafariHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-fluid d-flex align-items-center">
            <div className="text-on-image">
              <h2 className="page-title">PROFESSIONAL PHOTOGRAPHY SAFARI</h2>
              <span className="page-subtitle">Capture de moment</span>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------- Description--------------------------------------------------- */}

        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-xl-6 order-xl-1 mb-5 mb-xl-0">
              <div className="card card-profile ">
                <div className="pageDescriptionContainerLeft  pt-md-4 pb-0 pb-md-4">
                  <h2 className="description-title">CAPTURE THE MOMENT</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Safari Adventure is the ideal base for visitors who want
                      to photograph the Maasai Mara.
                    </p>
                    <p className="description-content">
                      Over the years and having accompanied many photographers
                      from all over the world, whether they are professional or
                      amateur, we have acquired solid experience in setting the
                      car in the best positions according to light, frame and
                      distance. We know how long it takes to find a good shot
                      and we are committed to do our best for you to succeed.
                    </p>
                    <p className="description-content">
                      Our custom build vehicles are open sided and with open
                      roofs.
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

            <div className="col-xl-6 order-xl-2">
              <div className="card ">
                <div className="">
                  <div className=" border-0   pb-0 ">
                    <div className="carouselContainerRigth">
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
      {/* ----------------------------------------------Aditional footer for spacing----------------------------------------- */}
      <footer className="footer"> </footer>
    </div>
  );
};

export default PhotoSafari;
