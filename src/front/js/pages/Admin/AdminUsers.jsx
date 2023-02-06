import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Swal from "sweetalert2";
import Nav from "react-bootstrap/Nav";

import destinationBackground from "../../../img/destinations_background.jpg";
import userProfileIcon from "../../../img/user-profile-icon.jpg";


const AdminUsers = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUsers(params.id);
  }, []);

  const handleSweetAlert = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success",
          confirmButtonColor: "#000000",
        });
        const remove = actions.deleteUser(id);
        console.log(remove);
      }
    });
  };

  return (
    <div className="pagesBackground">
      {store.admin ? (
        <div>
          <h1 className="text-center pt-3 package-detail-title">USERS</h1>

          <div className="main-content">
            <div className="container-fluid ">
              <Link to="/Admin">
                <button className="btn btn-creamD ml-2">BACK TO ADMIN</button>
              </Link>

              {store.user.map((item) => (
                <div key={item.id} className="col-12 p-3">
                  <div className="row packagescards">
                    <div className="cardP shadow">
                      <div className="card-body ">
                        <div>
                          <div className="row">
                            <div className="col-lg-2">
                              <img
                                src={
                                  item.user_url
                                    ? item.user_url
                                    : userProfileIcon
                                }
                                className="admin-profile-icon"
                                style={{ maxHeight: "150px" }}
                              ></img>
                            </div>

                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <h3 className="package-detail-subtitle">
                                  {" "}
                                  Username{" "}
                                </h3>
                                <h3 className="package-detail-title">
                                  {item.username}
                                </h3>
                              </div>
                              <div className="form-group">
                                <h3 className="package-detail-subtitle">
                                  Email{" "}
                                </h3>
                                <h3 className="package-detail-title">
                                  {item.email}
                                </h3>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="form-group focused">
                                {item.admin ? (
                                  <h2 className="text-danger">ADMIN</h2>
                                ) : null}{" "}
                                {item.premium ? (
                                  <h2 className="text-success">PREMIUM</h2>
                                ) : null}{" "}
                              </div>
                              <div className="form-group">
                                <h3 className="package-detail-subtitle">
                                  Comments{" "}
                                </h3>
                                <h3 className="package-detail-title"> </h3>
                              </div>
                            </div>

                            <div className="col-2 text-end">
                              <div className="pb-2">
                                <Link to={"/UsersDetails/" + item.id}>
                                  <button href="#" className="btn btn-creamD">
                                    DETAILS
                                  </button>
                                </Link>
                              </div>

                              <div className="pb-2">
                                <Link to={"/EditUsers/" + item.id}>
                                  <button className="btn btn-greenD">
                                    EDIT
                                  </button>
                                </Link>
                              </div>

                              <div className="form-group">
                                <span
                                  className="btn btn-dangerD"
                                  onClick={() => handleSweetAlert(item.id)}
                                >
                                  <b>DELETE</b>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default AdminUsers;
