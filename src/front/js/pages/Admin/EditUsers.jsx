import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { Context } from "../../store/appContext";

const EditUsers = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [user_url, setUser_url] = useState("");
  const [admin, setAdmin] = useState(false);
  const [premium, setPremium] = useState(false);

  const params = useParams();

  const edit = async (id) => {
    //-------- this call flux adminUser
    let response = await actions.adminUser(
      name,
      lastname,
      country,
      password,
      user_url,
      admin,
      premium,
      id
    );
    setName("");
    setLastname("");
    setCountry("");
    setPassword("");
    setUser_url("");
    setAdmin();
    setPremium();

    Swal.fire({
      text: "User Updated",
      confirmButtonColor: "#000000",
    }).then(function (result) {
      if (result.value) {
        window.location = "/Admin";
      }
    });
  };

  const handleAdmin = () => {
    setAdmin((current) => !current);
  };

  const handlePremium = () => {
    setPremium((current) => !current);
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wluy28lt");
    
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      //en la url va url-cloudinary/nombrecloud/tipoarchivo/accion
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setUser_url(file.secure_url);
    // console.log(file.secure_url);
   
  };

  return (
    <div>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="card bg-secondary shadow">
              <div className="card-body">
                <form
                  onSubmit={() => {
                    edit(params.id);
                  }}
                >
                  <h6 className="package-detail-subtitle mb-4">EDIT USER</h6>
                  <div className="row">
                    <form className="d-flex flex-row align-items-center flex-wrap">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                        ></input>
                        <label className="form-check-label">Regular User</label>
                      </div>
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          onChange={handleAdmin}
                          name="inlineRadioOptions"
                        ></input>
                        <label className="form-check-label">Admin User</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          onChange={handlePremium}
                          name="inlineRadioOptions"
                        ></input>
                        <label className="form-check-label">Premium user</label>
                      </div>
                    </form>
                  </div>

                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="package-detail-subtitle"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            id="input-name"
                            className="form-control form-control-alternative"
                            placeholder="First name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="package-detail-subtitle"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id="input-lastname"
                            className="form-control form-control-alternative"
                            placeholder="Last name"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="package-detail-subtitle"                            
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            id="input-country"
                            className="form-control form-control-alternative"
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="package-detail-subtitle"              
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="input-password"
                            className="form-control form-control-alternative"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="package-detail-subtitle"                            
                          >
                            Profile Picture
                          </label>
                          <input
                            id="input-user_url"                            
                            type="file"
                            className="form-control form-control-alternative"
                            placeholder="Profile Picture"
                            onChange={(e) => {
                              uploadImage(e);
                              setUser_url(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 text-center">
                        <br />
                        <br />
                        <button
                          type="submit"
                          className="btn btn-secondary col-4"
                        >
                          SAVE CHANGES
                        </button>
                        <Link
                          to="/AdminUsers"
                          className="btn btn-primary col-3"
                        >
                          CANCEL
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                </form>
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
};

export default EditUsers;
