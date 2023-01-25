import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Swal from "sweetalert2";

import destinationBackground from "../../../img/destinations_background.jpg";
import plusIcon from "../../../img/plus-icon.png";
const AdminPackages = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
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
          text: "The Package has been deleted.",
          icon: "success",
          confirmButtonColor: "#000000",
        });
        const remove = actions.deletePackage(id);
        console.log(remove);
      }
    });
  };

  return (
    <div>
      <div
        className="destinationsBackground"
        style={{
          backgroundImage: `url(${destinationBackground})`,
        }}
      >
        <div className="container ">
          <h1 className="text-center">PACKAGES</h1>
          <Link to="/Admin">
            <button className="btn btn-primary">BACK TO ADMIN</button>
          </Link>
          <div className="row justify-content-center">
            {store.package.map((item) => (
              <div key={item.id} className="col-xl-4 col-12">
                <div className="admin-pack-card card m-3 border-light">
                  <img
                    src={item.url}
                    className="admin-pack-img-top"
                    alt="..."
                  />
                  <div className="admin-pack-card-body">
                    <h3 className="admin-pack-card-title mt-3">{item.name}</h3>
                    <div className="d-flex justify-content-between m-2">
                      <Link to={"/PackagesDetails/" + item.id}>
                        <button href="#" className="btn btn-primary">
                          DETAILS
                        </button>
                      </Link>
                      <Link to={"/EditPackages/" + item.id}>
                        <button href="#" className="btn btn-warning">
                          EDIT
                        </button>
                      </Link>

                      <span
                        className="btn btn-danger d-flex justify-content-end"
                        onClick={() => handleSweetAlert(item.id)}
                      >
                        <b>DELETE</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xl-4 col-12">
              <div className="admin-pack-card card m-3 border-light">
                <img src={plusIcon} className="admin-pack-img-top" alt="..." />
                <div className="admin-pack-card-body">
                  <h3 className="admin-pack-card-title mt-3">CREATE PACKAGE</h3>
                  <div className="d-flex justify-content-center">
                    <Link to="/AddPackages">
                      <button className="btn btn-primary">CREATE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPackages;
