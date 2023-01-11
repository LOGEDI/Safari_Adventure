import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      Admin
      <Link to="/AdminPackages">
        <button className="btn btn-primary">PACKAGES</button>
      </Link>
      <Link to="/AdminUsers">
        <button className="btn btn-primary">USERS</button>
      </Link>
    </div>
  );
};

export default Admin;
