import React from 'react'
import { Link } from 'react-router-dom'
import SafariMain from "../../img/SafariMain.jpeg";
import Safari1 from "../../img/Safari1.jpeg";
import Safari2 from "../../img/Safari2.jpeg";
import Safari3 from "../../img/Safari3.jpeg";

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
                  <div className="pageDescriptionContainer  pt-md-4 pb-0 pb-md-4">
                    <h2 className="description-title">
                    FEEL OUR WILDLIFE
                    </h2>
                    <div className="description-content">
                      <p className="description-content">
                      Our privileged location inside the National Reserve together with our philosophy of tracking and searching for our own wildlife sightings far from the transited areas, makes the Enkewa safari experience amongst the best in the Masai Mara. We are located in superb big5 country with access to 4 different lion prides within minutes from camp as well as the best leopard territory inside the reserve. The Black rhino density in our area is the highest in the entire Maasai Mara-Serengeti Eco-System. For centuries the Maasai tribe has learned to coexist with its surroundings and its wildlife and our experienced and skilled Maasai spotters –trackers- will read all signs in order to find the best opportunities to observe the wildlife of the African Savannah. Our custom built 4×4 vehicles allow us to access the most remote places where we avoid the more crowded routes of the Mara as well as to enjoy privacy during our safaris.
                      </p>
                      <p className="description-content">
                      
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
                                  src={Safari1}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src={Safari2}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src={Safari3}
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
  )
}

export default Safari