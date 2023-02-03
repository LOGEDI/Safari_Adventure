import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

import Comments from "../../component/Comments.jsx";
import packagesHero from "../../../img/packages-hero.jpg";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodging from "../../../img/lodging-icon.png";
import transport from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png";
import userProfileIcon from "../../../img/user-profile-icon.jpg";

const PackagesMap = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let profile = store.profile;
  let navigate = useNavigate();

  useEffect(() => {
    actions.getPackageDetail(params.id);
    actions.getProductComments(params.id);
    actions.userProfile();
    actions.markFavorites();
    window.scrollTo(0, 0);
  }, []);

  let handleAddFavorites = async (id) => {
    //this function prevent a user to add a favorite whitout been loged, is send the user to login page
    let msj = await actions.createFavorite(id);

    if (msj === "User is not logged in") {
      navigate("/login");
    }
  };

  return (
    <div>
      
          <div className=" ">
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
                <div className="row g-3">
                  <div className="col-xl-5">
                    <h3 className="package-detail-title mt-5">{store.packageDetail.name}</h3>
                    <p className="package-detail-subtitle">{store.packageDetail.category}</p>
                    <img className="separator mr-3" src={separator}></img>
                  </div>

                  <div className="col-xl-7 justify-content-end text-end">
                    <div className="row col-xl-12 p-0  justify-content-end text-end mt-5">
                      <div className="col-xl-2 col-md-4 col-sm-6   ">
                        {store.auth ? (
                          <button
                            className="btn btnFav"
                            type="button"
                            onClick={() => {
                              handleAddFavorites(item.id);
                            }}
                          >
                            {store.favoriteItem?.includes(
                              parseInt(params.id)
                            ) ? (
                              <BsFillHeartFill className="favoIcon" />
                            ) : (
                              <BsHeart className="favoIcon" />
                            )}
                          </button>
                        ) : null}{" "}
                      </div>

                      <div className="col-xl-2 col-md-4 col-sm-6 p-1 justify-content-end ">
                        <Link to="/Packages">
                          <button className="btn btn-creamD ">Back</button>
                        </Link>
                      </div>
                      <div className="col-xl-1 col-md-4 col-sm-6 p-1 justify-content-end ">
                        <Link to={"/PackagesDetails/" + store.packageDetail.id}>
                          <button className="btn btn-creamD ">Itinerary</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="packages-details-icons row  mt-5 ml-5 mr-5 justify-content-center text-center">
                  <div className="col">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <p className="desticontitle">TOUR DURATION</p>
                    <p className="desticoncontent">{store.packageDetail.tour_duration}</p>
                  </div>

                  <div className="col">
                    <img
                      className="iconsdestinations"
                      src={destinationsicon}
                    ></img>
                    <p className="desticontitle">DESTINATIONS INCLUDED</p>
                    <p className="desticoncontent">{store.packageDetail.destinations}</p>
                  </div>

                  <div className="col">
                    <img className="iconsdestinations" src={activity}></img>
                    <p className="desticontitle">ACTIVITIES</p>
                    <p className="desticoncontent">{store.packageDetail.activities}</p>
                  </div>

                  <div className="col">
                    <img className="iconsdestinations" src={transport}></img>
                    <p className="desticontitle">TRANSPORT MODE</p>
                    <p className="desticoncontent">{store.packageDetail.transport}</p>
                  </div>

                  <div className="col">
                    <img className="iconsdestinations" src={lodging}></img>
                    <p className="desticontitle">LODGING</p>
                    <p className="desticoncontent">{store.packageDetail.lodging}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="row row-cols-1 mt-5 mb-5 justify-content-center">
                      <img
                        src={store.packageDetail.url15}
                        style={{ maxWidth: "1500px" }}
                      ></img>
                    </div>
                  </div>
                </div>

                <div>{store.auth ? <Comments /> : null}</div>

                <div className="row mb-5">
                  <div className="col-sm-12 col-md-8 ">
                    <div>
                      <h3 className="text-center mt-3 package-detail-title">COMMENTS:</h3>
                      <div className="scrolleable col-10 m-auto">
                        <ul className="list-group">
                          {store.comments.length > 0 ? (
                            store.comments.map((item, index) => (
                              <div key={index}>
                                <li className="package-detail-title my-3">
                                  <img
                                    style={{ width: "2rem", height: "2rem" }}
                                    src={
                                      profile.user_url
                                        ? profile.user_url
                                        : userProfileIcon
                                    }
                                    className="m-2"
                                  />

                                  {/* {store.user.map((item) => (
                                      <div key={item.id}>
                                  <img
                                    style={{ width: "2rem", height: "2rem" }}
                                    src={
                                      item.user_url
                                    ? item.user_url
                                    : userProfileIcon
                                    }
                                    className="m-2"
                                  />
                                    </div>
                                    ))} */}

                                  {item.comment}
                                </li>
                                <hr style={{ borderTop: "2px bdb284" }} />
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
                    <h3 className="text-center mt-5 mb-4 ov-title">RELATED PACKAGE:</h3>
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
                </div>
              </div>
            </div>
          </div>
        
    </div>
  );
};

export default PackagesMap;
