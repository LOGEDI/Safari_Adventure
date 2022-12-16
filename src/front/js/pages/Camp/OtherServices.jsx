import React from "react";
import { Link } from "react-router-dom";
// need to make text go over image this will be done when it is merged
// need to add footer


const OtherServices = () => {
  return (
    <footer class="bg-light text-center text-lg-start">
    <div class="container p-4 pb-0">
      <form action="">
        <div class="row">
          <div class="col-auto mb-4 mb-md-0">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
  
          <div class="col-md-5 col-12 mb-4 mb-md-0">
            <div class="form-outline mb-4">
              <input type="email" id="form5Example25" class="form-control" />
              <label class="form-label" for="form5Example25">Email address</label>
            </div>
          </div>
  
          <div class="col-auto mb-4 mb-md-0">
            <button type="submit" class="btn btn-primary mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  
    <div class="text-center p-3" >
      © Copyright Safari Adventures
      <a class="text-dark" href="https://mdbootstrap.com/"></a>
    </div>
  </footer>
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
