import React from "react";
import { Link } from "react-router-dom";
import CampMain from "../../img/CampMain.jpeg";
import Camp1 from "../../img/Camp1.webp";
import Camp2 from "../../img/Camp2.jpeg";
import Camp3 from "../../img/Camp3.png";

const Camp = () => {
  return (
    
      <div className="pagesBackground">
        <div>
          <div>
            <div className="main-content">
              <div
                className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                  
                  backgroundImage: `url(${CampMain})`,
  
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container-fluid d-flex align-items-center">
                  <div className="text-on-image">
                    <h2 className="page-title">THE CAMP</h2>
                    <span className="page-subtitle">
                    Enkewa Camp, an owner-run eco camp
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
                        <h2 className="description-title">FEEL AT HOME</h2>
                        <div className="description-content">
                          <p className="description-content">
                          Enkewa Camp is a small, exclusive, luxury and all-inclusive tented camp in the heart of the least explored area of the Maasai Mara. Enkewa Camp, an owner-run camp, is based on an eco-sustainable concept with a knowledgeable, experienced and professional team formed by local Maasai.


                          </p>
                          <p className="description-content">
                          The Camp has a capacity of 7 tents, one Mess tent and a Lounge area. The tents are comfortable and spacious with views over the Savannah.
                          </p>
                          <p className="description-content">
                          Our priority is that our clients feel at home away from home and enjoy a unique and authentic wildlife experience far from the transited areas.
                          </p>
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
                                  
                                      src={Camp1}
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      
                                      src={Camp2}
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      
                                      src={Camp3}
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
  
  {/*---------------------------------------------------- Picture links--------------------------------------------------- */}
  
            <div className="experiencePagePicLinks container-fluid">
              <div className="row g-3 mt-5">
                <div className="col-xl-3 order-xl-1 mb-5 mb-xl-0">
                  <div className="experiencePagePicLinksIndividual ">
                    <h4 className="experiencePagePicLinksTextTitle text-center">
                      Sleep
                    </h4>
                    <Link to="/Sleep">
                      <img
                        className="col-12"
                        src="https://cdn.tatlerasia.com/asiatatler/i/hk/2018/11/05120751-fc76d1d64136a80f90f079e53eec0d18_cover_1200x899.jpg"
                        alt="example"
                      />
                    </Link>
                    <p className="experiencePagePicLinksTextSubtitle text-center">
                     Sleep In Luxury
                    </p>
                  </div>
                </div>
  
                <div className="col-xl-3 order-xl-2 mb-5 mb-xl-0">
                  <div className="experiencePagePicLinksIndividual ">
                    <h4 className="experiencePagePicLinksTextTitle text-center">
                      Eat
                    </h4>
                    <Link to="/Eat">
                      <img
                        className="col-12"
                        src="https://ychef.files.bbci.co.uk/1200x899/p09wrjyz.jpg"
                        alt="example"
                      />
                    </Link>
                    <p className="experiencePagePicLinksTextSubtitle text-center">
                    Homemade menus prepared with organic packages
                    </p>
                  </div>
                </div>
  
                <div className="col-xl-3 order-xl-2 mb-5 mb-xl-0">
                  <div className="experiencePagePicLinksIndividual ">
                    <h4 className="experiencePagePicLinksTextTitle text-center">
                      Relax
                    </h4>
                    <Link to="/Relax">
                      <img
                        className="col-12"
                        src="https://images.traum-ferienwohnungen.de/314484/14311998/46/villa-rogoznica-aussenaufnahme-1.jpg"
                        alt="example"
                      />
                    </Link>
                    <p className="experiencePagePicLinksTextSubtitle text-center">
                    Surrounded by stillness and calmness
                    </p>
                  </div>
                </div>
  
                <div className="col-xl-3 order-xl-3 mb-5 mb-xl-0">
                  <div className="experiencePagePicLinksIndividual ">
                    <h4 className="experiencePagePicLinksTextTitle text-center">
                      Other Services
                    </h4>
                    <Link to="/OtherServices">
                      <img
                        className="col-12"
                        src="https://www.coxandkings.co.uk/wp-content/uploads/2012/12/kenya-feature-1-1200x900.jpg"
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

export default Camp;