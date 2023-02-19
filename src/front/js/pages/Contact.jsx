import React, { useRef } from "react";
import EmailSub from "../component/EmailSub.jsx";
import contactHero from "../../img/header-contact.jpg";
import separator from "../../img/heading-separator.png";
import GMaps from "../component/GMAPS.js";

const Contact = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
      <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${contactHero})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
              <h2 className=" page-title">CONTACT US</h2>
              <img className="separator1 " src={separator}></img>
              <h3 className="page-subtitle">
                Keep in touch with Safary Adventure
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid destinationsCards mt-5 ml-5">
          <div className="row">
           
 {/* -------------desacription--------------------           */}

            <div className="col-xl-4 order-xl-1 mb-5 mb-xl-0 cardProfileC ">
              <div className="">
                <div className="col-12 ">
                  <div className="card m-3 border-light">
                    <h2 className="description-title">OUR CONTACTS</h2>
                    <div className="description-contentC">
                      <h2>
                        <strong>
                          Safary Adventure welcomes your comments, suggestions,
                          and questions!
                        </strong>
                      </h2>

                      <h3 className="mt-4">
                        <strong>To contact us by phone:</strong>
                      </h3>

                      <h3>
                        <strong>Membership inquiries:</strong> xxx-xxx-xxxx
                      </h3>
                      <h3>
                        <strong>General inquiries:</strong> xxx-xxx-xxxx
                      </h3>
                       <GMaps />
                    </div>
                  </div>
                </div>
              </div>
            </div>

{/* ------------form------------------------ */}

            <div className="col-xl-8 order-xl-1">
              <EmailSub />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
