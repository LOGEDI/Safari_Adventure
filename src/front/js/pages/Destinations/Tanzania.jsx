import React from "react";
import { Link } from "react-router-dom";
import destinationsHero from "../../../img/ngorongoro.jpg";
import ngorongoro from "../../../img/ngorongoro_thumb.jpg";
import serengeti from "../../../img/serengeti_thumb.jpg";
import tarangire from "../../../img/tarangire_thumb.jpg";
import destinationBackground from "../../../img/destinations_background.jpg";
import locationicon from "../../../img/location-icon.png";
import separator from "../../../img/heading-separator.png";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";

const Tanzania = () => {
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
                      <button className="btn btn-creamD ">Rwanda</button>
                    </Link>
                  </div>
                  <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                    <Link to="/Tanzania">
                      <button className="btn btn-greenD ">Tanzania</button>
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
                  <h2 className="description-titleD text-center">TANZANIA</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Tanzania is home to some of Africa’s most alluring
                      destinations. The Serengeti’s wildebeest migration along
                      an infinite savanna; the incongruous snow of Mt
                      Kilimanjaro – Africa’s tallest mountain at 5,895m
                      (19,341ft); the crater bottom of Ngorongoro National Park
                      teaming with wildlife; the Swahili coast and pristine
                      beaches along the spice islands of Zanzibar where
                      fishermen still plough the turquoise waters in traditional
                      wooden sailboats; Selous – Africa’s largest protected area
                      and larger than Switzerland; Ruaha and Katavi – insider
                      tips for serious safari-goers; Mahale and Gombe – prime
                      destinations for seeing chimpanzees in the wild.
                    </p>

                    <p className="description-content">
                      Throughout, Tanzania offers travelers an array of options,
                      set against the backdrop of a cultural mosaic. Tanzania’s
                      coastline was a favored stop on ancient trading routes
                      between the Indian sub-continent and the Middle-East.
                      Spices, jewels and slaves once passed through, bringing
                      with them a melange of cultural riches that remain today.
                      The language of Swahili was born here, and old mosques,
                      coral palaces and pearly-white beaches still remain. While
                      most visitors head straight for the famed northern
                      wildlife-watching circuit, followed by time relaxing on
                      Zanzibar’s beaches, Tanzania has much more to offer anyone
                      with the time and inclination to head off the beaten path.
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
                      <p className="desticoncontent">SERENGETI TRAILS</p>
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
                        src={ngorongoro}
                        alt="ngorongoro"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Ngorongoro Crater
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Tanzania
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
                        src={serengeti}
                        alt="Card image cap"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Serengeti National Park
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Tanzania
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
                        src={tarangire}
                        alt="Card image cap"
                      ></img>
                      <div className="destinations-card-body">
                        <h4 className="destinations-card-title">
                          Tarangire National Park
                        </h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Tanzania
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

export default Tanzania;
