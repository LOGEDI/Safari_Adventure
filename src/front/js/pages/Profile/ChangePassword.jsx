import React from "react";
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import destinationBackground from "../../../img/destinations_background.jpg";

const ChangePassword = () => {
  const { actions } = useContext(Context);
  const SignupSchema = Yup.object().shape({
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email required"),
  });

  return (
    <div className="">
      <div
        className="destinationsBackground"
        style={{
          backgroundImage: `url(${destinationBackground})`,
        }}
      >
        <Formik
          //initial values
          initialValues={{ email: "" }}
          validationSchema={SignupSchema}
          // declare onSubmit and get the login values
          onSubmit={(values, { resetForm }) => {
            // then save it in the variable to take the answer of the flux variable
            actions.changePassword(values.email);
            resetForm({ values: "" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="container-fluid text-center d-flex">
                <div className="row  justify-content-center align-items-center h-100 w-100">
                  <div col="12">
                    <div
                      className="bg-ligth text-black my-5 mx-auto"
                      style={{ borderRadius: "1rem", maxWidth: "600px" }}
                    >
                      <div className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                        <h2
                          className="fw-bold mb-2 text-uppercase"
                          style={{ color: "#d2ae6d" }}
                        >
                          Reset password
                        </h2>
                        <p className="text-black-50">
                          Your new password will be sent to your email address
                        </p>
                        <div className="col-12 ">
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="form-control"
                          />

                          {errors.email && touched.email && errors.email}
                          <label
                            className="form-label"
                            for="form1Example2"
                          ></label>
                        </div>
                        <div className="d-flex flex-row mt-3 mb-5">
                          <button
                            type="submit"
                            className="btn btn-cream btn-lg mx-2 px-5"
                          >
                            Send password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {/*---------------------------------------------------- footer for spacing--------------------------------------------------- */}
        <footer className="footerDestinations"> </footer>
      </div>
    </div>
  );
};

export default ChangePassword;
