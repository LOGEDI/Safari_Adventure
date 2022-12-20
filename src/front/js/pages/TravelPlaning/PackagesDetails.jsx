import React, { useEffect, useContext} from 'react'
import { Context } from "../../store/appContext";
import { useParams } from 'react-router-dom';

const PackagesDetails = () => {
    const {store, actions} = useContext(Context);
  	const params = useParams();

      useEffect(() => {
		
		actions.getPackagesDetails(params.id);
        console.log(store.packagesDetails)
  	}, []);

      if (store.packagesDetails) {
		return (
			<div className="jumbotron ">

				<div className="card" style={{ maxWidth: "60%", margin: "auto"}}>
					<div className="row g-0">
						<div className="col-md-3">
							{/* <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"}  className="img-fluid rounded-start" alt="..." /> */}
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
							<div className="spacer col "><h5>Name</h5><h5>{store.packagesDetails.package_name}</h5></div>
							<div className="spacer col "><h5>Title</h5><h5>{store.packagesDetails.title}</h5></div>
							<div className="spacer col "><h5>Description</h5><h5>{store.packagesDetails.description}</h5></div>
							{/* <div className="spacer col text-light"><h5>Height</h5><h5>{store.packagesDetails.properties.height}</h5></div>
							<div className="spacer col text-light"><h5>Skin Color</h5><h5>{store.packagesDetails.properties.skin_color}</h5></div>
							<div className="onlyUp col text-light"><h5>Eye color</h5><h5>{store.packagesDetails.properties.eye_color}</h5></div> */}
						</div>
					</div>
				</div>
			
		</div>
	)}
	else {
        return <div className="text-light text-center mt-5">Loading please wait...</div>;
      }
}

export default PackagesDetails;