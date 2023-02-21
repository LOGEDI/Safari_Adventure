import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSub = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section>
        <div className="container">
          <div>
            <div>
              <div>
                {/* <h2 className='text-center'>CONTACT US</h2>
                        <form ref={form} onSubmit={sendEmail} className='' >
                            <input type="text" 
                                placeholder='Full Name' 
                                name="user_name" required />
                            <input type="email" 
                                placeholder='Email' 
                                name="user_email" required />
                            <input type="text" 
                                placeholder='Subject' 
                                name="subject" required />
                            <textarea name="message" cols="30" rows="10"></textarea>
                            <button type='submit' className='btn btn-creamD'>Send Message</button>
                        </form> */}
              </div>

              <div className="">
                <div className="cardP ">
                  <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="">
                              <label
                                className="form-control-label"
                                for="input-username"
                              >
                                Full name
                              </label>
                              <input
                                type="text"
                                className="form-controlP form-control-alternative"
                                placeholder="Full Name"
                                name="user_name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                className="form-control-label"
                                for="input-email"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                className="form-controlP form-control-alternative"
                                placeholder="Country"
                                name="user_country"
                                required
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
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-controlP form-control-alternative"
                                placeholder="Email"
                                name="user_email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                for="input-last-name"
                              >
                                Telephone
                              </label>
                              <input
                                type="text"
                                className="form-controlP form-control-alternative"
                                placeholder="Telephone"
                                name="user_phone"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-lg-center">
                          <div className="col-lg-12">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                            
                              >
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-controlC form-control-alternative"
                                //  cols="62"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-creamD col"
                            >
                              SEND MESSAGE
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="hrp my-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
};

export default EmailSub;
