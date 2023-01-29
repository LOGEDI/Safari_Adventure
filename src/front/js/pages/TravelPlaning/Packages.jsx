import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

import packagesHero from "../../../img/packages-hero.jpg";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodging from "../../../img/lodging-icon.png";
import transport from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png";

const Packages = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    <div className="main-content pagesBackground ">
    <div
      className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={{
        backgroundImage: `url(${packagesHero})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        <div className="text-on-image">
          <h2 className="page-title">EXPERIENCE</h2>
          <span className="page-subtitle">
            We offer a variety of activities
          </span>
        </div>
      </div>
    </div>

    {/* ---------------------------------------------------PACKAGE CARD-1----------------------------------------- */}
    {store.package.map((item,index) => (
      <div key={item.id}>
        {/* --this prints the post if the package id is even-- */}
        {index % 2 == 0 ? (
          <div className="container-fluid mt-3 packagesPost">
            <div className="row mb-3 packagescards">
              <div
                className="col col-xl-5 picpackage ml-5"
                style={{
                  height: "400px",
                  maxWidth: "888px",
                  backgroundImage: `url(${item.url})`,
                }}
              >
                <div
                  className="row align-items-end"
                  style={{ height: "450px" }}
                >
                  <div className="col">
                    <h3 className="post_title">{item.name}</h3>
                    <p className="post_subtitle">{item.category}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-7"
                style={{
                  backgroundImage: `url(${item.url1})`,
                }}
              >
                <div className="row text-center pt-5">
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{item.tour_duration}</p>
                  </div>
                  <div className="pb-0 col">
                    <img
                      className="iconsdestinations"
                      src={destinationsicon}
                    ></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{item.destinations}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{item.activities}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{item.transport}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{item.lodging}</p>
                  </div>
                </div>
                <div className="row text-center justify-content-center">
                  <img
                    className="separator mb-5"
                    src={separator}
                    style={{ maxWidth: "150px", maxHeight: "150px" }}
                  ></img>
                </div>
                <div className="row text-center justify-content-center">
                  <p className="post_description mb-4">{item.description}</p>
                </div>
                <div className="row text-center justify-content-center">
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button className="btn btn-creamD justify mb-3">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        ) : (
          
          <div className="container-fluid mt-3 packagesPost">
            <div className="row mb-3 packagescards">
              <div
                className="col-xl-7"
                style={{
                  backgroundImage: `url(${item.url1})`,
                }}
              >
                <div className="row text-center pt-5">
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{item.tour_duration}</p>
                  </div>
                  <div className="pb-0 col">
                    <img
                      className="iconsdestinations"
                      src={destinationsicon}
                    ></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{item.destinations}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{item.activities}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{item.transport}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{item.lodging}</p>
                  </div>
                </div>
                <div className="row text-center justify-content-center">
                  <img
                    className="separator mb-5"
                    src={separator}
                    style={{ maxWidth: "150px", maxHeight: "150px" }}
                  ></img>
                </div>
                <div className="row text-center justify-content-center">
                  <p className="post_description mb-4">{item.description}</p>
                </div>
                <div className="row text-center justify-content-center">
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button className="btn btn-creamD justify mb-3">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="col col-xl-5 picpackage ml-5"
                style={{
                  height: "400px",
                  maxWidth: "888px",
                  backgroundImage: `url(${item.url})`,
                }}
              >
                <div
                  className="row align-items-end justify-content-end "
                  style={{ height: "450px", color: "white" }}
                >
                  <div className="col">
                    <h3 className="post2_title">{item.name}</h3>
                    <p className="post2_subtitle">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       )}{" "}
      </div>
    ))}


{store.auth ? (
<div>

{store.premium && item.title === premium ? (

  <div>
 {item.title === premium ? (
    
<div>
{store.package.map((item,index) => (
      <div key={item.id}>

<div>
     
        <div>
        {/* --this prints the post if the package id is even-- */}
        {index % 2 == 0 ? (
          <div className="container-fluid mt-3 packagesPost">
            <div className="row mb-3 packagescards">
              <div
                className="col col-xl-5 picpackage ml-5"
                style={{
                  height: "400px",
                  maxWidth: "888px",
                  backgroundImage: `url(${item.url})`,
                }}
              >
                <div
                  className="row align-items-end"
                  style={{ height: "450px" }}
                >
                  <div className="col">
                    <h3 className="post_title">{item.name}</h3>
                    <p className="post_subtitle">{item.category}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-7"
                style={{
                  backgroundImage: `url(${item.url1})`,
                }}
              >
                <div className="row text-center pt-5">
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{item.tour_duration}</p>
                  </div>
                  <div className="pb-0 col">
                    <img
                      className="iconsdestinations"
                      src={destinationsicon}
                    ></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{item.destinations}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{item.activities}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{item.transport}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{item.lodging}</p>
                  </div>
                </div>
                <div className="row text-center justify-content-center">
                  <img
                    className="separator mb-5"
                    src={separator}
                    style={{ maxWidth: "150px", maxHeight: "150px" }}
                  ></img>
                </div>
                <div className="row text-center justify-content-center">
                  <p className="post_description mb-4">{item.description}</p>
                </div>
                <div className="row text-center justify-content-center">
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button className="btn btn-creamD justify mb-3">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        ) : (
          
          <div className="container-fluid mt-3 packagesPost">
            <div className="row mb-3 packagescards">
              <div
                className="col-xl-7"
                style={{
                  backgroundImage: `url(${item.url1})`,
                }}
              >
                <div className="row text-center pt-5">
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{item.tour_duration}</p>
                  </div>
                  <div className="pb-0 col">
                    <img
                      className="iconsdestinations"
                      src={destinationsicon}
                    ></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{item.destinations}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{item.activities}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{item.transport}</p>
                  </div>
                  <div className="pb-0 col">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{item.lodging}</p>
                  </div>
                </div>
                <div className="row text-center justify-content-center">
                  <img
                    className="separator mb-5"
                    src={separator}
                    style={{ maxWidth: "150px", maxHeight: "150px" }}
                  ></img>
                </div>
                <div className="row text-center justify-content-center">
                  <p className="post_description mb-4">{item.description}</p>
                </div>
                <div className="row text-center justify-content-center">
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button className="btn btn-creamD justify mb-3">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="col col-xl-5 picpackage ml-5"
                style={{
                  height: "400px",
                  maxWidth: "888px",
                  backgroundImage: `url(${item.url})`,
                }}
              >
                <div
                  className="row align-items-end justify-content-end "
                  style={{ height: "450px", color: "white" }}
                >
                  <div className="col">
                    <h3 className="post2_title">{item.name}</h3>
                    <p className="post2_subtitle">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       )}{" "}
</div>




</div>
      </div>
    ))}


</div>

 ) : null}

</div>

    ) : null}{" "}

</div>
) : null}{" "}
    {/* ----------------------------------------------Aditional footer for spacing----------------------------------------- */}
    <footer className="footer"></footer>
  </div>
  );
};

export default Packages;
