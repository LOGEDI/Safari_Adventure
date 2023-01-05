import React from 'react'
import { Link } from 'react-router-dom';
import destinationsHero from  "../../../img/ngorongoro.jpg"
import addis from  "../../../img/addiscity_thumb.jpg"
import axum from "../../../img/axum_thumb.jpg"
import bahir from "../../../img/bahirdar_thumb.jpg"
import gondar from "../../../img/gondar_thumb.jpg"
import hawzen from "../../../img/hawzen_thumb.jpg"
import lalibela from "../../../img/Lalibela_thumb.jpg"
import destinationBackground from "../../../img/destinations_background.jpg"
import locationicon from "../../../img/location-icon.png"
import separator from "../../../img/heading-separator.png"
import activity from "../../../img/activity-icon.png"
import destinationsicon from "../../../img/destination-icon.png"
import tripdays from "../../../img/trip-days.png"

const Ethiopia = () => {
  return (
    <div>

          <div
            className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              minHeight: "400px",
              backgroundImage:
              `url(${destinationsHero})` ,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></div>

          <div className='destinationsBackground'
              style={{
                backgroundImage: `url(${destinationBackground})`,
              }}
         >

          <div className='container'>
          <div className='row row-cols-2 g-3' >
              <div className='col-3'>
                <h1 className='destinations-title mt-4' >DESTINATIONS</h1>
                <p className='destinations-subtitle'>Discover Story-worthy Places</p>
                <img className='separator mr-3' src={separator}></img>
              </div>              
              <div className='col-9'>               
                <div className='row row-cols-6 m-0 p-0'>
                  <div className='col-2 mt-4'>
                  <Link to="/Destinations">
                    <button href="#" className="destinationbtn">
                      All
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Kenya">
                    <button href="#" className="destinationbtn">
                      Kenya
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Ethiopia">
                    <button href="#" className="destinationbtn-on ">
                      Ethiopia
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Uganda">
                    <button href="#" className="destinationbtn ">
                      Uganda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Rwanda">
                    <button href="#" className="destinationbtn ">
                      Rwanda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Tanzania">
                    <button href="#" className="destinationbtn ">
                      Tanzania
                    </button>
                  </Link>
                  </div>
                </div>             
              </div>
            </div>

            <div className='row row-cols-1 g-3 mt-4'>
              <div className='col-12'>
                <p className='destinations-main-title text-center'>ETHIOPIA</p>
                <p className='destinations-p mt-4'>Ethiopia has been praised for its outstanding natural beauty, 
                dramatic landscapes and ancient culture, its fertile national parks, 
                3,000-year-old archeological history and nine UNESCO world heritage sites. 
                A visit to any part of Ethiopia can reveal it to be an amazing tourist destination. 
                In historical terms, it has the longest archaeological record of any country on earth; 
                in religious terms it was only the second country in the West to adopt Christianity, 
                and natural terms, it is uniquely diversified climatic and landscape condition, 
                making it a habitat for highest number of endemic species and more birds that any other country in the continent, Africa.
                </p>
                <p className='destinations-p mt-4'>With a great cultural diversity, 
                Ethiopia retains its own distinctive language, 
                its cuisine and its own calendar and clock. Each experience stirs the soul, 
                each moment when Ethiopia’s essence enters all those who experience it. 
                It's time to brush up on your Amharic, the national language of Ethiopia, 
                because the Ethiopia was named as the World's Best Tourism Destination for 2015 by the European Council on Tourism and Trade.
                </p>
              </div>
            </div>

            <div className='row row-cols-5 justify-content-center text-center mt-4'>
              <div className=''>
                <img className='iconsdestinations' src={destinationsicon}></img>
                <p className='desticontitle'>PLACES TO VISIT</p>
                <p className='desticoncontent'>6 Locations</p>
              </div>
              <div className=''>
                <img className='iconsdestinations' src={activity}></img>
                <p className='desticontitle'>EXPERIENCES</p>
                <p className='desticoncontent'>City Tour, Site Visits</p>
              </div>
              <div className=''>
                <img className='iconsdestinations' src={tripdays}></img>
                <p className='desticontitle'>INCLUDED IN:</p>
                <p className='desticoncontent'>ETHIOPIAN TOUR</p>
              </div>

            </div>

            <div className='row row-cols-4 g-3 mt-4'>
            
            {/* <Link to="/Ethiopia"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={addis} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Addis Ababa</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                                        
                </div>
              </div>
            {/* </Link> */}

              

            {/* <Link to="/Ethiopia"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={axum} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Axum</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                   
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Ethiopia"> */}
              <div  className="destinationthumb card border-2 " >
              <img className="destimg card-img-top" src={bahir} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Bahir Dar</h4>
                  <h5 className="destinations-card-text" >
                    <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                              
                </div>
              </div>
            {/* </Link> */}
             
            {/* <Link to="/Ethiopia"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={gondar} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Gondar</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                                     
                </div>
              </div>
            {/* </Link> */}
              
            {/* <Link to="/Ethiopia"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={hawzen} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Hawzen</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Ethiopia"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={lalibela} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Lalibela</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                  
                </div>
              </div>
            {/* </Link> */}

              
            </div>
</div>
</div>
    </div>
  )
}

export default Ethiopia;
