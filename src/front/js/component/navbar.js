import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">Safary Adventure</span>
					</Link>
					<div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
				</div>
			</nav>

{/*------------------------------------------------- Segundo NAV ---------------------------------------------------------*/}
			
			<div className="sticky-top">
				<nav className="navBar2 navbar  ">
				<div className="container-fluid  d-flex justify-content-center">
					<li className="me-3 nav-item  ">
					<Link   
						to="/Safari"
						className="linkToView">
						Safari
					</Link>
					</li>
					<li className="me-3 nav-item ">
					<Link className="linkToView" to="/Camp">
						Camp
					</Link>
					</li>
					<li className="me-3 nav-item ">
					<Link className="linkToView" to="/Experience">
						Experience
					</Link>
					</li>
					<li className="me-3 nav-item ">
					<Link className="linkToView" to="/TravelPlan">
						TravelPlan
					</Link>
					</li>
					<li className="me-3 nav-item ">
					<Link className="linkToView" to="/AboutUs">
						AboutUs
					</Link>
					</li>
				</div>
				</nav>
			</div>
		</div>
	);
};
