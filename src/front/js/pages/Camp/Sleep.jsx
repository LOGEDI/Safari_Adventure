import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import SleepMain from "../../../img/SleepMain.jpeg";
import carousel1 from "../../../img/Sleep1.jpeg";
import carousel2 from "../../../img/Sleep2.jpeg";
import carousel3 from "../../../img/Sleep3.jpeg";
import separator from "../../../img/heading-separator.png";
// need to make text go over image this will be done when it is merged
// need to add footer-

const Sleep = () => {
  return (
    <div className="pagesBackground">
      <div>
        <div>
          <div className="main-content">
            <div
              className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                // minHeight: "500px",
                backgroundImage: `url(${SleepMain})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="container">
                <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
                  <h2 className="page-title">SLEEP</h2>
                  <img className="separator1 " src={separator}></img>
                  <h3 className="page-subtitle">Sleep In Luxury</h3>
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
                        SLEEP IN COMFORTNESS
                      </h2>
                      <div className="description-content">
                        <p className="description-content">
                          Our luxury tents are all fully insect-proof, with
                          en-suite bathrooms and a flushing toilet, running cold
                          water and hot safari showers. A strategic placing of
                          the tents has been carefully chosen according to a
                          geobiology analysis (magnetic fields and radiations)
                          which will contribute to a better sleep. As per our
                          eco-friendly ethos we exclusively use solar energy –
                          provided 24 hours- so we can avoid use of generators
                          or pumps that might interfere with our guests’ rest.
                        </p>
                        <p className="description-content">
                          During your stay at Safari Adventure you will get as
                          close to perfect sleep as posible.
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

          {/* <div className="experiencePagePicLinks container-fluid">
          <div className="row g-3 mt-5">
            <div className="col-xl-3 order-xl-1 mb-5 mb-xl-0">
              <div className="experiencePagePicLinksIndividual ">
                <br />
                <h4 className="experiencePagePicLinksTextTitle text-center">
                  MAASAI CULTURAL VISITS
                </h4>
                <Link to="/Maasai">
                  <img
                    className="col-12"
                    src="https://www.enkewa.com/wp-content/uploads/2022/01/An%CC%83adir-en-Cultura-Masai.jpg"
                    alt="example"
                  />
                </Link>
                <p className="experiencePagePicLinksTextSubtitle text-center">
                  Approach the reality
                </p>
              </div>
            </div>

            <div className="col-xl-3 order-xl-2 mb-5 mb-xl-0">
              <div className="experiencePagePicLinksIndividual ">
                <br />
                <h4 className="experiencePagePicLinksTextTitle text-center">
                  SUNDOWNERS
                </h4>
                <Link to="/Sundowners">
                  <img
                    className="col-12"
                    src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_8654-web-scaled.jpg"
                    alt="example"
                  />
                </Link>
                <p className="experiencePagePicLinksTextSubtitle text-center">
                  Enjoy the Sun
                </p>
              </div>
            </div>

            <div className="col-xl-3 order-xl-3 mb-5 mb-xl-0">
              <div className="experiencePagePicLinksIndividual ">
                <h4 className="experiencePagePicLinksTextTitle text-center">
                  PROFESSIONAL SAFARI PHOTOGRAPHIC
                </h4>
                <Link to="/PhotoSafari">
                  <img
                    className="col-12"
                    src="https://www.enkewa.com/wp-content/uploads/2021/11/safari-23424.jpg"
                    alt="example"
                  />
                </Link>
                <p className="experiencePagePicLinksTextSubtitle text-center">
                  Capture the moment
                </p>
              </div>
            </div>

            <div className="col-xl-3 order-xl-4 mb-5 mb-xl-0">
              <div className="experiencePagePicLinksIndividual ">
                <br />
                <h4 className="experiencePagePicLinksTextTitle text-center">
                  BALLOON
                </h4>
                <Link to="/BalloonSafari">
                  <img
                    className="col-12"
                    src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_6931-scaled.jpg"
                    alt="example"
                  />
                </Link>
                <p className="experiencePagePicLinksTextSubtitle text-center">
                  Get the best view
                </p>
              </div>
            </div>
          </div>
        </div> */}

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

export default Sleep;
