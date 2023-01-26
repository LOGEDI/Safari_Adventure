import React from "react";
import { Link } from "react-router-dom";
import destinationsHero from "../../../img/ngorongoro.jpg";
import batwa from "../../../img/batwatribe_thumb.jpg";
import bwindi from "../../../img/uganda_thumb.jpg";
import destinationBackground from "../../../img/destinations_background.jpg";
import locationicon from "../../../img/location-icon.png";
import separator from "../../../img/heading-separator.png";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";

const Uganda = () => {
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
                      <button className="btn btn-creamD ">Kenya</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Ethiopia">
                      <button className="btn btn-creamD ">Ethiopia</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Uganda">
                      <button className="btn btn-greenD  ">Uganda</button>
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
                  <h2 className="description-titleD text-center">UGANDA</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Winston Churchill called Uganda 'the pearl of Africa’,
                      presumably basing his opinion on the country’s great
                      natural beauty. From the moment the visitor lands at
                      Entebbe’s international airport, with its breathtaking
                      equatorial location on the forested shore of island-strewn
                      Lake Victoria, it is clear that Uganda is no ordinary
                      safari destination. Uganda is where the East African
                      savannah meets the West African jungle. In this lush
                      country, one can observe lions prowling the open plains,
                      track chimpanzees through the rain forest undergrowth,
                      then navigate tropical channels teeming with hippos and
                      crocs before setting off into the misty mountains to stare
                      deep into the eyes of a mountain gorilla.
                    </p>

                    <p className="description-content">
                      The most profound attraction in Uganda are the silver-back
                      and black-back Mountain Gorillas, as well as other
                      primates including chimpanzees and Golden Monkeys, all
                      found in Bwindi Impenetrable Forests, Mgahinga National
                      Park and on Ngamba Island. The mighty volcanic and
                      non-volcanic mountains are a major attraction for hiking
                      activities. With almost a third of the country covered by
                      water, the fresh water lakes offer opportunities for water
                      activities and sports. Lake Victoria, the largest in
                      Africa, dominates the southern border of the country and
                      offers sport fishing, sailing and lake cruises. The
                      Eastern region is a must visit for all water activities
                      and adventurous visitors with boat rides, white water
                      rafting, bungee jumping in a variety of destinations.
                      Increasingly popular for adventurers is white water
                      rafting on the River Nile.
                    </p>
                  </div>

                  {/*---------------------------------------------------- Icons--------------------------------------------------- */}

                  <div className="row justify-content-center text-center mt-4">
                    <div className="col">
                      <img
                        className="iconsdestinations"
                        src={destinationsicon}
                      ></img>
                      <p className="desticontitle">PLACES TO VISIT</p>
                      <p className="desticoncontent">3 Locations</p>
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
                      <p className="desticoncontent">EAST AFRICAN SAFARI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Cards--------------------------------------------------- */}

          <div className="destinationsCards container-fluid">
            <div className="row g-3 justify-content-center">
              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0 text-center">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={batwa}
                        alt="Batwa "
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">
                          Batwa Trival Lands
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Uganda
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0 text-center">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={bwindi}
                        alt="Bwindi"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">
                          Gorilla Forest, Bwindi
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Uganda
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Footer for spacing--------------------------------------------------- */}

          <footer className="footerDestinations"></footer>
        </div>
      </div>
    </div>
  );
};

export default Uganda;
