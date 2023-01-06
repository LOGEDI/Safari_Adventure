import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import destinationBackground from "../../img/destinations_background.jpg"
import destinationsHero from  "../../img/experiences-hero.jpg"
import fotoprueba from  "../../img/classicKenyanSafariPack.jpg"
import backgroundtest from "../../img/classicKenyanSafariPromo2.jpg"
import GMaps from "../component/GMAPS";

const AboutUs = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    
    <div>AboutUs
      <GMaps/>
      {store.package.map((item) => (
        <div key={item.id} className="post">
              
         
           
              {/* <div className="post_img" style={{backgroundImage: "url('https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"}}></div> */}
              <img className="post_img" src={fotoprueba} alt="Nakuru"></img>

              
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
        ))}
    </div>
  )
}

export default AboutUs