import React from 'react'
import { Link } from 'react-router-dom';
import destinationsHero from  "../../../img/ngorongoro.jpg"
import batwa from "../../../img/batwatribe_thumb.jpg"
import bwindi from "../../../img/uganda_thumb.jpg"
import destinationBackground from "../../../img/destinations_background.jpg"
import locationicon from "../../../img/location-icon.png"
import separator from "../../../img/heading-separator.png"
import activity from "../../../img/activity-icon.png"
import destinationsicon from "../../../img/destination-icon.png"
import tripdays from "../../../img/trip-days.png"

const Uganda = () => {
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
                    <button href="#" className="destinationbtn ">
                      Ethiopia
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Uganda">
                    <button href="#" className="destinationbtn-on ">
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
                <h3 className='destinations-main-title text-center'>UGANDA</h3>
                <p className='destinations-p mt-4'>Winston Churchill called Uganda 'the pearl of Africa’, 
                presumably basing his opinion on the country’s great natural beauty. 
                From the moment the visitor lands at Entebbe’s international airport, 
                with its breathtaking equatorial location on the forested shore of island-strewn Lake Victoria, 
                it is clear that Uganda is no ordinary safari destination. 
                Uganda is where the East African savannah meets the West African jungle. 
                In this lush country, one can observe lions prowling the open plains, 
                track chimpanzees through the rain forest undergrowth, 
                then navigate tropical channels teeming with hippos and crocs before setting off into the 
                misty mountains to stare deep into the eyes of a mountain gorilla.
                </p>
                
                <p className='destinations-p mt-4'>The most profound attraction in Uganda are the silver-back and black-back Mountain Gorillas, 
                as well as other primates including chimpanzees and Golden Monkeys, 
                all found in Bwindi Impenetrable Forests, Mgahinga National Park and on Ngamba Island. 
                The mighty volcanic and non-volcanic mountains are a major attraction for hiking activities. 
                With almost a third of the country covered by water, 
                the fresh water lakes offer opportunities for water activities and sports. 
                Lake Victoria, the largest in Africa, dominates the southern border of the country and offers sport fishing, 
                sailing and lake cruises. The Eastern region is a must visit for all water activities and adventurous visitors with boat rides, 
                white water rafting, bungee jumping in a variety of destinations. 
                Increasingly popular for adventurers is white water rafting on the River Nile.
                </p>
              </div>
            </div>

            <div className='row row-cols-5 justify-content-center text-center mt-4'>
              <div className=''>
                <img className='iconsdestinations' src={destinationsicon}></img>
                <p className='desticontitle'>PLACES TO VISIT</p>
                <p className='desticoncontent'>3 Locations</p>
              </div>
              <div className=''>
                <img className='iconsdestinations' src={activity}></img>
                <p className='desticontitle'>EXPERIENCES</p>
                <p className='desticoncontent'>City Tour, Trekking, Animal Tracking, Cultural Visits</p>
              </div>
              <div className=''>
                <img className='iconsdestinations' src={tripdays}></img>
                <p className='desticontitle'>INCLUDED IN:</p>
                <p className='desticoncontent'>EAST AFRICAN SAFARI</p>
              </div>

            </div>

            <div className='row row-cols-4 g-3 mt-4 justify-content-center'>
                                                                   
            {/* <Link to="/Uganda"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={batwa} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Batwa Trival Lands</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Uganda</h5>                                  
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Uganda"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={bwindi} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Gorilla Forest, Bwindi</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Uganda</h5>                 
                </div>
              </div>
            {/* </Link>               */}
              
            </div>
</div>
</div>
    </div>
  )
}

export default Uganda;
