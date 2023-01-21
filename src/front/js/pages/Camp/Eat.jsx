import React from "react";
import { Link } from "react-router-dom";
import EatMain from "../../../img/EatMain.jpeg";
import Eat1 from "../../../img/Eat1.jpeg";
import Eat2 from "../../../img/Eat2.jpeg";
import Eat3 from "../../../img/Eat3.webp";
// need to make text go over image this will be done when it is merged
// need to add footer

const Eat = () => {
  return (
    <div className="pagesBackground">
    <div>
      <div>
        <div className="main-content">
          <div
            className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              // minHeight: "500px",
              backgroundImage: `url(${EatMain})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="container-fluid d-flex align-items-center">
              <div className="text-on-image">
                <h2 className="page-title">EAT </h2>
                <span className="page-subtitle">
                Homemade menus prepared with organic packages
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
                     EAT ORGANIC DELECICACIES
                    </h2>
                    <div className="description-content">
                      <p className="description-content">
                      An unforgettable safari experience also requires great food. Our chefs are the ones that will make your culinary experience remarkable. Homemade menus prepared with organic packages according to any diet requirements that our guests might have. No buffet is served.
                      </p>
                      <p className="description-content">
                      Our delicious picnic bush breakfasts and lunches in carefully selected sites will be part of your unforgettable safari memories.
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
                                  src={Eat1}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src={Eat2}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src={Eat3}
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

export default Eat;
