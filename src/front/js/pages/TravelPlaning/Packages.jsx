import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import destinationBackground from "../../../img/destinations_background.jpg";
import destinationsHero from "../../../img/experiences-hero.jpg";
import fotoprueba from "../../../img/classicKenyanSafariPack.jpg";
import backgroundtest from "../../../img/classicKenyanSafariPromo2.jpg";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodging from "../../../img/lodging-icon.png";
import transport from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png"

const Packages = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    <div>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          backgroundImage: `url(${destinationsHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>

      {/* <div className='destinationsBackground'
              style={{
                backgroundImage: `url(${destinationBackground})`,
              }}
         ></div> */}

{/* ---------------------------------------------------PACKAGE CARD------------------------------------------- */}

      {store.package.map((item) => (
        <div key={item.id}>

          {/* --this prints the post if the package id is odd-- */}
          {item.id % 2 == 1 ? (
            <div className="post">
              <img className="post_img" src={item.url} alt="Nakuru"></img>

              <div
                className="post_text"
                style={{
                  backgroundImage: `url(${backgroundtest})`,
                }}
              >
                <p className="post_date">20 Jan, 2021</p>
                <h3 className="post_title">{item.name}</h3>
                {/* <a href="#" className="post_tag">article</a> */}

                <div className="row row-cols-5 justify-content-center text-center m-4">
                <div className="">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">INCLUDED IN:</p>
                    <p className="desticoncontent">CLASSSIC KENYAN SAFARI</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={destinationsicon}></img>
                    <p className="desticontitle">PLACES TO VISIT</p>
                    <p className="desticoncontent">5 Locations</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">EXPERIENCES</p>
                    <p className="desticoncontent">
                      City Tour, Trekking, Animal Tracking, Cultural Visits
                    </p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">
                      City Tour, Trekking, Animal Tracking, Cultural Visits
                    </p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">
                      City Tour, Trekking, Animal Tracking, Cultural Visits
                    </p>
                  </div>
                  <img className='separator mr-3' src={separator}></img>
                </div>

                <p className="post_description">
                  Duis tortor mi, iaculis in arcu vel, aliquam accumsan dui.
                  Morbi non bibendum diam. Ut fermentum rutrum diam, vitae
                  tincidunt metus tristique eu. Aliquam a fringilla justo.
                </p>
                <Link to={"/PackagesDetails/" + item.id}>
                  <button href="#" className="btn btn-outline-dark">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ) : null}{" "}
        </div>
      ))}

      {store.package.map((item) => (
        <div key={item.id}>

           {/* --this prints the post if the package id is odd-- */}
          {item.id % 2 == 0 ? (
            <div className="post1">
              <div
                className="post1_text"
                style={{
                  backgroundImage: `url(${backgroundtest})`,
                }}
              >
                <p className="post_date">20 Jan, 2021</p>
                <h3 className="post_title">{item.name}</h3>
                {/* <a href="#" className="post_tag">article</a> */}

                <div className="row row-cols-5 justify-content-center text-center m-4">

                  <div className="">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">INCLUDED IN:</p>
                    <p className="desticoncontent">CLASSSIC KENYAN SAFARI</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={destinationsicon}></img>
                    <p className="desticontitle">PLACES TO VISIT</p>
                    <p className="desticoncontent">5 Locations</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">EXPERIENCES</p>
                    <p className="desticoncontent">
                      City Tour, Trekking, Animal Tracking, Cultural Visits
                    </p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">
                      City Tour, Trekking, Animal Tracking, Cultural Visits
                    </p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">
                      City Tour, Trekking, Animal Tracking, Cultural Visits
                    </p>
                  </div>
                  <img className='separator mr-3' src={separator}></img>
                  
                </div>

                <p className="post_description">
                  Duis tortor mi, iaculis in arcu vel, aliquam accumsan dui.
                  Morbi non bibendum diam. Ut fermentum rutrum diam, vitae
                  tincidunt metus tristique eu. Aliquam a fringilla justo.
                </p>
                <Link to={"/PackagesDetails/" + item.id}>
                  <button href="#" className="btn btn-outline-dark">
                    Learn More
                  </button>
                </Link>
              </div>
              <img className="post1_img" src={item.url} alt="Nakuru"></img>
            </div>
          ) : null}{" "}
        </div>
      ))}
    </div>
  );
};

export default Packages;
