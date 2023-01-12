import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Swal from "sweetalert2";

import destinationBackground from "../../../img/destinations_background.jpg";
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
    <div>AdminUsers
      <div
        className="destinationsBackground"
        style={{
          backgroundImage: `url(${destinationBackground})`,
        }}>

<div className="container ">
          <h1 className="text-center">USERS</h1>
          <Link to="/Admin">
            <button className="btn btn-primary">BACK TO ADMIN</button>
          </Link>
          <div className="row row-cols-1">
            {store.user.map((item) => (
              <div key={item.id} className="col-12">
                <div className="row row-cols-2 mb-5">
                <div className="admin-user-card col-2 card border-light">
                  <img
                    src={item.user_url}
                    className="admin-user-img"
                    alt="..."
                  />
                  </div>
                  <div className="admin-user-card-body col-10">
                    <div className="row row-cols-3 ">
                      <div className="col-5">
                    <h3 className="admin-user-card-title mt-3">{item.username}</h3>
                    <h3 className="admin-user-card-title mt-3">{item.email}</h3>
                    <h3 className="admin-user-card-title mt-3">{item.name}</h3>
                    <h3 className="admin-user-card-title mt-3">{item.lastname}</h3>
                    <h3 className="admin-user-card-title mt-3">{item.country}</h3>
                    </div>

                    <div className="col-5">
                    <h3 className="admin-user-card-title mt-3">{item.id}</h3>

                    {item.admin ? (
                      <h3 className="text-danger">ADMIN</h3>              
                    ) : null}{" "}

                    {item.premium ? (
                      <h3 className="text-success">PREMIUM</h3>              
                    ) : null}{" "}

                    <h3 className="admin-user-card-title mt-3">{item.admin}</h3>

                    <h3 className="admin-user-card-title mt-3">{item.name}</h3>
                    <h3 className="admin-user-card-title mt-3">{item.premium}</h3>
                    <h3 className="admin-user-card-title mt-3">{item.country}</h3>
                    </div>

                    <div className="col-2 justify-content-end">
                      <Link to={"/PackagesDetails/" + item.id}>
                        <button href="#" className="btn btn-primary">
                          DETAILS
                        </button>
                      </Link>
                      <Link to={"/EditPackages/" + item.id}>
                        <button className="btn btn-warning">
                          EDIT
                        </button>
                      </Link>

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
            ))}

            {/* <div className="col-4">
              <div className="admin-pack-card card m-3 border-light">
                <img  className="admin-pack-img-top" alt="..." />
                <div className="admin-pack-card-body">
                  <h3 className="admin-pack-card-title mt-3">CREATE PACKAGE</h3>
                  <div className="d-flex justify-content-center">
                    <Link to="/AboutUs/">
                      <button className="btn btn-primary">CREATE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  )
};

export default AdminUsers;
