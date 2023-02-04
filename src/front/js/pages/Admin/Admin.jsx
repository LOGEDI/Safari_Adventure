import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Nav from "react-bootstrap/Nav";
import userProfileIcon from "../../../img/user-profile-icon.jpg";
import adminPackagesIcon from "../../../img/tarangire_thumb.jpg";

const Admin = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
    actions.getUsers(params.id);
    actions.getComments(params.id);
    actions.getFavorites(params.id);
    actions.getTotalFavorites();
  }, []);

  return (
    <div className="pagesBackground">
      {store.admin ? (
        <div className="main-content pt-5">
          <div className="container-fluid destinationsCards">
            <div className="row justify-content-center">
              {/* -------------------USER CARD--------------------- */}

              <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 cardProfile m-3">
                <div className="">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <a href="#">
                          <img
                            src={userProfileIcon}
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
                            <span className="heading">{store.user.length}</span>
                            <span className="description">TOTAL USERS</span>
                          </div>

                          <div>
                            <span className="heading">
                              {store.comments.length}
                            </span>
                            <span className="description">TOTAL COMMENTS</span>
                          </div>
                        </div>
                      </div>
                      <div className="justify-content-center text-center">
                        <Link to="/AdminUsers">
                          <button className="btn btn-creamD ">USERS</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ----------------------------PACKAGES CARD---------------- */}

              <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 cardProfile m-3">
                <div className="">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <a href="#">
                          <img
                            src={adminPackagesIcon}
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
                      <div className="col ">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">
                              {store.favoritesTotal.length}
                            </span>
                            <span className="description">TOTAL FAVORITES</span>
                          </div>

                          <div>
                            <span className="heading">
                              {store.package.length}
                            </span>
                            <span className="description">TOTAL PACKAGES</span>
                          </div>
                        </div>
                      </div>
                      <div className="justify-content-center text-center">
                        <Link to="/AdminPackages">
                          <button className="btn btn-creamD ">PACKAGES</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1
              className="package-detail-title mt-5"
              style={{ color: "darkolivegreen" }}
            >
              Not logged in...
            </h1>
            <Nav.Link
              className="package-detail-subtitle"
              style={{ color: "#d2ae6d" }}
              href="/login"
            >
              Go to login
            </Nav.Link>
          </div>
        </div>
      )}{" "}
      <footer className="footer"></footer>
    </div>
  );
};

export default Admin;
