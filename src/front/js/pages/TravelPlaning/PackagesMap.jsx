import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Comments from "../../component/Comments.jsx";
import packagesHero from "../../../img/packages-hero.jpg";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodging from "../../../img/lodging-icon.png";
import transport from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";
const PackagesMap = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    <div>
      {store.package.map((item,index) => (
      <div key={item.id}>
    <div className=" ">
    <div
          className="header d-flex align-items-center"
          style={{
            minHeight: "500px",
            backgroundImage: `url(${item.url2})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
        ></div>


<div
          className="packdetailbkg"
          style={{
            backgroundImage: `url(${item.url3})`,
          }}
        >
          <div className="container-page">
            <div className="row g-3">
              <div className="col-xl-5">
                <h3 className="package-detail-title mt-5">
                  {item.name}
                </h3>
                <p className="package-detail-subtitle">
                  {item.category}
                </p>
                <img className="separator mr-3" src={separator}></img>
              </div>

              <div className="col-xl-7">
                <div className="row col-xl-12  p-0 destinationButons justify-content-end mt-5">

                  <div className="col-xl-3 col-md-4 col-sm-6 p-1 text-center ">
                    <button
                      className="btn btn-light"
                      type="button"
                      onClick={() => {
                        handleAddFavorites(item.id);
                      }}
                    >
                      {store.favoriteItem?.includes(parseInt(params.id)) ? (
                        <BsFillHeartFill />
                      ) : (
                        <BsHeart />
                      )}
                    </button>
                  </div>

                  <div className="col-xl-3 col-md-4 col-sm-6 p-1 text-center ">
                    <Link to="/Packages">
                      <button className="btn btn-creamD ">Back</button>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6 p-1 text-center ">
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button className="btn btn-creamD ">
                      Itinerary
                    </button>
                  </Link>                   
                  </div>
                  
                  
                </div>
              </div>
            </div>

            <div className="packages-details-icons row  mt-5 ml-5 mr-5 justify-content-center text-center">
              <div className="col">
                <img className="iconsdestinations" src={tripdays}></img>
                <p className="desticontitle">TOUR DURATION</p>
                <p className="desticoncontent">
                  {item.tour_duration}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={destinationsicon}></img>
                <p className="desticontitle">DESTINATIONS INCLUDED</p>
                <p className="desticoncontent">
                  {item.destinations}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={activity}></img>
                <p className="desticontitle">ACTIVITIES</p>
                <p className="desticoncontent">
                  {item.activities}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={transport}></img>
                <p className="desticontitle">TRANSPORT MODE</p>
                <p className="desticoncontent">
                  {item.transport}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={lodging}></img>
                <p className="desticontitle">LODGING</p>
                <p className="desticoncontent">{item.lodging}</p>
              </div>
            </div>
          

            
          </div>


 {store.auth ? <Comments /> : null}

<div className="row ">
  <div className="col-sm-12 col-md-7 ">
    <div>
      <h3
        className="text-center mt-3"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        COMMENTS:
      </h3>
      <div className="scrolleable col-10 m-auto">
        <ul className="list-group">
          {" "}
          {store.comments.length > 0 ? (
            store.comments.map((item, index) => (
              <div key={index}>
                <li className="my-3">
                  <img
                    style={{ width: "2rem", height: "2rem" }}
                    src="https://thumbs.dreamstime.com/z/male-tourist-glasses-hat-icon-simple-flat-design-illustration-74079657.jpg"
                    alt=""
                    className="m-2"
                  />
                  {item.comment}
                </li>
                <hr style={{ borderTop: "2px #bdb284" }} />
              </div>
            ))
          ) : (
            <div className="mt-5">
              <hr style={{ borderTop: "2px #bdb284" }} />
              <p className="text-muted text-center ">
                No comments for this package
              </p>
              <hr style={{ borderTop: "2px #bdb284" }} />
            </div>
          )}
        </ul>
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-5 ">
    <h3 className="t my-4" style={{ textAlign: "center" }}>
      Related packagess:
    </h3>
    <img
      src={item.url}
      className="img-fluid rounded-start img-fluid"
      alt="..."
      style={{
        border: "1px solid #ddd",
        bordeRadius: "4px",
        padding: "20px",
        margin: "10px",
        width: "100%",
        maxWidth: "400px",
      }}
    />
  </div>
</div>


        </div>


       




   
        
      
    {/* ----------------------------------------------Aditional footer for spacing----------------------------------------- */}
    <footer className="footer"></footer>
  </div>



  </div>
    ))}
  </div>
  );
}

export default PackagesMap;