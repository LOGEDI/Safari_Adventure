import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../store/appContext";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (store.auth === true) {
      navigate("/private");
    }
  }, [store.auth]);

  return (
    <div className="container">
      <h1>Login</h1>
        <div className="row row-cols-2 g-3 mt-5">{/* --this div wraps the 2 colums layout-- */}

            <div className="col-6">{/* --this div wraps the left colum layout-- */}

{/* ----------------------------------------------EMAIL INPUT----------------------------------------------------- */}         

                <div className="card m-3 border-light">{/* --this div wraps the left Card-- */}
                    <div className="d-grid gap-2">
                        <label className="form-label mt-4">
                            <h3>Email</h3>
                        </label>
                        <div className="d-grid gap-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Escriba su correo electrónico"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                    </div>

{/* ----------------------------------------------PASSWORD INPUT----------------------------------------------------- */}

                        <label className="form-label mt-4">
                            <h3>Password</h3>
                        </label>
                        <div className="d-grid gap-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Por favor, escriba su contraseña"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

{/* ----------------------------------------------LOGIN BUTTON----------------------------------------------------- */}

                        <button
                          className="loginbtn btn btn-primary text-center mt-4"
                          onClick={() => {
                            actions.login({
                              email: email,
                              password: password,
                            });
                          }}
                        >
                          Login
                        </button>

                </div>{/* --The end of the left Card Wrapper-- */}

            </div>{/* --The end of the left columm wrapper-- */}

        </div>{/* --The end of the 2 columms wrapper-- */}

    </div>
















    // <div>
    //   <h1 className="mt-4 mb-4 text-center">Login</h1>
    //   <form className="formulario col-6 text-center">
    //     <div className="d-grid gap-2">
    //       <label className="form-label ml-4">
    //         <h3>Email</h3>
    //       </label>
    //       <div className="d-grid gap-2">
    //         <input
    //           type="email"
    //           className="form-control"
    //           placeholder="Escriba su correo electrónico"
    //           value={email}
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //         />
    //       </div>
    //     </div>

    //     <div className="mb-3">
    //       <label className="col-sm-2 col-form-label mt-3">
    //         <h3>Password</h3>
    //       </label>
    //       <div className="d-grid gap-2">
    //         <input
    //           type="password"
    //           className="form-control"
    //           placeholder="Por favor, escriba su contraseña"
    //           value={password}
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </form>

    //   <button
    //     className="loginbtn btn btn-primary text-center"
    //     onClick={() => {
    //       actions.login({
    //         email: email,
    //         password: password,
    //       });
    //     }}
    //   >
    //     Login
    //   </button>
    // </div>
  );
};

export default Login;
