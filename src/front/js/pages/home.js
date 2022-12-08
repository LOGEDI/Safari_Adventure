import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="carouselContainer container-fluid home">
      <div
        id="carouselExampleFade"
        className=" carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className=" carousel-inner">
          <div className="container-fluid carouselContent">
            <div className="carousel-item active">
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/38.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/39.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/40.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
	);
};
