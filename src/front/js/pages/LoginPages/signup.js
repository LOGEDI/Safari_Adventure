import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
        <h1>Signup</h1>
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

{/* ----------------------------------------------SUBMIT BUTTON----------------------------------------------------- */}

                        <Link to="/login">
                            <button
                                className="btn btn-primary mt-4"
                                type="submit"
                                onClick={async () => {
                                    await actions.signup({
                                        email: email,
                                        password: password,
                                    });
                                }}
                            >
                                Submit
                            </button>
                        </Link>

                </div>{/* --The end of the left Card Wrapper-- */}

            </div>{/* --The end of the left columm wrapper-- */}

        </div>{/* --The end of the 2 columms wrapper-- */}

    </div>
  );
};

export default Signup;
