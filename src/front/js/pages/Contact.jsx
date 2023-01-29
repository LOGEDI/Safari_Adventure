import React from 'react'
import GMaps from "../component/GMAPS"
import "../../styles/index.css";

const Contact = () => {
  return (
    <div className='pagesBackground'>
    <div className="container">
<div className="page-header">
            <div className="head-image">
              <img
                className="col-12 m-0 black-rock"
                src="https://www.strathfield.nsw.gov.au/wp-content/uploads/2020/04/header-contact.jpg"
                alt=""
              />
            </div>
            <div className="text-on-image">
              <h2 className="page-title">CONTACT US</h2>
            </div>
      </div>
      <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-xl-6 order-xl-1 mb-5 mb-xl-0">
                  <div className="card card-profile ">
                    <div className="pageDescriptionContainerLeft  pt-md-4 pb-0 pb-md-4">
                      <h2 className="description-title">
                        CONTACT US
                      </h2>
                      <div className="description-content">
                        <p className="description-content">
                        Safary Adventure welcomes your comments, suggestions, and questions!

                        </p>
                        <p className="description-content">
                        We are experiencing an unusually high volume of correspondence at this time. Our current response time can be 3 or more business days from the date of your submission.
                        </p>
                      </div>
                      <div className="row justify-content-center mt-4 p-3">
                        <button
                          type="button"
                          className="btn btn-cream text-center"
                        >
                          BOOK WITH US
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="GMAPS">
        <GMaps/>
        </div> 
        </div>
        
    </div>
    
  )
}

export default Contact

{/* */}