import React from "react";
import { Link } from "react-router-dom";
import balloonHero from "../../../img/balloon-hero.jpg";
import carousel1 from "../../../img/carousel1-balloon-pic1.jpg";
import carousel2 from "../../../img/carousel1-balloon-pic2.jpg";
import carousel3 from "../../../img/carousel1-balloon-pic3.jpg";

const BalloonSafari = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
        <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${balloonHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-fluid d-flex align-items-center">
            <div className="text-on-image">
              <h2 className="page-title">BALLOON SAFARI</h2>
              <span className="page-subtitle">
                A once-in-a-lifetime magical experience
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
                  <h2 className="description-title">FLOAT OVER THE MARA</h2>
                  <div className="description-content">
                    <p className="description-content">
                      A once-in-a-lifetime magical experience that will be
                      permanently etched in your travel memories. Give yourself
                      a treat and feel the immensity of the Mara at its best
                      while smoothly flying above the Savannah and its wildlife.
                    </p>
                    <p className="description-content">
                      Float in the sky, drifting with the breeze of the wind,
                      overlooking the plains, just in time to experience a
                      breathtaking sunrise and see the reserve from a bird’s eye
                      view.
                    </p>
                  </div>
                  <div className="row justify-content-center mt-4 p-3">
                    <button type="button" className="btn btn-cream text-center">
                      BOOK WITH US
                    </button>
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
                      <div
                        id="carouselExampleFade"
                        className=" carousel slide carousel-fade"
                        data-bs-ride="carousel"
                      >
                        <div className=" carousel-inner">
                          <div className=" carouselContent2">
                            <div className="carousel-item active">
                              <img
                                src={carousel1}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={carousel2}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={carousel3}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------Aditional footer for spacing----------------------------------------- */}
      <footer className="footer"></footer>
    </div>
  );
};

export default BalloonSafari;
