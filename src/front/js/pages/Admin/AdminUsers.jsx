import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Swal from "sweetalert2";

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
    <div>
      

      {store.user.map((item) => (
        <div key={item.id} className="col-12">
          <div className="main-content">
            <div className="container-fluid">
              <div className="row">
                <div className="card mb-3 bg-secondary shadow">
                  <div className="card-body ">                    
                    <div>
                      <div className="row">
                        <div className="col-lg-2">
                          <img
                            src={
                              item.user_url ? item.user_url : userProfileIcon
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
                            <h3 className="package-detail-subtitle">Email </h3>
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
                              <button href="#" className="btn btn-primary">
                                DETAILS
                              </button>
                            </Link>
                          </div>

                          <div className="pb-2">
                            <Link to={"/EditUsers/" + item.id}>
                              <button className="btn btn-warning">EDIT</button>
                            </Link>
                          </div>

                          <div className="form-group">
                            <span
                              className="btn btn-danger"
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
