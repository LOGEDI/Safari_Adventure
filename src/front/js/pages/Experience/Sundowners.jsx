import React from "react";
import { Link } from "react-router-dom";
import sundownersHero from "../../../img/sundowners-hero2.jpg";
import carousel1 from "../../../img/carousel1-sundowners-pic1.jpg";
import carousel2 from "../../../img/carousel1-sundowners-pic2.jpg";
import carousel3 from "../../../img/carousel1-sundowners-pic3.jpg";

const Sundowners = () => {
  return (
    <div className="pagesBackground">
      <div>
        <div>
          <div className="main-content">
            <div
              className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                // minHeight: "500px",
                backgroundImage: `url(${sundownersHero})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="container-fluid d-flex align-items-center">
                <div className="text-on-image">
                  <h2 className="page-title">SUNDOWNERS</h2>
                  <span className="page-subtitle">A Safari tradition</span>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Description--------------------------------------------------- */}

            <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-xl-6 order-xl-1 mb-5 mb-xl-0">
                  <div className="card card-profile ">
                    <div className="pageDescriptionContainerLeft  pt-md-4 pb-0 pb-md-4">
                      <h2 className="description-title">
                        ADMIRE THE AFRICAN SUN
                      </h2>
                      <div className="description-content">
                        <p className="description-content">
                          Sundowners are a safari tradition set to begin when
                          the sun starts to descend. We combine an afternoon
                          game drive with one of our stunningly scenic sites and
                          sunset, where chairs are set up, drinks and snacks are
                          served and nature brings its magic.
                        </p>
                        <p className="description-content">
                          It’s one of those moments that creates a unique
                          atmosphere between guest, guide spotter and nature.
                        </p>
                      </div>
                      <div className="row justify-content-center mt-4 p-3">
                        <button
                          type="button"
                          className="btn btn-cream text-center"
                        >
                          BOOK WITH US
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
                                <span className="visually-hidden">
                                  Previous
                                </span>
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

          <footer className="footer">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6 m-auto text-center"></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Sundowners;
