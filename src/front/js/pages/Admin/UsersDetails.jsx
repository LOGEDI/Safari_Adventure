import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams, Link } from "react-router-dom";

import userProfileIcon from "../../../img/user-profile-icon.jpg";

import Favorites from "../../component/Favorites.jsx";
import Comments from "../../component/Comments.jsx";

const UsersDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUserDetail(params.id);
    window.scrollTo(0, 0);
    actions.getFavorites();
    actions.getCommentsK();
  }, [params.id, store.userId]);

  
    return (
      
      <div className="pagesBackground">
        <div className="col-2 align-self-end">
                        
                      </div>


        
            
        
       
        <div className="main-content">
                <div className="container-fluid p-3">
                
                  <div className=" packagescards">
                    <div className="cardP shadow">
                      <div className="card-body ">
                        <div>
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
                          <h3 className="package-detail-subtitle">
                            {" "}
                            Username{" "}
                          </h3>
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
                          <h3 className="package-detail-subtitle">
                            User type{" "}
                          </h3>
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
                          <h3 className="package-detail-subtitle">
                            {" "}
                            First name{" "}
                          </h3>
                          <h3 className=" package-detail-title">
                            {store.userDetail.name}
                          </h3>
                        </div>
                        <div className=" form-group">
                          <h3 className="package-detail-subtitle">
                            Last name{" "}
                          </h3>
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
                        <div className="d-flex align-items-end justify-content-end mt-auto">
                           <Link to="/AdminUsers" className=" btn btn-creamD"
                       >
                          Back
                        </Link>
                        </div>

                      
                      </div>
                            
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="main-content">
                <div className="container-fluid p-3">
                
                  <div className="packagescards">
                    <div className="cardP ">

                    <div className="card-headerP  border-0">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="mb-0 "> Favorites</h3>
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
                  </div>
                </div>
              </div>

              <div className="main-content">
                <div className="container-fluid p-3">
                
                  <div className=" packagescards">
                    <div className="cardP shadow">
                    <div className="card-headerP  border-0">
                        <div className="row align-items-center">
                          <div className="">
                            <h3 className="mb-0"> Comments</h3>
                          </div>
                        </div>
                      </div>
                    <div className="card-body">
                        {store.commentsListK?.length > 0 ? (
                          store.commentsListK?.map((item) => (
                            <div key={item.id}>
                              <div className="pl-lg-4">
                                <div className="row">
                                  
                                  <div className="col-lg-11">
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



       
        <footer className="footer"></footer> 
        
               
      </div>

    );
};

export default UsersDetails;
