import React, { useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../../../styles/profile.css";

import { Context } from '../../store/appContext';

import userProfileIcon from "../../../img/user-profile-icon.jpg";

const Profile = () => {
  const {store, actions} = useContext(Context);
  let profile = store.profile;
  let auth = store.auth;
  
  useEffect(() => {
    actions.userProfile();
    if (store.userId != null) {
      actions.getFavorites();
    }
  }, [store.userId]);


  // useEffect(() => {
  //   if (store.userId != null) {
  //     actions.getFavorites();
  //   }
  // }, [store.userId]);

  return (
    <div>
      {auth ? (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <div className="main-content">

{/* -----------------------------------Header---------------------------------------------------------------- */}

          <div
            className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              minHeight: "600px",
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/5/57/Maasai_Mara_National_Reserve_Kenya.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            {/* Mask */}
            <span className="mask bg-gradient-default opacity-8" />
            {/* Header container */}
            <div className="container-fluid d-flex align-items-center">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <h1 className="display-2 text-white">
                    Hello {profile.username}
                  </h1>
                  <p className="text-white mt-0 mb-5">
                    This is your profile page, here you can see your comments , your favorites and update your user data.
                  </p>
                  <Link to="/EditProfile">
                    <button className="btn btn-primary m-2">Edit profile</button>
                  </Link>              
                </div>
              </div>
            </div>
          </div>

{/*---------------------------------------------------- Profile content--------------------------------------------------- */}

          <div className="container-fluid mt--7">
            <div className="row">
              <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
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
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
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
                  </div>
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Favorites</span>
                          </div>
                          <div>
                            <span className="heading">10</span>
                            <span className="description">Photos</span>
                          </div>
                          <div>
                            <span className="heading">89</span>
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
                <div className="card bg-secondary shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="mb-0">My favorites</h3>
                      </div>
                      <div className="col-4 text-right">
                        <a href="#!" className="btn btn-sm btn-primary">
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">

                  {store.favoritesList?.length > 0 ? (
                    store.favoritesList?.map((item) => (
                      <div key={item.id}>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-2">
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
                            <div className="col-lg-9">
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
                                    className="btn btn-outline-light mt-3"
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
                        <hr className="my-4" />
                      </div>
                    ))
                  ) : (
                    <p>No favorite package</p>
                  )}

                  </div>

















{/* 
<div
                        className="container mt-5 vh-100 "
                        style={{
                          fontFamily: "Rajdhani, sans-serif",
                          fontSize: "1.3rem",
                        }}
                      >
                        <div className="col-12 mx-auto my-4 h-75">
                          <ol className="h-75">
                            {store.favoritesList?.length > 0 ? (
                              store.favoritesList?.map((item, id) => (
                                <li
                                  className="list-group-item border border-1 border border-dark"
                                  key={id}
                                  style={{
                                    
                                    color: "#908969",
                                  }}
                                >
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-start text-left w-25">
                                      <img
                                        src={item.url}
                                        className="img-fluid rounded p-1 w-100 mx-1"
                                        alt="..."
                                        style={{
                                          maxHeight: "3rem",
                                          maxWidth: "3rem",
                                          borderColor: "#b2a97e",
                                        }}
                                      />
                                      {item?.name}
                                    </div>
                                    <div className="text-left">
                                      
                                    </div>

                                    <div className="d-flex justify-content-end">
                                      <span
                                        className="btn btn-outline-light"
                                        onClick={() =>
                                          actions.deleteFavorites(item.id)
                                        }
                                        style={{ color: "#bdb284" }}
                                      >
                                        <b>X</b>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <p>No tienes ningun favorito</p>
                            )}
                          </ol>
                        </div>
                      </div> */}



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

      ) : (

<div className="d-flex vh-auto vh-100 text-center justify-content-center ">
  <div>
    <h1 className="package-detail-title mt-5"
              style={{ color: "black" }}>Not logged in...</h1>
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
  )
}

export default Profile;