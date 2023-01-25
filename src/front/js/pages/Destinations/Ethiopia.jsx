import React from "react";
import { Link } from "react-router-dom";
import destinationsHero from "../../../img/ngorongoro.jpg";
import addis from "../../../img/addiscity_thumb.jpg";
import axum from "../../../img/axum_thumb.jpg";
import bahir from "../../../img/bahirdar_thumb.jpg";
import gondar from "../../../img/gondar_thumb.jpg";
import hawzen from "../../../img/hawzen_thumb.jpg";
import lalibela from "../../../img/Lalibela_thumb.jpg";
import destinationBackground from "../../../img/destinations_background.jpg";
import locationicon from "../../../img/location-icon.png";
import separator from "../../../img/heading-separator.png";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";

const Ethiopia = () => {
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
                      <button className="btn btn-greenD ">Ethiopia</button>
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
                  <h2 className="description-titleD text-center">ETHIOPIA</h2>
                  <div className="description-content">
                    <p className="description-content">
                      Ethiopia has been praised for its outstanding natural
                      beauty, dramatic landscapes and ancient culture, its
                      fertile national parks, 3,000-year-old archeological
                      history and nine UNESCO world heritage sites. A visit to
                      any part of Ethiopia can reveal it to be an amazing
                      tourist destination. In historical terms, it has the
                      longest archaeological record of any country on earth; in
                      religious terms it was only the second country in the West
                      to adopt Christianity, and natural terms, it is uniquely
                      diversified climatic and landscape condition, making it a
                      habitat for highest number of endemic species and more
                      birds that any other country in the continent, Africa.
                    </p>

                    <p className="description-content">
                      With a great cultural diversity, Ethiopia retains its own
                      distinctive language, its cuisine and its own calendar and
                      clock. Each experience stirs the soul, each moment when
                      Ethiopia’s essence enters all those who experience it.
                      It's time to brush up on your Amharic, the national
                      language of Ethiopia, because the Ethiopia was named as
                      the World's Best Tourism Destination for 2015 by the
                      European Council on Tourism and Trade.
                    </p>
                  </div>
                  {/*---------------------------------------------------- Icons--------------------------------------------------- */}

                  <div className="row  justify-content-center text-center mt-4">
                    <div className="col">
                      <img
                        className="iconsdestinations"
                        src={destinationsicon}
                      ></img>
                      <p className="desticontitle">PLACES TO VISIT</p>
                      <p className="desticoncontent">6 Locations</p>
                    </div>
                    <div className="col">
                      <img className="iconsdestinations" src={activity}></img>
                      <p className="desticontitle">EXPERIENCES</p>
                      <p className="desticoncontent">City Tour, Site Visits</p>
                    </div>
                    <div className="col">
                      <img className="iconsdestinations" src={tripdays}></img>
                      <p className="desticontitle">INCLUDED IN:</p>
                      <p className="desticoncontent">ETHIOPIAN TOUR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Cards--------------------------------------------------- */}

          <div className="destinationsCards container-fluid">
            <div className="row g-3 justify-content-center">
              <div className="col-xl-3 col-md-6  mb-5 mb-xl-0 text-center">
                <div className="destinationsCardsIndividual ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={addis}
                        alt="Addis Ababa"
                      ></img>

                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Addis Ababa</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0 text-center">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinationsborder-2">
                      <img
                        className="destimg card-img-top"
                        src={axum}
                        alt="Axum"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Axum</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0 text-center">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2 ">
                      <img
                        className="destimg card-img-top"
                        src={bahir}
                        alt="Bahir Dar"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Bahir Dar</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
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
                        src={gondar}
                        alt="Gondar"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Gondar</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
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
                        src={hawzen}
                        alt="Hawzen"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Hawzen</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
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
                        src={lalibela}
                        alt="Lalibella"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Lalibela</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0 text-center">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <div className="destinationthumb cardDestinations border-2">
                      <img
                        className="destimg card-img-top"
                        src={addis}
                        alt="Addis Ababa"
                      ></img>
                      <div className="destinations-card-body text-start">
                        <h4 className="destinations-card-title">Addis Ababa</h4>
                        <h5 className="destinations-card-text">
                          <img
                            className="destinationicon"
                            src={locationicon}
                          ></img>
                          Ethiopia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/*---------------------------------------------------- footer for spacing--------------------------------------------------- */}
          <footer className="footerDestinations"> </footer>
        </div>
      </div>
    </div>
  );
};

export default Ethiopia;
