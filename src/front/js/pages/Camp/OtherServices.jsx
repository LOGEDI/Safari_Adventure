import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../../img/ContactMain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import separator from "../../../img/heading-separator.png";
// need to make text go over image this will be done when it is merged
// need to add footer

const OtherServices = () => {
  
  return (
    <div className="page-header">
      <div className="pagesBackground">
        <div>
          <div>
            <div className="main-content">
              <div
                className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                  backgroundImage: `url(${Contact})`,

                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
                    <h2 className="page-title">OTHER SERVICES & AMENITIES</h2>
                    <img className="separator1 " src={separator}></img>
                    <h3 className="page-subtitle">Safari Adventures</h3>
                  </div>
                </div>
              </div>

                {/*---------------------------------------------------- Left--------------------------------------------------- */}

              <div className="container-fluid ">
                <div className="row mt-5 justify-content-center">
                  <div>
                    <div className="container-fluid ">
                      <div className="row pageDescriptionContainerCenter">
                        <div className="col-xl-6 order-xl-1 mb-5 mb-xl-0 col-12">
                          <div className="row col-xl-12  p-0 ">
                            <div className="row text-center col-xl-2 col-2">
                              <i className="mb-3 OthServIcon fas fa-wifi"> </i>
                              <i className="mb-3 OthServIcon fa fa-puzzle-piece"></i>
                              <i className="mb-3 OthServIcon fa fa-plane"></i>
                              <i className="  mb-3 OthServIcon fa fa-beer"></i>
                              <i className="  mb-3 OthServIcon fa fa-utensils"></i>
                              <i className="  mb-3 OthServIcon fa fa-lemon"></i>
                              <i className="  mb-3 OthServIcon fa fa-award"></i>
                            </div>
                            <div className="row col-xl-10 col-10">
                              <i className=" OthServText">FREE INTERNET</i>
                              <i class="OthServText">BOARD GAMES / PUZZLES</i>
                              <i className="OthServText">
                                AIRPORT TRANSPORTATION
                              </i>
                              <i className="OthServText"> BAR / LOUNGE</i>
                              <i className="OthServText">RESTAURANT</i>
                              <i className="OthServText">SPECIAL DIET MENUS</i>
                            </div>
                          </div>
                        </div>

                        {/*---------------------------------------------------- Rigth--------------------------------------------------- */}

                        <div className="col-xl-6 order-xl-2 col-12">
                          <div className="row col-xl-12  p-0 ">
                            <div className="row text-center col-xl-2 col-2">
                              <i className=" mb-3  OthServIcon fa fa-child">
                                {" "}
                              </i>
                              <i className="  mb-3 OthServIcon fa fa-fire"></i>
                              <i className="  mb-3 OthServIcon fa fa-briefcase">
                                {" "}
                              </i>
                              <i className="  mb-3 OthServIcon fa fa-bed"></i>
                              <i className="  mb-3 OthServIcon fa fa-bed"></i>
                              <i className="  mb-3 OthServIcon fa fa-bed"></i>
                            </div>
                            <div className="row col-xl-10 col-10">
                              <i className="OthServText  pl-5">
                                CHILDREN ACTIVITIES (KID, FAMILY, FRIENDLY)
                              </i>
                              <i className="OthServText">OUTDOOR FIREPLACE</i>
                              <i className="OthServText">
                                PRIVATE CHEK-IN / CHECK-OUT
                              </i>
                              <i class="OthServText">
                                {" "}
                                WAKE-UP SERVICE / ALARM CLOCK{" "}
                              </i>
                              <i className="OthServText">FAMILY ROOM</i>
                              <i className="OthServText">SUITE</i>
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
          <footer className="footerDestinations"> </footer>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;

