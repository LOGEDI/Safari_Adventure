import React from "react";
import { Link } from "react-router-dom";
import destinationsHero from "../../../img/ngorongoro.jpg";
import iby from "../../../img/iby-iwacu_thumb.jpg";
import kigali from "../../../img/kigali_thumb.jpg";
import rwanda from "../../../img/rwanda_thumb.jpg";
import destinationBackground from "../../../img/destinations_background.jpg";
import locationicon from "../../../img/location-icon.png";
import separator from "../../../img/heading-separator.png";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";

const Rwanda = () => {
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

        {/*---------------------------------------------------- Description--------------------------------------------------- */}

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

              {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

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
                      <button className="btn btn-creamD  ">Uganda</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Rwanda">
                      <button className="btn btn-greenD ">Rwanda</button>
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

          <div className="container-fluid mt-3">
            <div className="row">
              <div className="cardDestinations">
                <div className="pageDescriptionContainerCenter  pt-md-4 pb-0 pb-md-4 p-md-3 p-3">
                  <h2 className="description-titleD text-center">RWANDA</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Also known as 'the land of a thousand hills’, Rwanda is a
                      landlocked country of lovely and various landscapes. The
                      Virunga volcanic mountains have high altitude forests,
                      world-famous mountain gorillas, and Lake Kivu offers
                      beautiful beaches, jutting peninsulas and an archipelago
                      of islands. Many visitors have been surprised by the fact
                      that Rwandans are now harmoniously living together only 15
                      years after the genocide that threatened to shatter the
                      social fabric of the country. Rwandans are not only living
                      together today but they are striving to be recognized as
                      one people.
                    </p>

                    <p className="description-content">
                      Parc National des Volcans in the Virunga volcanoes is home
                      to the mountain gorillas to which Dian Fossey dedicated
                      her life. Nyungwe Forest is one of the largest montane
                      forests in Central Africa and is renowned for its large
                      troops of Columbus monkeys, chimpanzees, tracking of the
                      elusive golden monkey and rich variety of orchids that can
                      be seen on a nature walk within this tropical rain forest.
                      There is a variety of wildlife including the Akagera
                      National Park, the only Savannah park in the country with
                      large herds of elephant emerging from the woodland, hippo
                      and crocodile around the lake. Rwanda has a rich culture
                      with its second city, Butare, having one of the finest
                      cultural museums in Africa or visit one of the genocide
                      memorial sites where victims killed in Kigali are
                      remembered and on its outskirts are buried.
                    </p>
                  </div>
                  {/* <div className="row justify-content-center mt-4 p-3">
                    <button type="button" className="btn btn-cream text-center">
                      BOOK WITH US
                    </button>
                  </div> */}

                  <div className="row row-cols-5 justify-content-center text-center mt-4">
                    <div className="">
                      <img
                        className="iconsdestinations"
                        src={destinationsicon}
                      ></img>
                      <p className="desticontitle">PLACES TO VISIT</p>
                      <p className="desticoncontent">3 Locations</p>
                    </div>
                    <div className="">
                      <img className="iconsdestinations" src={activity}></img>
                      <p className="desticontitle">EXPERIENCES</p>
                      <p className="desticoncontent">
                        City Tour, Trekking, Animal Tracking, Cultural Visits
                      </p>
                    </div>
                    <div className="">
                      <img className="iconsdestinations" src={tripdays}></img>
                      <p className="desticontitle">INCLUDED IN:</p>
                      <p className="desticoncontent">RWANDDA GORILLA TREK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="destinationsCards container-fluid">
            <div className="row g-3 justify-content-center">
              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={iby}
                        alt="Iby Iwaku"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Iby Iwacu Cultural Village
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Rwanda
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
                        src={kigali}
                        alt="Kigali"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">Kigali City</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Rwanda
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
                        src={rwanda}
                        alt="Card image cap"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Volcanoes National Park
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Rwanda
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footerDestinations">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6 m-auto text-center"></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Rwanda;
