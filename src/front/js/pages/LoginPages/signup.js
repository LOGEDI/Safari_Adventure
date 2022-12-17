import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../../store/appContext";

import lionImageUrl from "../../../img/lion.jpg";


//--------- REGEX stablish the conditions for the valids usernames and passwords-------------------------------

// email should have a min of 3 character and max of 23 and @, capital, -_, and numbers aloud.
const USER_REGEX = /^[A-z][A-z0-9-_](?=.*[@]).{3,23}$/;

// password showld have min of 8 and max of 24, should contain a capital leter, a number and a especial character.
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup = () => {
  const { store, actions } = useContext(Context);

  // --reference for user and errors.
    const userRef = useRef();
    const errRef = useRef();
  
     //-- state for user field
    const [email, setEmail] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
  
    //-- state for password field
    const [password, setPassword] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
  
     //-- state for password matching field
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
  
    //--states for errors and success
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
  
    //--set the focus on the username input when the componen loads
    useEffect(() => {
      userRef.current.focus();
    }, []);
  
    //--validate the user name comparing it with the REGEX condition we set before
    useEffect(() => {
      setValidName(USER_REGEX.test(email));
  
      // const result = USER_REGEX.test(email);
      //     console.log(result);
      //     console.log(email);
      //     setValidName(result);
    }, [email]);
  
     //--validate the password comparing it with the REGEX condition we set before
    useEffect(() => {
      setValidPwd(PWD_REGEX.test(password));
      setValidMatch(password === matchPwd);
  
      // const result = PWD_REGEX.test(pwd);
      // console.log(result);
      // console.log(pwd);
      // setValidPwd(result);
      // const match = pwd === matchPwd;
      // setValidMatch(match);
    }, [password, matchPwd]);
  
    //--clear error message when the inputs are properly done
    useEffect(() => {
      setErrMsg("");
    }, [email, password, matchPwd]);
  
    //--this handle the submit button behavior
    const handleSubmit = async (e) => {
      e.preventDefault();
     // prevent to send info in case the button is hacked in JS.
      const v1 = USER_REGEX.test(email);
      const v2 = PWD_REGEX.test(password);
      if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
      }
      await actions.signup({
        email: email,
        password: password,
      });
      console.log(email, password);
      setSuccess(true);
    };
  
    return (
      <div className="container" style={{backgroundImage:`url("${lionImageUrl}")`, objectFit: "cover" }}>
      <div className="App row row-cols-2 g-3 mt-5">
        <div className="col-6">
        <>
  
  {/*-------------show if registration status and if user is registered already link to login page------------------------- */}
  
          {success ? (
            <section className="logSection">
              <h1>Success!</h1>
              <span className="line">
                <Link to="/login">
                  <a href="#">Sign In</a>
                </Link>
              </span>
            </section>
          ) : (
            <section className="logSection">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Register</h1>
              <form onSubmit={handleSubmit}>
  
  {/*--------Create a USER input form and manage the USER_REGEX to asure the conditions required for a proper username */}
  
                <label htmlFor="useremail">
                  Email:
  
  {/*-------show and hide the icons depending if the USERNAME imput match the requierements---------------------------- */}
  
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validName ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validName || !email ? "hide" : "invalid"}
                  />
                </label>
  
  
  {/*--------------------------------------------EMAIL input---------------------------------------------------------*/}             
                <input
                  type="email"
                  id="useremail"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
  
  {/*-------------show and hide the EMAIL imput requirements instructions-------------------------------------------- */}
  
                <p
                  id="uidnote"
                  className={
                    userFocus && email && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter and contain @<br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
  
  {/*--------Create a PASSWORD input form and manage the USER_REGEX to asure the conditions required for a proper username */}              
  
                <label htmlFor="password">
                  Password:
  
  {/*-------show and hide the icons depending if the PASSWORD imput match the requierements---------------------------- */}
  
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validPwd || !password ? "hide" : "invalid"}
                  />
                </label>
  
  {/*--------------------------------------------PASSWORD input---------------------------------------------------------*/}
  
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
  
  {/*-------------show and hide the PASSWORD imput requirements instructions-------------------------------------------- */}
  
                <p
                  id="pwdnote"
                  className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
  
  {/*---Create a CONFIRM PASSWORD input form and manage the USER_REGEX to asure the conditions required for a proper username */}
  
                <label htmlFor="confirm_pwd">
                  Confirm Password:
  
  {/*-------show and hide the icons depending if the CONFIRM PASSWORD imput match the requierements----------------------- */}
  
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </label>
  
  {/*---------------------------------------CONFIRM PASSWORD input---------------------------------------------------------*/}
  
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
  
  {/*-------------show and hide the CONFIRM PASSWORD imput requirements instructions------------------------------------ */}
  
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>
  
  {/*-------------disable the SIGN UP Button until the 3 imputs match the requierements----------------------------------
  ---------------- since the button in wraped in a form label the handlesubmit component will do the job------------- */}
  
                <button
                  className="signButton"
                  disabled={!validName || !validPwd || !validMatch ? true : false}
                >
                  Sign Up
                </button>
  
  {/*-------------link to the login page in case the user have already an account----------------------------------- */}
  
              </form>
              <p>
                Already registered?
                <br />
                <span className="line">
                  <Link to="/login">
                    <a href="#">Sign In</a>
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
  
  export default Signup;