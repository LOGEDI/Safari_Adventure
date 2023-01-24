import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import destinationsHero from "../../img/packages-hero.jpg";
import activity from "../../img/activity-icon.png";
import destinationsicon from "../../img/destination-icon.png";
import tripdays from "../../img/trip-days.png";
import lodging from "../../img/lodging-icon.png";
import transport from "../../img/transport-icon.png";
import separator from "../../img/heading-separator.png";

const TravelPlan = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    <div>
      <div>
        <div className="main-content">
          {/* -----------------------------------Header---------------------------------------------------------------- */}

          {/*---------------------------------------------------- Profile content--------------------------------------------------- */}

          <div className="container-fluid">
            <div className="row pageDescriptionContainerCenter">

<div className="col-xl-5 order-xl-1 p-0">
                <div className="card bg-secondary shadow">
                  <div className="card-bodyPackage">
                    <div
                      className="header d-flex align-items-center"
                      style={{
                        minHeight: "400px",
                        backgroundImage: `url(${destinationsHero})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center ",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-7 order-xl-2 mb-5 mb-xl-0 p-0">
                <div className="card card-profile shadow">
                  {/* <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <a href="#" className="btn btn-sm btn-info mr-4">
                        Connect
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-default float-right"
                      >
                        Message
                      </a>
                    </div>
                  </div> */}
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div className="pb-0 col">
                          <img className="iconsdestinations" src={tripdays}></img>
                            <p className="desticontitle">TOUR DURATION</p>
                            <p className="desticoncontent">15 days</p>
                          </div>
                          <div className="pb-0 col">
                          <img className="iconsdestinations" src={destinationsicon}></img>
                            <p className="desticontitle">DESTINATIONS INCLUDED</p>
                            <p className="desticoncontent">15 days</p>
                          </div>
                          <div className="pb-0 col">
                          <img className="iconsdestinations" src={activity}></img>
                            <p className="desticontitle">ACTIVITIES</p>
                            <p className="desticoncontent">15 days</p>
                          </div>
                          <div className="pb-0 col">
                          <img className="iconsdestinations" src={transport}></img>
                            <p className="desticontitle">TRANSPORT MODE</p>
                            <p className="desticoncontent">15 days</p>
                          </div>
                          <div className="pb-0 col">
                          <img className="iconsdestinations" src={lodging}></img>
                            <p className="desticontitle">LODGING</p>
                            <p className="desticoncontent">15 days</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h2></h2>
                      <img className='separator' src={separator}></img>
                      <h3>
                        <span className="font-weight-light"></span>
                        
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*---------------------------- Favorites content-----------------*/}
              <div className="container">
              <div className="row">
                <div className="col" style={{backgroundColor: "red"}}>
                  colum
                </div>
                <div className="col" style={{backgroundColor: "blue"}}>
                  colum
                </div>
                <div className="col" style={{backgroundColor: "green"}}>
                  colum
                </div>
              </div>
              <div className="row">
                <div className="col-5" style={{backgroundColor: "violet"}}>
                  <h1> hola feo</h1>
                  <p>lfdgkjghdfslghslghskdljhgdkfslghsdjhglksfdh</p>
                </div>
                <div className="col-7" style={{backgroundColor: "yellow"}}>
                  <h1> hola feo</h1>
                  <p>lfdgkjghdfslghslghskdljhgdkfslghsdjhglksfdh</p>
                </div>
                </div>
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
  );
};

export default TravelPlan;
