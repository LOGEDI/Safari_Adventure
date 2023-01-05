import React from 'react'
import { Link } from 'react-router-dom';
import destinationsHero from  "../../../img/ngorongoro.jpg"
import amboseli from "../../../img/amboseli_thumb.jpg"
import maasai from "../../../img/maasaimara_thumb.jpg"
import nairobi from "../../../img/nairobi_thumb.jpg"
import nakuru from "../../../img/lakenakuru_thumb.jpg"
import samburu from "../../../img/samburu_thumb.jpg"
import destinationBackground from "../../../img/destinations_background.jpg"
import locationicon from "../../../img/location-icon.png"
import separator from "../../../img/heading-separator.png"
import activity from "../../../img/activity-icon.png"
import destinationsicon from "../../../img/destination-icon.png"
import tripdays from "../../../img/trip-days.png"

const Kenya = () => {
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
                    <button href="#" className="destinationbtn-on">
                      Kenya
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Ethiopia">
                    <button href="#" className="destinationbtn ">
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
                <h3 className='destinations-main-title text-center'>KENYA</h3>
                <p className='destinations-p mt-4'>Kenya is a country of great natural beauty. 
                Well known as a safari destination, there are areas not fully explored and the opportunity to get off the beaten track away from the crowds. 
                The wide open spaces that stretch as far as the eye can see are breathtaking. The variety of wilderness areas including, National Parks & Reserves and private ranches & 
                conservation areas offer you the freedom to step out of your safari vehicle and enjoy a variety of activities. This is an exciting destination for all ages and fitness levels, 
                where a safari can be as individual as you are, 
                and can satisfy your own personal needs and interests.
                </p>
                <p className='destinations-p mt-4'>A safari is not all about wildlife viewing – authentic encounters with everyday life is an enlightening experience. 
                Kenya has a culture born of countless sources. This region has been crossed by the paths of a long and complex history. 
                From the prehistoric records of early man to the present day, Kenya has been a land of unending change, contrasts and diversity. 
                Kenya has drawn on all of these influences to develop its own unique culture.
                </p>
              </div>
            </div>

            <div className='row row-cols-5 justify-content-center text-center mt-4'>
              <div className=''>
                <img className='iconsdestinations' src={destinationsicon}></img>
                <p className='desticontitle'>PLACES TO VISIT</p>
                <p className='desticoncontent'>5 Locations</p>
              </div>
              <div className=''>
                <img className='iconsdestinations' src={activity}></img>
                <p className='desticontitle'>EXPERIENCES</p>
                <p className='desticoncontent'>City Tour, Trekking, Animal Tracking, Cultural Visits</p>
              </div>
              <div className=''>
                <img className='iconsdestinations' src={tripdays}></img>
                <p className='desticontitle'>INCLUDED IN:</p>
                <p className='desticoncontent'>CLASSSIC KENYAN SAFARI</p>
              </div>

            </div>

            <div className='row row-cols-4 g-3 mt-4'>
            
            {/* <Link to="/Kenya"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={amboseli} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Amboseli National Park</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                                                      
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Kenya"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={maasai} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Maasai Mara</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                  
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Kenya"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={nairobi} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Nairobi City</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                                                     
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Kenya"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={nakuru} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Nakuru National Park</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                                    
                </div>
              </div>
            {/* </Link> */}
             
            {/* <Link to="/Kenya"> */}
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={samburu} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Samburu Game Reserve</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Kenya</h5>
                  </div>
                </div>
              {/* </Link> */}

              
           

            
              
            </div>
</div>
</div>
    </div>
  )
}

export default Kenya;