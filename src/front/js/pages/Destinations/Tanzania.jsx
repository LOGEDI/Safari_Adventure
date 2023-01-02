import React from 'react'
import { Link } from 'react-router-dom';
import destinationsHero from  "../../../img/ngorongoro.jpg"
import addis from  "../../../img/addiscity_thumb.jpg"
import amboseli from "../../../img/amboseli_thumb.jpg"
import axum from "../../../img/axum_thumb.jpg"
import bahir from "../../../img/bahirdar_thumb.jpg"
import batwa from "../../../img/batwatribe_thumb.jpg"
import gondar from "../../../img/gondar_thumb.jpg"
import bwindi from "../../../img/uganda_thumb.jpg"
import hawzen from "../../../img/hawzen_thumb.jpg"
import iby from "../../../img/iby-iwacu_thumb.jpg"
import kigali from "../../../img/kigali_thumb.jpg"
import lalibela from "../../../img/Lalibela_thumb.jpg"
import maasai from "../../../img/maasaimara_thumb.jpg"
import nairobi from "../../../img/nairobi_thumb.jpg"
import nakuru from "../../../img/lakenakuru_thumb.jpg"
import ngorongoro from "../../../img/ngorongoro_thumb.jpg"
import samburu from "../../../img/samburu_thumb.jpg"
import serengeti from "../../../img/serengeti_thumb.jpg"
import tarangire from "../../../img/tarangire_thumb.jpg"
import rwanda from "../../../img/rwanda_thumb.jpg"
import destinationBackground from "../../../img/destinations_background.jpg"
import locationicon from "../../../img/location-icon.png"
import separator from "../../../img/heading-separator.png"
import activity from "../../../img/activity-icon.png"
import destinationsicon from "../../../img/destination-icon.png"
import tripdays from "../../../img/trip-days.png"

const Tanzania = () => {
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
            <div className='row row-cols-2 g-3 mt-5' >
              <div className='col-3'>
                <h1 className='destinations-title' >DESTINATIONS</h1>
                <p className='destinations-subtitle'>Discover Story-worthy Places</p>
                <img className='separator mr-3' src={separator}></img>
              </div>              
              <div className='col-9'>               
                <div className='row row-cols-6 m-0 p-0'>
                  <div className='col-2'>
                  <Link to="/Destinations">
                    <button href="#" className="destinationbtn">
                      All
                    </button>
                  </Link>
                  </div>
                  <div className='col-2'>
                  <Link to="/Kenya">
                    <button href="#" className="destinationbtn">
                      Kenya
                    </button>
                  </Link>
                  </div>
                  <div className='col-2'>
                  <Link to="/Ethiopia">
                    <button href="#" className="destinationbtn ">
                      Ethiopia
                    </button>
                  </Link>
                  </div>
                  <div className='col-2'>
                  <Link to="/Uganda">
                    <button href="#" className="destinationbtn ">
                      Uganda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2'>
                  <Link to="/Rwanda">
                    <button href="#" className="destinationbtn ">
                      Rwanda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2'>
                  <Link to="/Tanzania">
                    <button href="#" className="destinationbtn-on ">
                      Tanzania
                    </button>
                  </Link>
                  </div>
                </div>             
              </div>
            </div>

            <div className="destinationanimation animated bounceInUp"
                style={{ animationDelay: "1s" }}>

            <div className='row row-cols-1 g-3 mt-4'>
              <div className='col-12'>
                <h3 className='destinations-main-title text-center'>TANZANIA</h3>
                <p className='destinations-p mt-4'>Tanzania is home to some of Africa’s most alluring destinations. 
                The Serengeti’s wildebeest migration along an infinite savanna; 
                the incongruous snow of Mt Kilimanjaro – Africa’s tallest mountain at 5,895m (19,341ft); 
                the crater bottom of Ngorongoro National Park teaming with wildlife; 
                the Swahili coast and pristine beaches along the spice islands of Zanzibar where fishermen 
                still plough the turquoise waters in traditional wooden sailboats; 
                Selous – Africa’s largest protected area and larger than Switzerland; 
                Ruaha and Katavi – insider tips for serious safari-goers; Mahale and Gombe – 
                prime destinations for seeing chimpanzees in the wild.
                </p>
                <p className='destinations-p mt-4'>Throughout, Tanzania offers travelers an array of options, 
                set against the backdrop of a cultural mosaic. Tanzania’s coastline was a favored stop on 
                ancient trading routes between the Indian sub-continent and the Middle-East. Spices, 
                jewels and slaves once passed through, bringing with them a melange of cultural riches 
                that remain today. The language of Swahili was born here, and old mosques, 
                coral palaces and pearly-white beaches still remain. While most visitors head straight for 
                the famed northern wildlife-watching circuit, followed by time relaxing on Zanzibar’s beaches, 
                Tanzania has much more to offer anyone with the time and inclination to head off the beaten path.
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
                <p className='desticoncontent'>SERENGETI TRAILS</p>
              </div>

            </div>

            <div className='row row-cols-4 g-3 mt-4 justify-content-center'>
            
            {/* <Link to="/Tanzania"> */}
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={ngorongoro} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Norongoro Crater</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Tanzania</h5>
                  </div>
                </div>
              {/* </Link> */}


              {/* <Link to="/Tanzania"> */}
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={serengeti} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Serengeti National Park</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Tanzania</h5>
                  </div>
                </div>
              {/* </Link> */}

              {/* <Link to="/Tanzania"> */}
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={tarangire} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Tarangire National Park</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Tanzania</h5>                  
                  </div>
                </div>
              {/* </Link>              */}
              
            </div>

</div>

</div>
</div>
    </div>
  )
}

export default Tanzania;
