import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../../component/Comments.jsx";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodging from "../../../img/lodging-icon.png";
import transport from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png";
import { useNavigate } from "react-router-dom";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const PackagesDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    actions.getPackageDetail(params.id);
    actions.getProductComments(params.id);
    window.scrollTo(0, 0);
    actions.markFavorites();
  }, [params.id, store.userId]);

  let handleAddFavorites = async (id) => {
    //this function prevent a user to add a favorite whitout been loged, is send the user to login page
    let msj = await actions.createFavorite(id);

    if (msj === "User is not logged in") {
      navigate("/login");
    }
  };

  const handleClick = () => {
    window.history.back();
  }

  if (store.packageDetail) {
    return (
      <div>
        <div
          className="header d-flex align-items-center"
          style={{
            minHeight: "500px",
            backgroundImage: `url(${store.packageDetail.url2})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
        ></div>

        <div
          className="packdetailbkg"
          style={{
            backgroundImage: `url(${store.packageDetail.url3})`,
          }}
        >
          <div className="container-page">
            <div className="row  g-3">
              <div className="col-xl-5">
                <h3 className="package-detail-title mt-5">
                  {store.packageDetail.name}
                </h3>
                <p className="package-detail-subtitle">
                  {store.packageDetail.category}
                </p>
                <img className="separator mr-3" src={separator}></img>
              </div>

              <div className="col-xl-7 justify-content-end text-end">
                <div className="row col-xl-12 p-0  justify-content-end text-end mt-5">
                  <div className="col-xl-2 col-md-4 col-sm-6">
                  {/* {store.auth ? (
                    <button
                      className="btn1 btnFav"
                      type="button"
                      onClick={() => {
                        handleAddFavorites(store.packageDetail.id);
                      }}
                    >
                      {store.favoriteItem?.includes(parseInt(params.id)) ? (
                        <BsFillHeartFill className="favoIcon"/>
                      ) : (
                        <BsHeart className="favoIcon"/>
                      )}
                    </button>
                  ) : null}{" "} */}
                  </div>

                  <div className="col-xl-2 col-md-4 col-sm-6 p-1 justify-content-end ">
                  <Link to="/Packages">
                          <button className="btn btn-creamD ">Packages</button>
                        </Link>

                       

                  </div>
                  <div className="col-xl-1 col-md-4 col-sm-6 p-1 justify-content-end ">
                        
                           <button className="btn btn-creamD " onClick={handleClick}>Route Map</button>
                        
                      </div>
                  
                </div>
              </div>
            </div>

            <div className="packages-details-icons row  mt-5 ml-5 mr-5 justify-content-center text-center">
              <div className="col">
                <img className="iconsdestinations" src={tripdays}></img>
                <p className="desticontitle">TOUR DURATION</p>
                <p className="desticoncontent">
                  {store.packageDetail.tour_duration}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={destinationsicon}></img>
                <p className="desticontitle">DESTINATIONS INCLUDED</p>
                <p className="desticoncontent">
                  {store.packageDetail.destinations}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={activity}></img>
                <p className="desticontitle">ACTIVITIES</p>
                <p className="desticoncontent">
                  {store.packageDetail.activities}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={transport}></img>
                <p className="desticontitle">TRANSPORT MODE</p>
                <p className="desticoncontent">
                  {store.packageDetail.transport}
                </p>
              </div>

              <div className="col">
                <img className="iconsdestinations" src={lodging}></img>
                <p className="desticontitle">LODGING</p>
                <p className="desticoncontent">{store.packageDetail.lodging}</p>
              </div>
            </div>

            <div>
              <h3 className="ov-title mt-5">OVERVIEW</h3>
            </div>

            <div className="details-overview row">

              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title}
                </h4>
                <h6 className="overview-acomodation mb-3">
                  {store.packageDetail.overview_acomodation}
                </h6>
              </div>

              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description}
                </p>
              </div>
            </div>

            <div className="row m-2">
              <div >
                <img className="mt-2 mb-3 p-1 col-xl-6 col-12" src={store.packageDetail.url4}></img>
                <img className="mt-2 mb-3 p-1 col-xl-6 col-12" src={store.packageDetail.url5}></img>
              </div>
              
              
            </div>

            <div className="details-overview row">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title1}
                </h4>
                <h6 className="overview-acomodation mb-3">
                  {store.packageDetail.overview_acomodation1}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description1}
                </p>
              </div>
            </div>

            <div className="details-overview row">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title2}
                </h4>
                <h6 className="overview-acomodation mb-3">
                  {store.packageDetail.overview_acomodation2}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description2}
                </p>
              </div>
            </div>

            <div className="row row-cols-1 mt-2 mb-3">
              <img src={store.packageDetail.url6}></img>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title3}
                </h4>
                <h6 className="overview-acomodation mb-3">
                  {store.packageDetail.overview_acomodation3}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description3}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title4}
                </h4>
                <h6 className="overview-acomodation mb-3">
                  {store.packageDetail.overview_acomodation4}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description4}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title5}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation5}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description5}
                </p>
              </div>
            </div>

            <div className="row m-2">
              <img className="mt-2 mb-3 p-1 col-xl-4 col-12" src={store.packageDetail.url7}></img>
              <img className="mt-2 mb-3 p-1 col-xl-4 col-12" src={store.packageDetail.url8}></img>
              <img className="mt-2 mb-3 p-1 col-xl-4 col-12" src={store.packageDetail.url9}></img>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title6}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation6}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description6}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title7}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation7}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description7}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title8}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation8}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description8}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title9}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation9}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description9}
                </p>
              </div>
            </div>

            <div className="row row-cols-1 mt-2 mb-3">
              <img src={store.packageDetail.url10}></img>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title10}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation10}
                </h6>
              </div>
              <div className="details-overview-descriptionP col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description10}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title11}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation11}
                </h6>
              </div>
              <div className="details-overview-description col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description11}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title12}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation12}
                </h6>
              </div>
              <div className="details-overview-description col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description12}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title13}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation13}
                </h6>
              </div>
              <div className="details-overview-description col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description13}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title14}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation14}
                </h6>
              </div>
              <div className="details-overview-description col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description14}
                </p>
              </div>
            </div>

            <div className="row  mt-2 mb-3" style={{maxEight: "300px", eight: "300px",}}>
              <img  className="mt-2 mb-3 p-1 col-xl-6 col-12" style={{maxEight: "300px", eight: "300px",}} src={store.packageDetail.url11}></img>
              <img  className="mt-2 mb-3 p-1 col-xl-6 col-12" style={{maxEight: "300px", eight: "300px",}} src={store.packageDetail.url12}></img>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title15}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation15}
                </h6>
              </div>
              <div className="details-overview-description col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description15}
                </p>
              </div>
            </div>

            <div className="details-overview row ">
              <div className="details-overview-title col-xl-3 col-sm-12 pb-sm-4">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title16}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation16}
                </h6>
              </div>
              <div className="details-overview-description col-xl-9 col-sm-12">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description16}
                </p>
              </div>
            </div>

            <div className="row  mt-2 mb-3">
              <img src={store.packageDetail.url13}></img>
              <img src={store.packageDetail.url14}></img>
            </div>
          </div>
        

        {/* {store.auth ? <Comments /> : null}

        <div className="row mb-5">
          <div className="col-sm-12 col-md-8 ">
            <div>
              <h3 className="text-center mt-3 package-detail-title">                
                COMMENTS:
              </h3>
              <div className="scrolleable col-10 m-auto">
                <ul className="list-group">
                 
                  {store.comments.length > 0 ? (
                    store.comments.map((item, index) => (
                      <div key={index}>
                        <li className="package-detail-title my-3">
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
                    <div className="">
                      <hr style={{ borderTop: "2px #d2ae6d" }} />
                      <p className="text-muted text-center ">
                        No comments for this package
                      </p>
                      <hr style={{ borderTop: "2px #d2ae6d" }} />
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 justify-content-center text-center">
            <h3 className="text-center mt-5 mb-4 ov-title">RELATED PACKAGE:
            </h3>
            <img
              src={store.packageDetail.url}
              className="img-fluid rounded-start img-fluid justify-content-center text-center"
              alt="..."
              style={{
                border: "1px solid #ddd",
                bordeRadius: "4px",
                padding: "10px",
                borderColor: "#d2ae6d",
                width: "100%",
                maxWidth: "400px",
              }}
            />
          </div>
        </div> */}
      </div>
       </div>
    );

   
  } else {
    return <div className="text-center mt-5">Loading please wait...</div>;
  }
};

export default PackagesDetails;
