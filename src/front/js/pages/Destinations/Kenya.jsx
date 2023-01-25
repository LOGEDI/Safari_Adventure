import React from "react";
import { Link } from "react-router-dom";
import destinationsHero from "../../../img/ngorongoro.jpg";
import amboseli from "../../../img/amboseli_thumb.jpg";
import maasai from "../../../img/maasaimara_thumb.jpg";
import nairobi from "../../../img/nairobi_thumb.jpg";
import nakuru from "../../../img/lakenakuru_thumb.jpg";
import samburu from "../../../img/samburu_thumb.jpg";
import destinationBackground from "../../../img/destinations_background.jpg";
import locationicon from "../../../img/location-icon.png";
import separator from "../../../img/heading-separator.png";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";

const Kenya = () => {
  return (
    <div className="">
      <div className="main-content">
        <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${destinationsHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-fluid d-flex align-items-center">
            <div className="text-on-image">
              <h2 className="page-title">Destinations</h2>
              <span className="page-subtitle">
                Enjoy the beauty and quiet of Africa
              </span>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------- Description-title-------------------------------------------------- */}

        <div
          className="destinationsBackground pt-3"
          style={{
            backgroundImage: `url(${destinationBackground})`,
          }}
        >
          <div className="container-fluid ">
            <div className="row pageDescriptionContainerCenter">
              <div className="col-xl-5 order-xl-1 mb-5 mb-xl-0">
                <div className="cardDestinations">
                  <div className="  pb-0 pb-md-4">
                    <h1 className="destinations-titleD mt-4">DESTINATIONS</h1>
                    <p className="destinations-subtitleD">
                      Discover Story-worthy Places
                    </p>
                    <img className="separator mr-3" src={separator}></img>
                  </div>
                </div>
              </div>

              {/*---------------------------------------------------- Links--------------------------------------------------- */}

              <div className="col-xl-7 order-xl-2">
                <div className="row col-xl-12  p-0 destinationButons">
                  <div className="col-xl-2 col-md-4 col-sm-6 mt-4 text-center ">
                    <Link to="/Destinations">
                      <button className="btn btn-creamD ">All</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6 mt-4 text-center">
                    <Link to="/Kenya">
                      <button className="btn btn-greenD ">Kenya</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Ethiopia">
                      <button className="btn btn-creamD ">Ethiopia</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Uganda">
                      <button className="btn btn-creamD  ">Uganda</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Rwanda">
                      <button className="btn btn-creamD ">Rwanda</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Tanzania">
                      <button className="btn btn-creamD ">Tanzania</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Description--------------------------------------------------- */}

          <div className="container-fluid mt-3">
            <div className="row">
              <div className="cardDestinations">
                <div className="pageDescriptionContainerCenter  pt-md-4 pb-0 pb-md-4 p-md-3 p-3">
                  <h2 className="description-titleD text-center">KENYA</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Kenya is a country of great natural beauty. Well known as
                      a safari destination, there are areas not fully explored
                      and the opportunity to get off the beaten track away from
                      the crowds. The wide open spaces that stretch as far as
                      the eye can see are breathtaking. The variety of
                      wilderness areas including, National Parks & Reserves and
                      private ranches & conservation areas offer you the freedom
                      to step out of your safari vehicle and enjoy a variety of
                      activities. This is an exciting destination for all ages
                      and fitness levels, where a safari can be as individual as
                      you are, and can satisfy your own personal needs and
                      interests.
                    </p>

                    <p className="description-content">
                      A safari is not all about wildlife viewing – authentic
                      encounters with everyday life is an enlightening
                      experience. Kenya has a culture born of countless sources.
                      This region has been crossed by the paths of a long and
                      complex history. From the prehistoric records of early man
                      to the present day, Kenya has been a land of unending
                      change, contrasts and diversity. Kenya has drawn on all of
                      these influences to develop its own unique culture.
                    </p>
                  </div>

                  {/*---------------------------------------------------- icons--------------------------------------------------- */}

                  <div className="row  justify-content-center text-center mt-4">
                    <div className="col">
                      <img
                        className="iconsdestinations"
                        src={destinationsicon}
                      ></img>
                      <p className="desticontitle">PLACES TO VISIT</p>
                      <p className="desticoncontent">5 Locations</p>
                    </div>
                    <div className="col">
                      <img className="iconsdestinations" src={activity}></img>
                      <p className="desticontitle">EXPERIENCES</p>
                      <p className="desticoncontent">
                        City Tour, Trekking, Animal Tracking, Cultural Visits
                      </p>
                    </div>
                    <div className="col">
                      <img className="iconsdestinations" src={tripdays}></img>
                      <p className="desticontitle">INCLUDED IN:</p>
                      <p className="desticoncontent">CLASSSIC KENYAN SAFARI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Cards--------------------------------------------------- */}

          <div className="destinationsCards container-fluid">
            <div className="row g-3 justify-content-center">
              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinationsborder-2">
                      <img
                        className="destimg card-img-top"
                        src={amboseli}
                        alt="Amboseli"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Amboseli National Park
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Kenya
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={maasai}
                        alt="Maasai Mara"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">Maasai Mara</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Kenya
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={nairobi}
                        alt="Nairobi"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Nairobi City
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Kenya
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={nakuru}
                        alt="Nakuru"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Nakuru National Park
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Kenya
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={samburu}
                        alt="Card image cap"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Samburu Game Reserve
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Kenya
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Footer for spacing--------------------------------------------------- */}

          <footer className="footerDestinations"> </footer>
        </div>
      </div>
    </div>
  );
};

export default Kenya;
