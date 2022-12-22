import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Context } from "../../store/appContext";

const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    actions.private();
  }, [store.auth]);

  return (
    <>
      {token && store.auth === true ? (
        <div className="text-center mt-5">
          <h1>Login Success!! </h1>

          <Link
            to="/"
            type="submit"
            className="btn btn-primary mt-3"
            onClick={() => {
              actions.logout();
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Profile;
