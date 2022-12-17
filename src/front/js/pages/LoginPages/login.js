import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Login = () => {
  const { store, actions } = useContext(Context);

 // --reference for user and errors.
 const userRef = useRef();
 const errRef = useRef();

 //-- state for email, password, errors and success
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errMsg, setErrMsg] = useState("");
 const [success, setSuccess] = useState(false);

 const navigate = useNavigate();

 //--if authentication is correct send you to private page
 useEffect(() => {
   if (store.auth === true) {
     navigate("/private");
   }
 }, [store.auth]);

 //--set the focus on the username input when the componen loads
 useEffect(() => {
   userRef.current.focus();
 }, []);

 //--clear error message when the inputs are properly done
 useEffect(() => {
   setErrMsg("");
 }, [email, password]);

 //--this handle the submit button behavior and clear the inputs
 const handleSubmit = async (e) => {
   e.preventDefault();
   await actions.login({
     email: email,
     password: password,
   });
   console, log(email, password);
   setEmail("");
   setPassword("");
   setSuccess(true);
 };

 return (
  <div className="container">
    <div className="App row row-cols-2 g-3 mt-5">
      <div className="col-6">
        <>
          {success ? (
            <section className="logSection">
              <h1>You are logged in!</h1>
              <br />
              <span className="line">
                <Link to="/">
                  <a href="#">Go to Home</a>
                </Link>
              </span>
            </section >
          ) : (
            <section className="logSection">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="useremail">Email:</label>

{/*--------------------------------------------EMAIL input---------------------------------------------------------*/}

             <input
               type="email"
               id="useremail"
               ref={userRef}
               autoComplete="off"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               required
             />

             <label htmlFor="password">Password:</label>

{/*--------------------------------------------PASSWORD input---------------------------------------------------------*/}

             <input
               type="password"
               id="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               required
             />
             <button className="signButton">Sign In</button>
           </form>
           <p>
             Need an Account?
             <br />

{/*-------------link to the SIGNUP page in case the user dont have an account----------------------------------- */}

                <span className="line">
                  <Link to="/signup">
                    {/*put router link here*/}
                    <a href="#">Sign Up</a>
                  </Link>
                </span>
              </p>
            </section>
          )}
        </>
      </div>
    </div>
  </div>
 );
};

export default Login;
