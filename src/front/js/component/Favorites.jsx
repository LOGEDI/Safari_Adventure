import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Nav } from "react-bootstrap";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.userId != null) {
      actions.getFavorites();
    }
  }, [store.userId]);

  return (
    <div>
      Favorites
      {store.auth ? (
        <div className="main-content mt-2">
          <div className="container-fluid">
            <h1>Favorites </h1>
          </div>
          <div className="container-fluid col-12 my-4">
            {store.favoritesList?.length > 0 ? (
              store.favoritesList?.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start text-left w-25">
                      <img
                        src={item.url}
                        className="img-fluid rounded p-1 w-100 mx-1"
                        alt="..."
                        style={{
                          maxHeight: "3rem",
                          maxWidth: "3rem",
                          borderColor: "#b2a97e",
                        }}
                      />
                      {item?.name}
                    </div>
                    <div className="text-left"></div>
                    <div className="d-flex justify-content-end">
                      <div className="mx-4">
                        <p className="card-text"></p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <span
                          className="btn btn-outline-light"
                          onClick={() => actions.deleteFavorites(item.id)}
                          style={{ color: "#bdb284" }}
                        >
                          <b>X</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p>No favorite package</p>
            )}
            {/* </ol> */}
          </div>
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1>Not logged in...</h1>
            <Nav.Link className="" style={{ color: "#bdb284" }} href="/login">
              Go to login
            </Nav.Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
