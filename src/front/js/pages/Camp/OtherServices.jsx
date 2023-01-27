import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../../img/ContactMain.jpg";

// need to make text go over image this will be done when it is merged
// need to add footer


const OtherServices = () => {
  return (
    
    <div className="page-header">
    <div className="pagesBackground">
            <div>
              <div>
                <div className="main-content">
                  <div
                    className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                      
                      backgroundImage: `url(${Contact})`,
      
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="container-fluid d-flex align-items-center">
                      <div className="text-on-image">
                        <h2 className="page-title">OTHER SERVICES & AMENITIES</h2>
                        <span className="page-subtitle">
                        Safari Adventures
                        </span>
                      </div>
                    </div>
                  </div>
    
          <div className="col-12">
              <div className="card m-3 border-light">
                <h2 className="description-title">OUR SERVICES</h2>
                <div className="description-content">
                <div className="font">
      <ul><i class="fas fa-wifi"></i>   Wifi</ul>
<ul><i class="fas fa-plane"></i>   Airport</ul>
<ul><i class="fas fa-concierge-bell"></i>   Room Service</ul>
<ul><i class="fas fa-child"></i>   Activities</ul>
<ul><i class="fas fa-car"></i>    Private Chauffeur</ul>
<ul></ul>

</div>
                </div>
              </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
 );
};

export default OtherServices;

{/* <div className="container">
{}
<footer className="bg-light text-center text-lg-start">
<div className="text-center p-3" >
  © Copyright Safari Advendures:
  <a className="text-dark" href="https://mdbootstrap.com/"></a>
</div>
</footer>
</div> */}


// <footer class="bg-dark text-center text-white">
// <div class="container p-4 pb-0">
//   <section class="mb-4">
//     <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i class="fab fa-facebook-f"></i
//     ></a>

//     <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i class="fab fa-twitter"></i
//     ></a>

//     <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i class="fab fa-google"></i
//     ></a>

//     <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i class="fab fa-instagram"></i
//     ></a>

//     <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i class="fab fa-linkedin-in"></i
//     ></a>

//     <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i class="fab fa-github"></i
//     ></a>
//   </section>
// </div>

// <div class="text-center p-3" >
//   © Copyright Safari Adventures
//   <a class="text-white" href="https://mdbootstrap.com/"></a>
// </div>
// </footer>
