import React, { Component } from "react";

export const Footer = () => (
	<footer className="bg-dark text-center text-white">
	<div className="footerContainer container p-4 pb-0">
	 <div className="footerSection mb-4">
	   <a className="footerBtn btn btn-outline-light btn-floating m-1" href="#!" role="button"
		  ><i className="fab fa-facebook-f"></i></a>
   
	   <a className="footerBtn btn btn-outline-light btn-floating m-1" href="http://twitter.com/" role="button"
		  ><i className="fab fa-twitter"></i></a>
   
		<a className="footerBtn btn btn-outline-light btn-floating m-1" href="http://google.com/" role="button"
		  ><i className="fab fa-google"></i></a>
   
		<a className="footerBtn btn btn-outline-light btn-floating m-1" href="http://facebook.com/" role="button"
		 ><i className="fab fa-instagram"></i></a>
   
	   <a className="footerBtn btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" role="button"
		  ><i className="fab fa-linkedin-in"></i></a>
   
		<a className="footerBtn btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button"
		  ><i className="fab fa-github"></i></a>
	  </div>
	</div>
   
	<div className="text-center p-3" >
	  © Copyright Safari Adventures
	  <a className="text-white" href="https://mdbootstrap.com/"></a>
	</div>
	</footer>
);
