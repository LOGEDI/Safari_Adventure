import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import aboutusHero from "../../img/aboutus-hero.jpg";

import carousel1 from "../../img/Aboutus-1.jpg";
import carousel2 from "../../img/aboutus-2.jpg";
import carousel3 from "../../img/aboutus-3.jpg";
import separator from "../../img/heading-separator.png";

const AboutUs = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
        <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${aboutusHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
              <h2 className="page-title">ABOUT US</h2>
              <img className="separator1 " src={separator}></img>
              <h3 className="page-subtitle">
                Eager to share our authentic safari experience
              </h3>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------- Description--------------------------------------------------- */}

        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-xl-6 order-xl-1 mb-5 mb-xl-0">
              <div className="card card-profile ">
                <div className="pageDescriptionContainerLeft  pt-md-4 pb-0 pb-md-4">
                  <h2 className="description-title">ABOUT US</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Our main goal is to preserve and maintain the essence of
                      Maasai Mara as it has been for generations. That is why
                      our mission is to make our clients experience a unique
                      safari in which the main characteristic is authenticity,
                      always under the respect and care of the ecosystem.
                    </p>
                    <p className="description-content">
                      With an eco luxury Camp and its privileged location within
                      the reserve and away from the crowds, together with the
                      experience of our incredible guides and observers, it
                      guarantees the most incredible sightings in almost
                      absolute privacy in the best Big5 territory of all the
                      Maasai Mara.
                    </p>
                  </div>
                  <div className="row justify-content-center mt-4 p-3">
                    <button
                      type="button"
                      className="btn btn-creamD text-center"
                    >
                      <Link to="/Contact" style={{ color: "white", textDecoration: 'none'}}>
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
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center"></div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
