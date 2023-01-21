import React from "react";
import { Link } from "react-router-dom";
import experienceHero from "../../img/maasai-hero2.jpg";
import carousel1 from "../../img/carousel1-Experience-pic1.jpg";
import carousel2 from "../../img/carousel1-Experience-pic2.jpg";
import carousel3 from "../../img/carousel1-Experience-pic3.jpg";
import Denis from "../../img/SafariMain.jpeg";

const AboutUs = () => {
  return (
    <div className="pagesBackground">
      <div>
        <div>
          <div className="main-content">
            <div
              className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                // minHeight: "500px",
                backgroundImage: `url(${experienceHero})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="container-fluid d-flex align-items-center">
                <div className="text-on-image">
                  <h2 className="page-title">MAASAI CULTURAL VISITS</h2>
                  <span className="page-subtitle">
                    Traditions, ceremonies and ancient knowledge
                  </span>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Description--------------------------------------------------- */}

            <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
                  <div className="card card-profile ">
                    <div className="pageDescriptionContainer  pt-md-4 pb-0 pb-md-4">
                      <h2 className="description-title">
                        APPROACH THE REALITY
                      </h2>
                      <div className="description-content">
                        <p className="description-content">
                          At Safari Adventure we are fascinated with the Maasai
                          culture and we are concerned about the importance of
                          having a full comprehension of its traditions and
                          ceremonies, oral history, rituals and ancient
                          knowledge. We have a deep respect for the Maasai tribe
                          and admire how they have proudly kept their customs
                          and how they coexist with the surrounding nature while
                          keeping it intact.
                        </p>
                        <p className="description-content">
                          During your stay at Safari Adventure you will get as
                          close to the Maasai culture as you wish, presented by
                          local people who will share their traditions.
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
                        <div className="carouselContainer">
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

export default AboutUs;
