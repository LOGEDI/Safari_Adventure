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
import lion from "../../../img/lion.jpg"

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
          minHeight: "500px",
          backgroundImage: `url(${destinationsHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center ",
        }}
      ></div>

      {/* <div className='destinationsBackground'
              style={{
                backgroundImage: `url(${destinationBackground})`,
              }}
         ></div> */}


<div className="text-on-image">
          <h2 className="page-title">EXPERIENCE</h2>
          <span className="page-subtitle">
            we offer a variety of activities
          </span>
        </div>

{/* ---------------------------------------------------PACKAGE CARD-1----------------------------------------- */}

      {store.package.map((item) => (
        <div key={item.id}>

          {/* --this prints the post if the package id is odd-- */}
          {item.id % 2 == 1 ? (
            <div className="post">
             <div className="post_img">
              <img className="imageone" src={item.url} alt="Nakuru"></img>
              
             </div>
                          
              <div
                className="post_text text-center"
                style={{
                  backgroundImage: `url(${item.url1})`,
                }}
              >
                <h3 className="post_title">{item.name}</h3>
                <p className="post_subtitle">{item.category}</p>
                
                

                <div className="row row-cols-5 justify-content-center text-center m-4">
                <div className="">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{item.tour_duration}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={destinationsicon}></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{item.destinations}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{item.activities}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{item.transport}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{item.lodging}</p>
                  </div>
                  <img className='separator mr-3' src={separator}></img>
                </div>
                <p className="post_description">{item.description}</p>
                <Link to={"/PackagesDetails/" + item.id}>
                  <button href="#" className="btn justify btn-outline-dark">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ) : null}{" "}
        </div>
      ))}

{/* ---------------------------------------------------PACKAGE CARD-2----------------------------------------- */}
    

      {store.package.map((item) => (
        <div key={item.id}>

           {/* --this prints the post if the package id is odd-- */}
          {item.id % 2 == 0 ? (
            <div className="post2">
              <div
                className="post_text text-center"
                style={{
                  backgroundImage: `url(${item.url1})`,
                }}
              >
                <h3 className="post2_title">{item.name}</h3>
                <p className="post2_subtitle">{item.category}</p>
                {/* <a href="#" className="post_tag">article</a> */}

                <div className="row row-cols-5 justify-content-center text-center m-4">

                  <div className="">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{item.tour_duration}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={destinationsicon}></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{item.destinations}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{item.activities}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{item.transport}</p>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{item.lodging}</p>
                  </div>
                  <img className='separator mr-3' src={separator}></img>
                  
                </div>

                <p className="post_description">{item.description}</p>
                <Link to={"/PackagesDetails/" + item.id}>
                  <button href="#" className="btn justify btn-outline-dark">
                    Learn More
                  </button>
                </Link>
              </div>

                <div className="post2_img">
                  <img className="imagetwo" src={item.url} alt="Nakuru"></img>
                </div>

              
            </div>
          ) : null}{" "}
        </div>
      ))}
    </div>
  );
};

export default Packages;
