import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Context } from "../../store/appContext";

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    actions.private();
  }, []);

  return (
    <>  
      <div className="container-fluid">
      
        {token && store.auth === true ? (
          <div className="text-center mt-5">
            <h1>Login Success!! </h1>
            <h2>{store.user.name}</h2>
            
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

        {store.user.map((item) => (
          <div key={item.id} className="col">
            <h5 className="card-title">{item.name}</h5> 
            
            <div className="row px-5">
          <div className="col-3 col-xxl-2 mt-3">
            <p className="dash-cards-titles">Your profile</p>
           
            <div className="dashboard_profile shadow-sm">
              {/* {coverphoto != null ? (
                <img src={coverphoto} className="profile-cover" />
              ) : (
                <img
                  src="https://res.cloudinary.com/bikem8/image/upload/c_scale,w_668/v1659546812/photo-1616963248328-6b7bea589840_siwuq4.avif"
                  className="profile-cover"
                />
              )}
              {userphoto != null ? (
                <img src={userphoto} className="profile-image" />
              ) : (
                <img
                  src="https://res.cloudinary.com/bikem8/image/upload/v1659604933/nullprofile_dk2zrr.jpg"
                  className="profile-image"
                />
              )} */}

              <h2>{item.username}</h2>
              <h3 className="border-bottom">{item.email}</h3>
              <div className="mt-4 h-100 d-flex flex-column justify-content-around">
                <p>
                  Name: <span>{item.name}</span> 
                </p>
                <p>
                  Last name: <span>{item.last_name}</span> 
                </p>
                <p>
                  Country: <span>{item.country}</span>
                </p>
                <a href="/edit_profile" className="edit-profile-btn mb-3">
                  Edit Profile
                </a>
              </div>
            </div>

            </div>
            </div>




          </div>
        ))}
      
          



              





    </div>
   </>
  );
};

export default Private;
