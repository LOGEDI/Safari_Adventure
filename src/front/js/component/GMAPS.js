
import React, {useRef, useEffect} from "react";
      
const MAP_KEY = process.env.MAP_KEY; 
console.log(MAP_KEY)
const GMaps = ({ placeName }) => {
    const googleMapRef = useRef();
    let googleMap;
    useEffect(() => {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`;
      googleMapScript.async = true;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", () => {
        getLatLng();
      });
    }, []);
  
    const createGoogleMap = (coordinates) => {
      googleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom: 6,
        center: { lat: -0.332270, lng: 36.430980  

        },
        disableDefaultUI: true,
      });
    };
    const getLatLng = () => {
      let lat, lng, placeId;
      new window.google.maps.Geocoder().geocode(
        { address: `${placeName}` },
        function (results, status) {
          if (status === window.google.maps.GeocoderStatus.OK) {
            placeId = results[0].place_id;
            createGoogleMap(results[0].geometry.location);
            lat = results[0].geometry.location.lat(-0.362270);
            lng = results[0].geometry.location.lng(37.430980);
            new window.google.maps.Marker({
              position: {lat: -0.332270, lng: 36.430980  },
              map: googleMap,
              animation: window.google.maps.Animation.DROP,
              title: `${placeName}`,
            });
          } else {
            alert(
              "Geocode was not successful for the following reason: " + status
            );
          }
        }
      );
    };
    return (
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: "550px", height: "300px" }}
      />
    );
  };

export default GMaps