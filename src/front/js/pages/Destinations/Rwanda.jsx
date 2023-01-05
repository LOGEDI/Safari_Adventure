import React from 'react'
import { Link } from 'react-router-dom';
import destinationsHero from  "../../../img/ngorongoro.jpg"
import iby from "../../../img/iby-iwacu_thumb.jpg"
import kigali from "../../../img/kigali_thumb.jpg"
import rwanda from "../../../img/rwanda_thumb.jpg"
import destinationBackground from "../../../img/destinations_background.jpg"
import locationicon from "../../../img/location-icon.png"
import separator from "../../../img/heading-separator.png"
import activity from "../../../img/activity-icon.png"
import destinationsicon from "../../../img/destination-icon.png"
import tripdays from "../../../img/trip-days.png"

const Rwanda = () => {
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
                    <button href="#" className="destinationbtn ">
                      Uganda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Rwanda">
                    <button href="#" className="destinationbtn-on ">
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
                <h2 className='destinations-main-title text-center'>RWANDA</h2>
                <p className='destinations-p mt-4'>Also known as 'the land of a thousand hills’, 
                Rwanda is a landlocked country of lovely and various landscapes. 
                The Virunga volcanic mountains have high altitude forests, world-famous mountain gorillas, 
                and Lake Kivu offers beautiful beaches, jutting peninsulas and an archipelago of islands. 
                Many visitors have been surprised by the fact that Rwandans are now harmoniously living together 
                only 15 years after the genocide that threatened to shatter the social fabric of the country. 
                Rwandans are not only living together today but they are striving to be recognized as one people.
                </p>
                <p className='destinations-p mt-4'>Parc National des Volcans in the Virunga volcanoes is home to the mountain 
                gorillas to which Dian Fossey dedicated her life. 
                Nyungwe Forest is one of the largest montane forests in Central Africa and is renowned for its large troops of 
                Columbus monkeys, chimpanzees, tracking of the elusive golden monkey and rich variety of orchids 
                that can be seen on a nature walk within this tropical rain forest. 
                There is a variety of wildlife including the Akagera National Park, 
                the only Savannah park in the country with large herds of elephant emerging from the woodland, 
                hippo and crocodile around the lake. Rwanda has a rich culture with its second city, 
                Butare, having one of the finest cultural museums in Africa or visit one of the genocide 
                memorial sites where victims killed in Kigali are remembered and on its outskirts are buried.
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
                <p className='desticoncontent'>RWANDDA GORILLA TREK</p>
              </div>

            </div>

            <div className='row row-cols-4 g-3 mt-4 justify-content-center'>
            
            {/* <Link to="/Rwanda"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={iby} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Iby Iwacu Cultural Village</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Rwanda</h5>
                </div>
              </div>
            {/* </Link> */}

            {/* <Link to="/Rwanda"> */}
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={kigali} alt="Card image cap"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Kigali City</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Rwanda</h5>                                  
                </div>
              </div> 
            {/* </Link> */}

            {/* <Link to="/Rwanda"> */}
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={rwanda} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Volcanoes National Park</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Rwanda</h5>
                  </div>
                </div>
              {/* </Link> */}
              
            </div>
</div>
</div>
    </div>
  )
}

export default Rwanda;
