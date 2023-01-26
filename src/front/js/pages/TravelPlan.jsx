import React from "react";
import Carousel from "react-bootstrap/Carousel";

import travelplanHero from "../../img/travelplan-hero.jpg";
import carousel1 from "../../img/travel-plan1.jpg";
import carousel2 from "../../img/travel-plan2.jpg";
import carousel3 from "../../img/travel-plan4.jpg";
import travelplanLink1 from "../../img/travelplan4.jpg";
import travelplanLink2 from "../../img/travelplan5.jpg";
import travelplanLink3 from "../../img/travelplan6.jpg";
const TravelPlan = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
        <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${travelplanHero})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-fluid d-flex align-items-center">
            <div className="text-on-image">
              <h2 className="page-title">PLAN YOUR TRIP</h2>
              <span className="page-subtitle">
                Contact us for a taylor made itinerary
              </span>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile ">
                <div className="pageDescriptionContainerRigth  pt-md-4 pb-0 pb-md-4">
                  <h2 className="description-title">DISCOVER MORE</h2>
                  <div className="description-content">
                    <p className="description-content">
                      We can organize all the logistics for your trip to the
                      Maasai Mara as well as any itinerary in East Africa.
                    </p>
                    <p className="description-content">
                      All our proposals are custom made. Based on your interests
                      we will present you different proposals whether it is
                      mostly wildlife, ethnical or combined with the coast.
                    </p>
                    <p className="description-content">
                      The perfect family trip or the ideal honeymoon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 order-xl-1">
              <div className="card ">
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

       {/*---------------------------------------------------- Picture links--------------------------------------------------- */}

      <div className="experiencePagePicLinks container-fluid">
        <div className="row g-3 mt-5">
          <div className="col-xl-4 col-md-6 order-xl-1 mb-5 mb-xl-0">
            <div className="experiencePagePicLinksIndividual ">
              
              <h4 className="experiencePagePicLinksTextTitle text-center">
                COAST
              </h4>
              
                <img
                  className="col-12  transition hover-card"
                  src={travelplanLink1}
                  alt="example"
                />
              
              <p className="experiencePagePicLinksTextSubtitle text-center">
              Diani, Lamu & Mombasa
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 order-xl-2 mb-5 mb-xl-0">
            <div className="experiencePagePicLinksIndividual ">
             
              <h4 className="experiencePagePicLinksTextTitle text-center">
              TANZANIA
              </h4>
              
                <img
                  className="col-12 transition hover-card"
                  src={travelplanLink2}
                  alt="example"
                />
             
              <p className="experiencePagePicLinksTextSubtitle text-center">
              Zanzibar & Ngorongoro
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 order-xl-3 mb-5 mb-xl-0">
            <div className="experiencePagePicLinksIndividual ">
              <h4 className="experiencePagePicLinksTextTitle text-center">
              GORILLAS
              </h4>
              
                <img
                  className="col-12 transition hover-card"
                  src={travelplanLink3}
                  alt="example"
                />
              
              <p className="experiencePagePicLinksTextSubtitle text-center">
              Virunga, Best Hotels & more
              </p>
            </div>
          </div>

          
        </div>
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default TravelPlan;
