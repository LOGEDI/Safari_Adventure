import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/profile.css";

import { Context } from "../../store/appContext";

const EditProfile = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  let profile = store.profile;
  let auth = store.auth;

  const updateUser = async (e) => {
    e.preventDefault();
    //-------- this call flux updateUser
    await actions.updateUser(name, lastname, country, password);
    setName("");
    setLastname("");
    setCountry("");
    setPassword("");
  };

  const handleSweetAlert = () => {
    //this fuction take care of the deleteAccount function from flux
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const borrar = actions.deleteAccount();
        console.log(borrar);
      }
    });
  };

  return (
    <div>
      {/* <h1 className="text-center">Profile</h1>
      <h1 className="text-center">Name: {profile.username}</h1>
      <h1 className="text-center">Last Name: {profile.email}</h1>
      <h1 className="text-center">Country: {profile.country}</h1> */}
      {auth ? (
        <div>
          <div>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
              rel="stylesheet"
            />
            <div className="main-content">
              <div
                className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                  minHeight: "600px",
                  backgroundImage:
                    "url(https://upload.wikimedia.org/wikipedia/commons/5/57/Maasai_Mara_National_Reserve_Kenya.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                <span className="mask bg-gradient-default opacity-8" />
                <div className="container-fluid d-flex align-items-center">
                  <div className="row">
                    <div className="col-lg-7 col-md-10">
                      <h1 className="display-2 text-white">
                        Hello {profile.username}
                      </h1>
                      <p className="text-white mt-0 mb-5">
                        This is your profile page. You can see the progress
                        you've made with your work and manage your projects or
                        assigned tasks
                      </p>
                      <Link to="/Profile">
                        <button className="btn btn-primary m-2">Back</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/*---------------------------------------------------- Profile content--------------------------------------------------- */}

              <div className="container-fluid mt--7">
                <div className="row">
                  <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div className="card card-profile shadow">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 order-lg-2">
                          <div className="card-profile-image">
                            <a href="#">
                              <img
                                src="https://thumbs.dreamstime.com/z/male-tourist-glasses-hat-icon-simple-flat-design-illustration-74079657.jpg"
                                className="rounded-circle"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div className="d-flex justify-content-between">
                          <a href="#" className="btn btn-sm btn-info mr-4">
                            Connect
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-default float-right"
                          >
                            Message
                          </a>
                        </div>
                      </div>
                      <div className="card-body pt-0 pt-md-4">
                        <div className="row">
                          <div className="col">
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                              <div>
                                <span className="heading">22</span>
                                <span className="description">Favorites</span>
                              </div>
                              <div>
                                <span className="heading">10</span>
                                <span className="description">Photos</span>
                              </div>
                              <div>
                                <span className="heading">89</span>
                                <span className="description">Comments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <h2>{profile.username}</h2>
                          <h3>
                            {profile.name}
                            {profile.lastname}
                            <span className="font-weight-light"></span>
                          </h3>
                          <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            {profile.country}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*---------------------------------------------------- EDIT PROFILE FORM--------------------------------------------------- */}

                  <div className="col-xl-8 order-xl-1">
                    <div className="card bg-secondary shadow">
                      <div className="card-header bg-white border-0">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h3 className="mb-0">My account</h3>
                          </div>
                          <div className="col-4 text-right">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                actions.updateUser();
                              }}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <form onSubmit={updateUser}>
                          <h6 className="heading-small text-muted mb-4">
                            User information
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-username"
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
                                    className="form-control-label"
                                    htmlFor="input-email"
                                  >
                                    Last name
                                  </label>
                                  <input
                                    type="text"
                                    id="input-lastname"
                                    className="form-control form-control-alternative"
                                    placeholder="Last name"
                                    onChange={(e) =>
                                      setLastname(e.target.value)
                                    }
                                    value={lastname}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-first-name"
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
                                    className="form-control-label"
                                    htmlFor="input-last-name"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    id="input-password"
                                    className="form-control form-control-alternative"
                                    placeholder="Password"
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    value={password}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" />

                          <button
                            data-dismiss="form"
                            type="submit"
                            color="dark"
                            className="btn btn-dark border border-white"
                          >
                            GUARDA AKI
                          </button>

                          {/* <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        About me
                      </h6>
                      <div className="pl-lg-4">
                        <div className="form-group focused">
                          <label>About Me</label>
                          <textarea
                            rows={4}
                            className="form-control form-control-alternative"
                            placeholder="A few words about you ..."
                            defaultValue={
                              "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                            }
                          />
                        </div>
                      </div> */}
                        </form>

                        <button
                          className="mt-2 p-2 d-flex"
                          type="button"
                          variant="dark"
                          style={{ color: "#bdb284" }}
                          onClick={() => handleSweetAlert()}
                        >
                          Delete account
                        </button>
                      </div>
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
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1>Not logged in...</h1>
            <Link className="bg-dark" style={{ color: "#bdb284" }} to="/login">
              Go to login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
