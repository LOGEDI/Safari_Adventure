import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../../../styles/profile.css";

import { Context } from "../../store/appContext";

const EditUsers = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(false);
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
        let response = await actions.adminUser(name, lastname, country, password, user_url, admin, premium, id);
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

const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wluy28lt");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      //en la url va url-cloudinary/nombrecloud/tipoarchivo/accion
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    // console.log(res);
    
    setUser_url(file.secure_url);
    // console.log(file.secure_url);
    setLoading(false);
  };


    return (
    <div>EditUsers

          <div>
          <div>
            
            <div className="main-content">
             
        
                
                      
                      {/* <Link to="/Profile">
                        <button className="btn btn-primary m-2">Back</button>
                      </Link> */}
                    
              

              {/*---------------------------------------------------- Profile content--------------------------------------------------- */}

              <div className="container-fluid mt-5">
                <div className="row">
                  

                  {/*---------------------------------------------------- EDIT PROFILE FORM--------------------------------------------------- */}

                 
                    <div className="card bg-secondary shadow">
                      <div className="">
                        <div className="">
                          <div className="col-12">
                            
                          </div>
                          <div className="col-4 text-right">
                      
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <form onSubmit={() => {
                          console.log(params.id);
                          edit(params.id);
                         }}>
                          
                          <h6 className="heading-small text-muted mb-4">
                            User information
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label
                                    className="form-control-label"
                                    for="input-username"
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
                                    for="input-email"
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
                                    for="input-first-name"
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
                                    for="input-last-name"
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

                            <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label
                                    className="form-control-label"
                                    for="input-first-name"
                                  >
                                    Profile Picture
                                  </label>
                                  <input                                   
                                    id="input-user_url"
                                    name="user_url"
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
                                <br/>
                                <br/>
                                <button                                  
                                  type="submit"                                  
                                  className="btn btn-secondary col-4"
                                  >
                                    SAVE CHANGES
                                </button>
                                <Link to="/AdminUsers" className="btn btn-primary col-3">
                                  CANCEL                                  
                                </Link>
                                {/* <button
                                  className="btn btn-danger col-4 text-center justify-content-center"                            
                                  type="button"                                                      
                                  onClick={() => handleSweetAlert()}
                                >
                                  DELETE ACCOUNT
                                </button> */}
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
        </div>

    </div>
  )
}

export default EditUsers;