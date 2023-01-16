import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodging from "../../../img/lodging-icon.png";
import transport from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const PackagesDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackageDetail(params.id);
    window.scrollTo(0, 0);
    actions.comparingFavorites();
  }, [params.id, store.userId]);

  let handleAddFavorites = async (id) => {
    //this function prevent a user to add a favorite whitout been loged, is send tthe user to log in page
    let msj = await actions.createFavorite(id);

    if (msj === "User is not logged in") {
      navigate("/login");
    }
  };

  if (store.packageDetail) {
    return (
      <div>
        <div
          className="header d-flex align-items-center"
          style={{
            minHeight: "500px",
            backgroundImage: `url(${store.packageDetail.url2})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
        ></div>

        				{/* <img
                    		src={store.packageDetail.url3}
                    		className="img-fluid rounded p-1 "
                    		alt="..."
                    		style={{
                      			
                      			borderColor: "#b2a97e",      			
                    		}}
                  		/> */}

        <div
          className="packdetailbkg"
          style={{
            backgroundImage: `url(${store.packageDetail.url3})`,
          }}
        >
          <div className="container ">
            <div className="row row-cols-2 g-3 mt-5">
              <div className="col-7">
                <h3 className="package-detail-title">
                  {store.packageDetail.name}
                </h3>
                <p className="package-detail-subtitle">
                  {store.packageDetail.category}
                </p>
                <img className="separator mr-3" src={separator}></img>
              </div>
              <div className="col-5">
                <div className="row row-cols-5 justify-content-center">
                  <div className="col-2">
                  <button
                          className="btn btn-light"
                          type="button"
                          onClick={() => {
                            handleAddFavorites(store.packageDetail.id);
                          }}
                        >
                          {store.favoriteItem?.includes(parseInt(params.id)) ? (
                            <BsFillHeartFill />
                          ) : (
                            <BsHeart />
                          )}
                        </button>
                  </div>
                  <div className="col-2">
                    <button className="btn-alert btn-l">all</button>
                  </div>
                  <div className="col-2">
                    <button className="btn-alert btn-l">all</button>
                  </div>
                  <div className="col-2">
                    <button className="btn-alert btn-l">all</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="packages-details-icons row row-cols-6 mt-5 ml-5 mr-5 justify-content-center text-center">
              <div className="">
                <img className="iconsdestinations" src={tripdays}></img>
                <p className="desticontitle">TOUR DURATION</p>
                <p className="desticoncontent">
                  {store.packageDetail.tour_duration}
                </p>
              </div>

              <div className="">
                <img className="iconsdestinations" src={destinationsicon}></img>
                <p className="desticontitle">DESTINATIONS INCLUDED</p>
                <p className="desticoncontent">
                  {store.packageDetail.destinations}
                </p>
              </div>

              <div className="">
                <img className="iconsdestinations" src={activity}></img>
                <p className="desticontitle">ACTIVITIES</p>
                <p className="desticoncontent">
                  {store.packageDetail.activities}
                </p>
              </div>

              <div className="">
                <img className="iconsdestinations" src={transport}></img>
                <p className="desticontitle">TRANSPORT MODE</p>
                <p className="desticoncontent">
                  {store.packageDetail.transport}
                </p>
              </div>

              <div className="">
                <img className="iconsdestinations" src={lodging}></img>
                <p className="desticontitle">LODGING</p>
                <p className="desticoncontent">{store.packageDetail.lodging}</p>
              </div>
            </div>

            <div>
              <h3 className="ov-title">OVERVIEW</h3>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description}
                </p>
              </div>
            </div>

            <div className="row row-cols-2 mt-2 mb-2">
              <img src={store.packageDetail.url4}></img>
              <img src={store.packageDetail.url5}></img>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title1}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation1}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description1}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title2}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation2}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description2}
                </p>
              </div>
            </div>

            <div className="row row-cols-1 mt-2 mb-2">
              <img src={store.packageDetail.url6}></img>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title3}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation3}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description3}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title4}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation4}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description4}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title5}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation5}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description5}
                </p>
              </div>
            </div>

            <div className="row row-cols-3 mt-2 mb-2">
              <img src={store.packageDetail.url7}></img>
              <img src={store.packageDetail.url8}></img>
              <img src={store.packageDetail.url9}></img>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title6}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation6}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description6}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title7}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation7}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description7}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title8}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation8}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description8}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title9}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation9}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description9}
                </p>
              </div>
            </div>

            <div className="row row-cols-1 mt-2 mb-2">
              <img src={store.packageDetail.url10}></img>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title10}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation10}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description10}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title11}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation11}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description11}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title12}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation12}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description12}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title13}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation13}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description13}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title14}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation14}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description14}
                </p>
              </div>
            </div>

            <div className="row row-cols-2 mt-2 mb-2">
              <img src={store.packageDetail.url11}></img>
              <img src={store.packageDetail.url12}></img>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title15}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation15}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description15}
                </p>
              </div>
            </div>

            <div className="details-overview row row-cols-2">
              <div className="details-overview-title col-2">
                <h4 className="overview-title">
                  {store.packageDetail.overview_title16}
                </h4>
                <h6 className="overview-acomodation">
                  {store.packageDetail.overview_acomodation16}
                </h6>
              </div>
              <div className="details-overview-description col-10">
                <p className="details-overview-description">
                  {store.packageDetail.overview_description16}
                </p>
              </div>
            </div>

            <div className="row row-cols-2 mt-2 mb-2">
              <img src={store.packageDetail.url13}></img>
              <img src={store.packageDetail.url14}></img>
            </div>

            {/* <div>
					<div className="row g-0">
						<div className="col-12">
						
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h2 className="card-title "></h2>
								<p className="textCard card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
								<p className="card-text "><small className="text-muted">Last updated 3 mins ago</small></p>							
							</div>
						</div>
					</div>

					<div className="singleViewDetails container text-center">
						<div className="row row-cols-6">
							<div className="spacer col "><h5>Name</h5><h5>{store.packageDetail.name}</h5></div>
							<div className="spacer col "><h5>Title</h5><h5>{store.packageDetail.description}</h5></div>
							<div className="spacer col "><h5>Description</h5><h5>{store.packageDetail.category}</h5></div>
							
						</div>
					</div>
				</div> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-light text-center mt-5">Loading please wait...</div>
    );
  }
};

export default PackagesDetails;
