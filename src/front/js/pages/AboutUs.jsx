import React from "react";
import { Link } from "react-router-dom";
import experienceHero from "../../img/Experience-hero.jpg";

const AboutUs = () => {
  return (
    <div className="pagesBackground">
      <div>
        <div>
          <div className="main-content">
            <div
              className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                minHeight: "500px",
                backgroundImage: `url(${experienceHero})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container-fluid d-flex align-items-center">
                <div className="text-on-image">
                  <h2 className="page-title">EXPERIENCE</h2>
                  <span className="page-subtitle">
                    We offer a variety of activities
                  </span>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Profile content--------------------------------------------------- */}

            <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
                  <div className="card card-profile ">
                    <div className="pageDescriptionContainer  pt-md-4 pb-0 pb-md-4">
                      <h2 className="description-title">FEEL THE ADVENTURE</h2>
                      <div className="description-content">
                        <p className="description-content">
                          At Safari Adventure we offer a variety of activities.
                          Besides tracking the big 5, enjoying masai mara
                          birdlife and its unique and diverse landscapes, we can
                          also access the waterfalls. A hot-air balloon can also
                          be organized and for those interested in the local
                          Masai culture we could visit a traditional Masai
                          village guided by one of our staff members as well as
                          a visit to the local market or the community projects
                          we support.
                        </p>
                        <p className="description-content">
                          Bush breakfast/lunches as well as sundowners are also
                          part of our itineraries.
                        </p>
                        <p className="description-content">
                          Safari Adventure is children friendly and different
                          programs for children can be arranged.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*---------------------------------------------------- EDIT PROFILE FORM--------------------------------------------------- */}

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
                                
                                    src="https://www.enkewa.com/wp-content/uploads/2021/11/2-2.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    
                                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/39.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    
                                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/40.jpg"
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

          <div className="experiencePagePicLinks container-fluid">
            <div className="row g-3 mt-5">
              <div className="col-xl-3 order-xl-1 mb-5 mb-xl-0">
                <div className="experiencePagePicLinksIndividual ">
                  <br/>
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
                  <br/>
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
                  <br/>
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

export default AboutUs;
