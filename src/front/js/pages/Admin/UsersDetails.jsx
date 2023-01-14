import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams, Link } from "react-router-dom";

import userProfileIcon from "../../../img/user-profile-icon.jpg";

const UsersDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUserDetail(params.id);
    window.scrollTo(0, 0);
    actions.comparingFavorites();
  }, [params.id, store.userId]);

  if (store.packageDetail) {
    return (
      <div>
        <div className="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="card bg-secondary shadow">
                <div className="card-body">
                  <h6 className="package-detail-subtitle mb-4">
                    USER DETAILS
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-4">
                        <img
                          src={
                            store.userDetail.user_url
                              ? store.userDetail.user_url
                              : userProfileIcon
                          }
                          className="admin-profile-icon"
                          style={{ maxHeight: "250px" }}
                        ></img>
                      </div>

                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <h3 className="package-detail-subtitle"> Username </h3>
                          <h3 className="package-detail-title">
                            {store.userDetail.username}
                          </h3>
                        </div>
                        <div className="form-group">
                          <h3 className="package-detail-subtitle">Email </h3>
                          <h3 className="package-detail-title">
                            {store.userDetail.email}
                          </h3>
                        </div>
                        <div className="form-group">
                          <h3 className="package-detail-subtitle">User type </h3>
                          {store.userDetail.admin ? (
                            <h2 className="text-danger">ADMIN</h2>
                          ) : null}{" "}
                          {store.userDetail.premium ? (
                            <h2 className="text-success">PREMIUM</h2>
                          ) : null}{" "}
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <h3 className="package-detail-subtitle"> First name </h3>
                          <h3 className="package-detail-title">
                            {store.userDetail.name}
                          </h3>
                        </div>
                        <div className="form-group">
                          <h3 className="package-detail-subtitle">Last name </h3>
                          <h3 className="package-detail-title">
                            {store.userDetail.lastname}
                          </h3>
                        </div>
                        <div className="form-group">
                          <h3 className="package-detail-subtitle">Country </h3>
                          <h3 className="package-detail-title">
                            {store.userDetail.country}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-2 align-self-end">
                        <Link to="/AdminUsers" className=" btn btn-primary">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              </div>
            </div>

{/* ------------------------------------Comments Section------------------------------------------ */}

            <div className="row">
              <div className="card bg-secondary shadow">
                <div className="card-body">
                  <h6 className="package-detail-subtitle mb-4">
                    COMMENTS
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-12">
                        coments come here
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-2 align-self-end">
                        <Link to="/AdminUsers" className=" btn btn-primary">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
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
    );
  } else {
    return (
      <div className="text-dark text-center mt-5">Loading please wait...</div>
    );
  }
};

export default UsersDetails;
