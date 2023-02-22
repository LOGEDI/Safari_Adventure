import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSubHome = () => {
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
        <div className="experiencePagePicLinks container-fluid">
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
                <div className="cardH ">
                  <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center homeMail1">Join the Safari Adventure Tribe!</h2>
                                <h3 className="text-center homeMail2">If you want us to take you on a safari wherever you are, keep you up to date with our news,special offers and curiosities please leace us your email and we will make the rest!</h3>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="">
                              
                              <input
                                type="text"
                                className="form-controlP form-control-alternative mb-2"
                                placeholder="Name"
                                name="user_name"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="">
                              
                              <input
                                type="text"
                                className="form-controlP form-control-alternative mb-2"
                                placeholder="Surname"
                                name="user_name"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="form-group">
                            
                              <input
                                type="email"
                                className="form-controlP form-control-alternative mb-2"
                                placeholder="Email"
                                name="user_email"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-lg-1">
                            <div className="form-group">
                              
                              <div className="text-end">
                            <button
                              type="submit"
                              className="btn btn-creamL col"
                            >
                              SEND MESSAGE
                            </button>
                          </div>
                            </div>
                          </div>

                        </div>
                        

                        
                        
                      </div>
                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default EmailSubHome;
