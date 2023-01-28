import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Context } from "../../store/appContext";

const Admin = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.admin ? (
        <div>
          <Link to="/AdminPackages">
            <button className="btn btn-primary">PACKAGES</button>
          </Link>
          <Link to="/AdminUsers">
            <button className="btn btn-primary">USERS</button>
          </Link>
        </div>
      ) : (
<div className="d-flex vh-auto vh-100 text-center justify-content-center ">
        <div>
          <h1 className="package-detail-title mt-5"
              style={{ color: "black" }}>Not logged in...</h1>
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

    </div>
  );
};

export default Admin;
