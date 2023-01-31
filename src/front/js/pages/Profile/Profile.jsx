import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

import "../../../styles/profile.css";
import userProfileIcon from "../../../img/user-profile-icon.jpg";
import profileHero from "../../../img/Maasai_Mara_National_Reserve_Kenya.jpg";

const Profile = () => {
  const { store, actions } = useContext(Context);
  let profile = store.profile;
  let auth = store.auth;

  useEffect(() => {
    actions.userProfile();
    if (store.userId != null) {
      actions.getFavorites();
      actions.getCommentsK();
    }
  }, [store.userId]);

  return (
    <div className="pagesBackground">
      {auth ? (
        <div>
          <div className="main-content">
            {/* -----------------------------------Header---------------------------------------------------------------- */}

            <div
              className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                minHeight: "600px",
                backgroundImage: `url(${profileHero})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            >
              {/* Mask */}

              {/* Header container */}
              <div className="container-fluid d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-7 col-md-10 text-on-imageProfile">
                    <h1 className="page-titleProfile">
                      hello {profile.username}
                    </h1>
                    <p className="page-subtitleProfile mt-0 mb-4">
                      This is your profile page, here you can see your comments
                      , your favorites and update your user data.
                    </p>
                    <Link to="/EditProfile">
                      <button className="btn btn-creamD m-2">
                        Edit profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Profile content--------------------------------------------------- */}

            <div className="container-fluid destinationsCards mt--7">
              <div className="row">
                <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 cardProfile">
                  <div className="">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 order-lg-2">
                        <div className="card-profile-image">
                          <a href="#">
                            <img
                              src={
                                profile.user_url
                                  ? profile.user_url
                                  : userProfileIcon
                              }
                              className="rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                        {/* <a href="#" className="btn btn-sm btn-info mr-4">
                          Connect
                        </a>
                        <a
                          href="#"
                          className="btn btn-sm btn-default float-right"
                        >
                          Message
                        </a> */}
                      </div>
                    </div>
                    <div className="card-body pt-0 pt-md-4">
                      <div className="row">
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                            <div>
                              <span className="heading">
                                {store.favoritesList.length}
                              </span>
                              <span className="description">Favorites</span>
                            </div>
                            {/* <div>
                              <span className="heading">10</span>
                              <span className="description">Photos</span>
                            </div> */}
                            <div>
                              <span className="heading">
                                {store.comments.length}
                              </span>
                              <span className="description">Comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h2>{profile.username}</h2>
                        <h3>
                          {profile.name + " "}
                          {profile.lastname}
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {profile.country}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*---------------------------- Favorites content-----------------*/}

                <div className="col-xl-8 order-xl-1">
                  <div className="cardP">
                    <div className="card-headerP  border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0 ">My favorites</h3>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      {store.favoritesList?.length > 0 ? (
                        store.favoritesList?.map((item) => (
                          <div key={item.id}>
                            <div className="pl-lg-4">
                              <div className="row">
                                <div className="col col-xl-3">
                                  <img
                                    src={item.url}
                                    className="img-fluid"
                                    alt="..."
                                    style={{
                                      maxHeight: "250px",
                                      maxWidth: "150px",
                                      borderColor: "#b2a97e",
                                    }}
                                  />
                                </div>
                                <div className="col col-xl-8">
                                  <div className="form-group focused">
                                    <h3 className="package-detail-title mt-4">
                                      {item?.name}
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-1">
                                  <div className="form-group focused">
                                    <div className=" justify-content-end">
                                      <span
                                        className="btn btn-greenD1 mt-3"
                                        onClick={() =>
                                          actions.deleteFavorites(item.id)
                                        }
                                        style={{ color: "#d2ae6d" }}
                                      >
                                        <b>X</b>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className="hrp my-4" />
                          </div>
                        ))
                      ) : (
                        <p>No favorite package</p>
                      )}
                    </div>
                  </div>
                  {/*---------------------------- comments content-----------------*/}

                  <div className="">
                    <div className="cardP  mt-3">
                      <div className="card-headerP  border-0">
                        <div className="row align-items-center">
                          <div className="">
                            <h3 className="mb-0">My comments</h3>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        {store.commentsListK?.length > 0 ? (
                          store.commentsListK?.map((item) => (
                            <div key={item.id}>
                              <div className="pl-lg-4">
                                <div className="row">
                                  <div className="col-lg-2"></div>
                                  <div className="col-lg-9">
                                    <div className="form-group focused">
                                      <h3 className="package-detail-title mt-4">
                                        {item?.comment}
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="col-lg-1">
                                    <div className="form-group focused">
                                      <div className=" justify-content-end">
                                        <span
                                          className="btn btn-greenD1 mt-3"
                                          onClick={() =>
                                            actions.deleteComments(
                                              item.id_comment
                                            )
                                          }
                                          style={{ color: "#d2ae6d" }}
                                        >
                                          <b>X</b>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr className="my-4" />
                            </div>
                          ))
                        ) : (
                          <p>No favorite comment</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- footer for spacing--------------------------------------------------- */}

          <footer className="footer"></footer>
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1
              className="package-detail-title mt-5"
              style={{ color: "black" }}
            >
              Not logged in...
            </h1>
            <Link
              className="package-detail-subtitle"
              style={{ color: "#d2ae6d" }}
              to="/login"
            >
              Go to login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
