import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import destinationBackground from "../../img/destinations_background.jpg"
import destinationsHero from  "../../img/experiences-hero.jpg"
import fotoprueba from  "../../img/classicKenyanSafariPack.jpg"
import backgroundtest from "../../img/classicKenyanSafariPromo2.jpg"
import activity from "../../img/activity-icon.png";
import destinationsicon from "../../img/destination-icon.png";
import tripdays from "../../img/trip-days.png";
import lodging from "../../img/lodging-icon.png";
import transport from "../../img/transport-icon.png";
import separator from "../../img/heading-separator.png"

const AboutUs = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    <div>AboutUs

      {/* {store.package.map((item) => (
        <div key={item.id} className="post"> */}
              
         
           
              {/* <div className="post_img" style={{backgroundImage: "url('https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"}}></div> */}
              {/* <img className="post_img" src={fotoprueba} alt="Nakuru"></img>

              
              <div className="post_text" style={{
                backgroundImage: `url(${backgroundtest})`,
              }}>
              
                <p className="post_date">20 Jan, 2021</p>
                <h3 className="post_title">{item.name}</h3>
                <a href="#" className="post_tag">article</a>
                <p className="post_description">
                  Duis tortor mi, iaculis in arcu vel, aliquam accumsan dui. Morbi non bibendum diam. Ut fermentum rutrum diam, vitae tincidunt metus tristique eu. Aliquam a fringilla justo.
                </p>
                <Link to={"/PackagesDetails/" + item.id}>
                    <button href="#" className="btn btn-outline-dark">
                      Learn More
                    </button>
                  </Link>
              </div>

             

              
        </div>

        ))} */}
      
              {/* <div className="package container-fluid">
            <div className="package-row row">
              <div className="package-pic col " style={{
                backgroundImage: `url(${fotoprueba})`,
              }}>
                
                <div >
                  col1
                </div>
              </div>

              <div className="col-7" style={{
                backgroundImage: `url(${backgroundtest})`,
              }}>
                col2
                <div className="" ></div>
              </div>
             </div>
</div> */}


			<div className="container ">
				<div className='row row-cols-2 mt-5 mb-5'>
					<input 
						type="file" 
						src={store.packageDetail.url}
						id="packages-hero"
						className=""
						placeholder="Packages Hero"
						// onChange={}
						// value={}
						>
							
						
					</input>
					
				</div>

  				<div className="form">

			<div className='row row-cols-2 g-3 mt-5' >
              <div className='col-7'>
                <input className="package-detail-title">{store.packageDetail.name}</input>
                <br/><br/>
                <input className="package-detail-subtitle">{store.packageDetail.category}</input>
                <br/>
				<img className='separator mr-3' src={separator}></img>
              </div>              
              <div className='col-5'>               
                <div className='row row-cols-5 justify-content-center'>
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
                  
                </div> 
				<div className='row row-cols-2 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
				
				</div>
              </div>
            </div>

			<div className=' row row-cols-6 mt-5 ml-5 mr-5 justify-content-center text-center'>

				<div className="">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <label className="">TOUR DURATION</label>
                    <input 
                      className=""
                      id="exampleName"
                      name="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    >{store.packageDetail.tour_duration}</input>
                  </div>

				<div className="">
                    <img className="iconsdestinations" src={destinationsicon}></img>
                    <label className="">DESTINATIONS inclu</label>
                    <input className="">{store.packageDetail.destinations}</input>
                  </div>

				<div className="">
                    <img className="iconsdestinations" src={activity}></img>
                    <label className="">-----ACTIVITIES----</label>
                    <input className="">{store.packageDetail.activities}</input>
                  </div>

				<div className="">
                    <img className="iconsdestinations" src={transport}></img>
                    <label className="">TRANSPORT MODE</label>
                    <input className="">{store.packageDetail.transport}</input>
                  </div>

				<div className="">
                    <img className="iconsdestinations" src={lodging}></img>
                    <label className="">-----LODGING-----</label>
                    <input className="">{store.packageDetail.lodging}</input>
                  </div>
			</div>

				<div>
          <br/>
					<h3 className='ov-title'>OVERVIEW</h3>
				</div>

				<div className='details-overview row row-cols-2'>				
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>
																	
					</input>
				</div>

				<div className='row row-cols-2 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
					<input type="file" src={store.packageDetail.url}></input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='row row-cols-1 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
					
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='row row-cols-3 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
					<input type="file" src={store.packageDetail.url}></input>
          <input type="file" src={store.packageDetail.url}></input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='row row-cols-1 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
					
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='row row-cols-2 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
					<input type="file" src={store.packageDetail.url}></input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

        <div className='details-overview row row-cols-2'>					
					<div className='details-overview-title col-2'>						
						<input className='overview-title'>{store.packageDetail.overview_title}</input>
						<input className='overview-acomodation'>{store.packageDetail.overview_acomodation}</input>
					</div>
					<input className='details-overview-description col-10'>																	
					</input>
				</div>

				<div className='row row-cols-3 mt-5 mb-5'>
					<input type="file" src={store.packageDetail.url}></input>
					<input type="file" src={store.packageDetail.url}></input>
					<input type="file" src={store.packageDetail.url}></input>
				</div>

</div>

</div>













        
    </div>
  )
}

export default AboutUs