import React, { useEffect, useContext} from 'react'
import { Context } from "../../store/appContext";
import { useParams } from 'react-router-dom';
import Comments from '../../component/Comments.jsx';

const PackagesDetails = () => {
    const {store, actions} = useContext(Context);
  	const params = useParams();
	

      	useEffect(() => {
	        actions.getPackageDetail(params.id);
			actions.getProductComments(params.id);
        	window.scrollTo(0, 0);    
        	actions.comparingFavorites();
      	}, [params.id, store.userId]);

      if (store.packageDetail) {
		return (

			<div>
						{/* <img
                    		src={store.packageDetail.url}
                    		className="img-fluid rounded p-1 "
                    		alt="..."
                    		style={{
                      			// maxHeight: "54rem",
                      			borderColor: "#b2a97e",
                      			// maxWidth: "24rem",
                    		}}
                  		/> */}

			<div className="container ">

			<div className='row row-cols-2 g-3 mt-5' >
              <div className='col-3'>
                <h3>Destinations</h3>
                <p>Discover Story-worthy places</p>
              </div>              
              <div className='col-9'>               
                <div className='row row-cols-6'>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'> all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                </div>             
              </div>
            </div>

			<div className='row row-cols-5 mt-5'>
				<div className='col text-center'>
					<h5>Tour duration</h5>
				</div>
				<div className='col text-center'>
					<h5>Destinations included</h5>
				</div>
				<div className='col text-center'>
					<h5>Activities</h5>
				</div>
				<div className='col text-center'>
					<h5>Transpor mode</h5>
				</div>
				<div className='col text-center'>
					<h5>lodging</h5>
				</div>
			</div>

				<div className='row row-cols-2 mt-5'>
					<div className='col-2'>
						<h3>Overview</h3>
						<h4>Day 1: Arrival</h4>
						<h6>overnigth....</h6>

					</div>
					<div className='col-10'>
						<p>Welcome to Kenya. On arrival in Nairobi, 
							after clearing customs and immigration, you are met by a representative of Wild Images Africa Safaris and transferred to Nairobi Hemingway’s Hotel. 
							Hemingway’s Nairobi is a brand-new luxury boutique hotel located in the suburb of Karen featuring 45 suites overlooking the Ngong Hills.
						</p>												
					</div>
				</div>

				<div className='row row-cols-2 mt-5'>
					<img src={store.packageDetail.url}></img>
					<img src={store.packageDetail.url}></img>
				</div>
				<div>
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
							{/* <div className="spacer col text-light"><h5>Height</h5><h5>{store.packagesDetails.properties.height}</h5></div>
							<div className="spacer col text-light"><h5>Skin Color</h5><h5>{store.packagesDetails.properties.skin_color}</h5></div>
							<div className="onlyUp col text-light"><h5>Eye color</h5><h5>{store.packagesDetails.properties.eye_color}</h5></div> */}
						</div>
					</div>
				</div>
			
		</div>
		
		
		{store.auth ? <Comments /> : null}
		

		<div className="row ">        
          <div className="col-sm-12 col-md-7 ">
            <div>
              <h3
                className="text-center mt-3"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                COMMENTS:
              </h3>
              <div className="scrolleable col-10 m-auto">
                <ul className="list-group">
                  {" "}
                  {store.comments.length > 0 ? (
                    store.comments.map((item, index) => (
                      <div key={index}>
                        <li  className="my-3" >
                          <img
                            style={{ width: "2rem", height: "2rem" }}
                            src="https://thumbs.dreamstime.com/z/male-tourist-glasses-hat-icon-simple-flat-design-illustration-74079657.jpg"
                            alt=""
                            className="m-2"
                          />
                          {item.comment}                         
                        </li>
                        <hr style={{ borderTop: "2px #bdb284" }} />
                      </div>
                    ))
                  ) : (
                    <div className="mt-5">
                      <hr style={{ borderTop: "2px #bdb284" }} />
                      <p className="text-muted text-center ">
                        No comments for this package
                      </p>
                      <hr style={{ borderTop: "2px #bdb284" }} />
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 ">
            <h3
              className="t my-4"
              style={{ textAlign: "center",}}
            >
              Related packagess:
            </h3>
            <img
                  src={store.packageDetail.url}
                  className="img-fluid rounded-start img-fluid"
                  alt="..."
                  style={{
                    border: "1px solid #ddd",
                    bordeRadius: "4px",
                    padding: "20px",
                    margin: "10px",
                    width: "100%",
					maxWidth: "400px"
                  }}
                />
          </div>
        </div>
		</div>
	)}
	else {
        return <div className="text-light text-center mt-5">Loading please wait...</div>;
      }
}

export default PackagesDetails;