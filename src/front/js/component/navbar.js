import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const token = localStorage.getItem("token");

	useEffect(() => {
		actions.private();
	}, [store.auth]);

	return (
		<div className="sticky-top">
			<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Safari Adventure</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-primary m-2">Sign Up</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary m-2">Login</button>
					</Link>
				</div>
			</div>
			</nav>

{/*------------------------------------------------------- Segundo NAV --------------------------------------------------------------*/}
			
			<div className="navBar2">
				<nav className="navbar">
				<div className="container-fluid  d-flex justify-content-center">

{/*------------------------------------------------------- SAFARI TAB --------------------------------------------------------------*/}

					<span className="nav2Button me-3 nav-item">
					<Link   
						to="/Safari"
						className="nav2Button">
						SAFARI
					</Link>
					</span>

{/*--------------------------------------------------- CAMP DROPDOWN TAB --------------------------------------------------------------*/}

					<div className="dropdown">
							<button className="dropbtn">
								<Link   
									to="/Camp"
									className="nav2Button">
										THE CAMP
								</Link>
								</button>
							<div className="dropdown-content">
							<a className="dropdown-item">
									<Link className="linkToView" to="/Eat">
										EAT
									</Link> 
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/Sleep">
										SLEEP
									</Link> 
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/Relax">
										RELAX
									</Link> 
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/OtherServices">
										OTHER SERVICES
									</Link> 
								</a>
							</div>
						</div>

{/*----------------------------------------------- EXPERIENCE DROPDOWN TAB ---------------------------------------------------------*/}

					<div className="dropdown">
						<button className="dropbtn">
							<Link   
								to="/Experience"
								className="nav2Button">
									EXPERIENCE
							</Link>
						</button>
						<div className="dropdown-content">
							<a className="dropdown-item">
									<Link className="linkToView" to="/Maasai">
										MASAI
									</Link> 
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/Sundowners">
										SUNDOWNERS
									</Link>
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/BalloonSafari">
										BALLOON SAFARI
									</Link>
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/PhotoSafari">
										PHOTO SAFARI
									</Link>
								</a>
						</div>
					</div>

{/*----------------------------------------------------ABOUT US DROPDOWN TAB ---------------------------------------------------------*/}

						<div className="dropdown">
							<button className="dropbtn">
								<Link   
									to="/AboutUs"
									className="nav2Button">
										ABOUT US
								</Link>
							</button>
							<div className="dropdown-content">
								<a className="dropdown-item">
									<Link className="linkToView" to="/PhotoGallery">
										PHOTO GALLERY
									</Link> 
								</a>
								<a className="dropdown-item">
									<Link className="linkToView" to="/CommunityProjects">
										COMMUNITY PROJECTS
									</Link> 
								</a>
							</div>
						</div>

{/*----------------------------------------------------TRAVEL PLANNING DROPDOWN TAB --------------------------------------------------*/}

						<div className="dropdown">
							<button className="dropbtn">
								<Link   
									to="/TravelPlan"
									className="nav2Button">
										TRAVEL PLANNING
								</Link>
							</button>
							<div className="dropdown-content">
									<a className="dropdown-item">
										<Link className="linkToView" to="/Packages">
											PACKAGES
										</Link> 
									</a>
								</div>
						</div>

{/*-----------------------------------------------------------CONTACT TAB -------------------------------------------------------------*/}
						
						<button className="nav2Button me-3 nav-item  ">
							<Link   
								to="/Contact"
								className="nav2Button">
								CONTACT
							</Link>
						</button>

						{store.auth ? (
							<button className="nav2Button me-3 nav-item  ">

								<Link to="/Camp" className="nav2Button">
                 				 Prueba
                				</Link>
							</button>
                
              ) : null}{" "}


				</div>
				</nav>
			</div>
		</div>
	);
};
