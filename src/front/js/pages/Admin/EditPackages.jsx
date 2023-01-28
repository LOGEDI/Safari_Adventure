import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "react-bootstrap/Nav";

import activity from "../../../img/activity-icon.png";
import destinationsicon from "../../../img/destination-icon.png";
import tripdays from "../../../img/trip-days.png";
import lodgingicon from "../../../img/lodging-icon.png";
import transporticon from "../../../img/transport-icon.png";
import separator from "../../../img/heading-separator.png";
import destinationBackground from "../../../img/destinations_background.jpg";

const EditPackages = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [tour_duration, setTour_duration] = useState("");
  const [destinations, setDestinations] = useState("");
  const [activities, setActivities] = useState("");
  const [transport, setTransport] = useState("");
  const [lodging, setLodging] = useState("");
  const [overview_title, setOverview_title] = useState("");
  const [overview_acomodation, setOverview_acomodation] = useState("");
  const [overview_description, setOverview_description] = useState("");
  const [overview_title1, setOverview_title1] = useState("");
  const [overview_acomodation1, setOverview_acomodation1] = useState("");
  const [overview_description1, setOverview_description1] = useState("");
  const [overview_title2, setOverview_title2] = useState("");
  const [overview_acomodation2, setOverview_acomodation2] = useState("");
  const [overview_description2, setOverview_description2] = useState("");
  const [overview_title3, setOverview_title3] = useState("");
  const [overview_acomodation3, setOverview_acomodation3] = useState("");
  const [overview_description3, setOverview_description3] = useState("");
  const [overview_title4, setOverview_title4] = useState("");
  const [overview_acomodation4, setOverview_acomodation4] = useState("");
  const [overview_description4, setOverview_description4] = useState("");
  const [overview_title5, setOverview_title5] = useState("");
  const [overview_acomodation5, setOverview_acomodation5] = useState("");
  const [overview_description5, setOverview_description5] = useState("");
  const [overview_title6, setOverview_title6] = useState("");
  const [overview_acomodation6, setOverview_acomodation6] = useState("");
  const [overview_description6, setOverview_description6] = useState("");
  const [overview_title7, setOverview_title7] = useState("");
  const [overview_acomodation7, setOverview_acomodation7] = useState("");
  const [overview_description7, setOverview_description7] = useState("");
  const [overview_title8, setOverview_title8] = useState("");
  const [overview_acomodation8, setOverview_acomodation8] = useState("");
  const [overview_description8, setOverview_description8] = useState("");
  const [overview_title9, setOverview_title9] = useState("");
  const [overview_acomodation9, setOverview_acomodation9] = useState("");
  const [overview_description9, setOverview_description9] = useState("");
  const [overview_title10, setOverview_title10] = useState("");
  const [overview_acomodation10, setOverview_acomodation10] = useState("");
  const [overview_description10, setOverview_description10] = useState("");
  const [overview_title11, setOverview_title11] = useState("");
  const [overview_acomodation11, setOverview_acomodation11] = useState("");
  const [overview_description11, setOverview_description11] = useState("");
  const [overview_title12, setOverview_title12] = useState("");
  const [overview_acomodation12, setOverview_acomodation12] = useState("");
  const [overview_description12, setOverview_description12] = useState("");
  const [overview_title13, setOverview_title13] = useState("");
  const [overview_acomodation13, setOverview_acomodation13] = useState("");
  const [overview_description13, setOverview_description13] = useState("");
  const [overview_title14, setOverview_title14] = useState("");
  const [overview_acomodation14, setOverview_acomodation14] = useState("");
  const [overview_description14, setOverview_description14] = useState("");
  const [overview_title15, setOverview_title15] = useState("");
  const [overview_acomodation15, setOverview_acomodation15] = useState("");
  const [overview_description15, setOverview_description15] = useState("");
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [url5, setUrl5] = useState("");
  const [url6, setUrl6] = useState("");
  const [url7, setUrl7] = useState("");
  const [url8, setUrl8] = useState("");
  const [url9, setUrl9] = useState("");
  const [url10, setUrl10] = useState("");
  const [url11, setUrl11] = useState("");
  const [url12, setUrl12] = useState("");
  const [url13, setUrl13] = useState("");
  const [url14, setUrl14] = useState("");
  const [url15, setUrl15] = useState("");

  const edit = async (id) => {
    let response = await actions.updatePackage(
      name,
      category,
      description,
      title,
      tour_duration,
      destinations,
      activities,
      transport,
      lodging,
      overview_title,
      overview_acomodation,
      overview_description,
      overview_title1,
      overview_acomodation1,
      overview_description1,
      overview_title2,
      overview_acomodation2,
      overview_description2,
      overview_title3,
      overview_acomodation3,
      overview_description3,
      overview_title4,
      overview_acomodation4,
      overview_description4,
      overview_title5,
      overview_acomodation5,
      overview_description5,
      overview_title6,
      overview_acomodation6,
      overview_description6,
      overview_title7,
      overview_acomodation7,
      overview_description7,
      overview_title8,
      overview_acomodation8,
      overview_description8,
      overview_title9,
      overview_acomodation9,
      overview_description9,
      overview_title10,
      overview_acomodation10,
      overview_description10,
      overview_title11,
      overview_acomodation11,
      overview_description11,
      overview_title12,
      overview_acomodation12,
      overview_description12,
      overview_title13,
      overview_acomodation13,
      overview_description13,
      overview_title14,
      overview_acomodation14,
      overview_description14,
      overview_title15,
      overview_acomodation15,
      overview_description15,
      url,
      url1,
      url2,
      url3,
      url4,
      url5,
      url6,
      url7,
      url8,
      url9,
      url10,
      url11,
      url12,
      url13,
      url14,
      url15,
      id
    );
    setName("");
    setCategory("");
    setDescription("");
    setTitle("");
    setTour_duration("");
    setDestinations("");
    setActivities("");
    setTransport("");
    setLodging("");
    setOverview_title("");
    setOverview_acomodation("");
    setOverview_description("");
    setOverview_title1("");
    setOverview_acomodation1("");
    setOverview_description1("");
    setOverview_title2("");
    setOverview_acomodation2("");
    setOverview_description2("");
    setOverview_title3("");
    setOverview_acomodation3("");
    setOverview_description3("");
    setOverview_title4("");
    setOverview_acomodation4("");
    setOverview_description4("");
    setOverview_title5("");
    setOverview_acomodation5("");
    setOverview_description5("");
    setOverview_title6("");
    setOverview_acomodation6("");
    setOverview_description6("");
    setOverview_title7("");
    setOverview_acomodation7("");
    setOverview_description7("");
    setOverview_title8("");
    setOverview_acomodation8("");
    setOverview_description8("");
    setOverview_title9("");
    setOverview_acomodation9("");
    setOverview_description9("");
    setOverview_title10("");
    setOverview_acomodation10("");
    setOverview_description10("");
    setOverview_title11("");
    setOverview_acomodation11("");
    setOverview_description11("");
    setOverview_title12("");
    setOverview_acomodation12("");
    setOverview_description12("");
    setOverview_title13("");
    setOverview_acomodation13("");
    setOverview_description13("");
    setOverview_title14("");
    setOverview_acomodation14("");
    setOverview_description14("");
    setOverview_title15("");
    setOverview_acomodation15("");
    setOverview_description15("");
    setUrl("");
    setUrl1("");
    setUrl2("");
    setUrl3("");
    setUrl4("");
    setUrl5("");
    setUrl6("");
    setUrl7("");
    setUrl8("");
    setUrl9("");
    setUrl10("");
    setUrl11("");
    setUrl12("");
    setUrl13("");
    setUrl14("");
    setUrl15("");

    Swal.fire({
      text: "Package Edited",
      confirmButtonColor: "#000000",
    }).then(function (result) {
      if (result.value) {
        window.location = "/Admin";
      }
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    // setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log(url);
    setUrl(file.secure_url);

    // console.log(file.secure_url);
    // setLoading(false);
  };

  const uploadImage1 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url1" + url);
    setUrl1(file.secure_url);
  };

  const uploadImage2 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url2" + url);
    setUrl2(file.secure_url);
  };

  const uploadImage3 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url3" + url);
    setUrl3(file.secure_url);
  };

  const uploadImage4 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url4" + url);
    setUrl4(file.secure_url);
  };

  const uploadImage5 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url5" + url);
    setUrl5(file.secure_url);
  };

  const uploadImage6 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url6" + url);
    setUrl6(file.secure_url);
  };

  const uploadImage7 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url7" + url);
    setUrl7(file.secure_url);
  };

  const uploadImage8 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url8" + url);
    setUrl8(file.secure_url);
  };

  const uploadImage9 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url9" + url);
    setUrl9(file.secure_url);
  };

  const uploadImage10 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url10" + url);
    setUrl10(file.secure_url);
  };

  const uploadImage11 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url11" + url);
    setUrl11(file.secure_url);
  };

  const uploadImage12 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url12" + url);
    setUrl12(file.secure_url);
  };

  const uploadImage13 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url13" + url);
    setUrl13(file.secure_url);
  };

  const uploadImage14 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url14" + url);
    setUrl14(file.secure_url);
  };

  const uploadImage15 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("tags", `codeinfuse, medium, gist`);
    data.append("upload_preset", "wluy28lt");
    data.append("timestamp", (Date.now() / 1000) | 0);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    const url = file.secure_url;
    console.log("url15" + url);
    setUrl15(file.secure_url);
  };

  return (
    <div>
      {store.admin ? (
        <div
          className="destinationsBackground"
          style={{
            backgroundImage: `url(${destinationBackground})`,
          }}
        >
          <h1 className="text-center">PACKAGES EDITOR</h1>

          <div className="container ">
            <Link to="/AdminPackages">
              <button className="btn btn-primary">BACK TO PACKAGES</button>
            </Link>
            <form
              className="form"
              onSubmit={() => {
                console.log(params.id);
                edit(params.id);
              }}
            >
              <div className="row row-cols-2 mt-5 mb-5">
                <label for="packages-main">CARD MAIN</label>
                <label for="packages-second">CARD BACKGROUND</label>
                <input
                  id="packages-main"
                  type="file"
                  className=""
                  placeholder="Packages main"
                  onChange={(e) => {
                    uploadImage(e);
                    setUrl(e.target.value);
                  }}
                ></input>
                <input
                  id="packages-second"
                  type="file"
                  className=""
                  placeholder="Packages second"
                  onChange={(e) => {
                    uploadImage1(e);
                    setUrl1(e.target.value);
                  }}
                ></input>
              </div>

              <div className="row row-cols-2 mt-5 mb-5">
                <label for="packages-hero">HERO IMG</label>
                <input
                  className="package-description"
                  type="text"
                  placeholder="CARD DESCRIPT"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></input>
                <input
                  id="packages-hero"
                  type="file"
                  className=""
                  placeholder="Packages Hero"
                  onChange={(e) => {
                    uploadImage2(e);
                    setUrl2(e.target.value);
                  }}
                ></input>

                <input
                  className="package-detail-title"
                  type="text"
                  placeholder="TITLE"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                ></input>
              </div>

              <div>
                ------------------------------------------------------------------------------BODY-------------------------------------------------------------------------
                <div className="row row-cols-2 g-3 mt-5">
                  <div className="col-7">
                    <input
                      className="package-detail-title"
                      type="text"
                      placeholder="NAME"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                    <br />
                    <br />
                    <input
                      className="package-detail-title"
                      type="text"
                      placeholder="CATEGORY"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    ></input>
                    <br />
                    <img className="separator mr-3" src={separator}></img>
                  </div>
                  <div className="col-5">
                    <div className="row row-cols-5 justify-content-center">
                      <div className="col-2">
                        <button className="btn-alert btn-l"> all</button>
                      </div>
                      <div className="col-2">
                        <button className="btn-alert btn-l">all</button>
                      </div>
                      <div className="col-2">
                        <button className="btn-alert btn-l">all</button>
                      </div>
                      <div className="col-2">
                        <button className="btn-alert btn-l">all</button>
                      </div>
                    </div>
                    <div className="row row-cols-1 mt-5 mb-5">
                      <label for="packages-background">BACKGROUND IMG</label>
                      <input
                        id="packages-background"
                        type="file"
                        className=""
                        placeholder="background-img"
                        onChange={(e) => {
                          uploadImage3(e);
                          setUrl3(e.target.value);
                        }}
                        // value={}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className=" row row-cols-6 mt-5 ml-5 mr-5 justify-content-center text-center">
                  <div className="">
                    <img className="iconsdestinations" src={tripdays}></img>
                    <label className="">TOUR DURATION</label>
                    <input
                      id="tour-duration"
                      type="text"
                      className=""
                      placeholder="TOUR DURATION"
                      onChange={(e) => setTour_duration(e.target.value)}
                      value={tour_duration}
                    ></input>
                  </div>

                  <div className="">
                    <img
                      className="iconsdestinations"
                      src={destinationsicon}
                    ></img>
                    <label className="">DESTINATIONS inclu</label>
                    <input
                      id="destinations"
                      type="text"
                      className=""
                      placeholder="DESTINATIONS"
                      onChange={(e) => setDestinations(e.target.value)}
                      value={destinations}
                    ></input>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={activity}></img>
                    <label className="">-----ACTIVITIES----</label>
                    <input
                      id="activities"
                      type="text"
                      className=""
                      placeholder="ACTIVITIES"
                      onChange={(e) => setActivities(e.target.value)}
                      value={activities}
                    ></input>
                  </div>

                  <div className="">
                    <img
                      className="iconsdestinations"
                      src={transporticon}
                    ></img>
                    <label className="">TRANSPORT MODE</label>
                    <input
                      id="transport"
                      type="text"
                      className=""
                      placeholder="TRANSPORT"
                      onChange={(e) => setTransport(e.target.value)}
                      value={transport}
                    ></input>
                  </div>

                  <div className="">
                    <img className="iconsdestinations" src={lodgingicon}></img>
                    <label className="">-----LODGING-----</label>
                    <input
                      id="lodging"
                      type="text"
                      className=""
                      placeholder="LODGING"
                      onChange={(e) => setLodging(e.target.value)}
                      value={lodging}
                    ></input>
                  </div>
                </div>
                <div>
                  <br />
                  <h3 className="ov-title">OVERVIEW</h3>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE"
                      onChange={(e) => setOverview_title(e.target.value)}
                      value={overview_title}
                    ></input>
                    <input
                      id="overview-acomodoation"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM."
                      onChange={(e) => setOverview_acomodation(e.target.value)}
                      value={overview_acomodation}
                    ></input>
                  </div>
                  <input
                    id="overview-description"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION"
                    onChange={(e) => setOverview_description(e.target.value)}
                    value={overview_description}
                  ></input>
                </div>
                <div className="row row-cols-2 mt-5 mb-5">
                  <label for="packages-img5">IMG 4</label>
                  <label for="packages-img">IMG 5</label>
                  <input
                    id="packages-img4"
                    type="file"
                    className=""
                    placeholder="Packages img4"
                    onChange={(e) => {
                      uploadImage4(e);
                      setUrl4(e.target.value);
                    }}
                  ></input>

                  <input
                    id="packages-img5"
                    type="file"
                    className=""
                    placeholder="Packages img5"
                    onChange={(e) => {
                      uploadImage5(e);
                      setUrl5(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title1"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE 1"
                      onChange={(e) => setOverview_title1(e.target.value)}
                      value={overview_title1}
                    ></input>
                    <input
                      id="overview-acomodoation1"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.1"
                      onChange={(e) => setOverview_acomodation1(e.target.value)}
                      value={overview_acomodation1}
                    ></input>
                  </div>
                  <input
                    id="overview-description1"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION1"
                    onChange={(e) => setOverview_description1(e.target.value)}
                    value={overview_description1}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title2"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE 2"
                      onChange={(e) => setOverview_title2(e.target.value)}
                      value={overview_title2}
                    ></input>
                    <input
                      id="overview-acomodoation2"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.2"
                      onChange={(e) => setOverview_acomodation2(e.target.value)}
                      value={overview_acomodation2}
                    ></input>
                  </div>
                  <input
                    id="overview-description2"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION2"
                    onChange={(e) => setOverview_description2(e.target.value)}
                    value={overview_description2}
                  ></input>
                </div>
                <div className="row row-cols-1 mt-5 mb-5">
                  <label for="packages-img">IMG 6</label>
                  <input
                    id="packages-img6"
                    type="file"
                    className=""
                    placeholder="Packages img6"
                    onChange={(e) => {
                      uploadImage6(e);
                      setUrl6(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title3"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE3"
                      onChange={(e) => setOverview_title3(e.target.value)}
                      value={overview_title3}
                    ></input>
                    <input
                      id="overview-acomodoation3"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.3"
                      onChange={(e) => setOverview_acomodation3(e.target.value)}
                      value={overview_acomodation3}
                    ></input>
                  </div>
                  <input
                    id="overview-description3"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION3"
                    onChange={(e) => setOverview_description3(e.target.value)}
                    value={overview_description3}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title4"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE4"
                      onChange={(e) => setOverview_title4(e.target.value)}
                      value={overview_title4}
                    ></input>
                    <input
                      id="overview-acomodoation4"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.4"
                      onChange={(e) => setOverview_acomodation4(e.target.value)}
                      value={overview_acomodation4}
                    ></input>
                  </div>
                  <input
                    id="overview-description4"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION4"
                    onChange={(e) => setOverview_description4(e.target.value)}
                    value={overview_description4}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title5"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE5"
                      onChange={(e) => setOverview_title5(e.target.value)}
                      value={overview_title5}
                    ></input>
                    <input
                      id="overview-acomodoation5"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.5"
                      onChange={(e) => setOverview_acomodation5(e.target.value)}
                      value={overview_acomodation5}
                    ></input>
                  </div>
                  <input
                    id="overview-description5"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION5"
                    onChange={(e) => setOverview_description5(e.target.value)}
                    value={overview_description5}
                  ></input>
                </div>
                <div className="row row-cols-3 mt-5 mb-5">
                  <label for="packages-img">IMG 7</label>
                  <label for="packages-img">IMG 8</label>
                  <label for="packages-img">IMG 9</label>
                  <input
                    id="packages-img7"
                    type="file"
                    className=""
                    placeholder="Packages img7"
                    onChange={(e) => {
                      uploadImage7(e);
                      setUrl7(e.target.value);
                    }}
                  ></input>
                  <input
                    id="packages-img8"
                    type="file"
                    className=""
                    placeholder="Packages img8"
                    onChange={(e) => {
                      uploadImage8(e);
                      setUrl8(e.target.value);
                    }}
                  ></input>
                  <input
                    id="packages-img9"
                    type="file"
                    className=""
                    placeholder="Packages img9"
                    onChange={(e) => {
                      uploadImage9(e);
                      setUrl9(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title6"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE6"
                      onChange={(e) => setOverview_title6(e.target.value)}
                      value={overview_title6}
                    ></input>
                    <input
                      id="overview-acomodoation6"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.6"
                      onChange={(e) => setOverview_acomodation6(e.target.value)}
                      value={overview_acomodation6}
                    ></input>
                  </div>
                  <input
                    id="overview-description6"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION6"
                    onChange={(e) => setOverview_description6(e.target.value)}
                    value={overview_description6}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title7"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE7"
                      onChange={(e) => setOverview_title7(e.target.value)}
                      value={overview_title7}
                    ></input>
                    <input
                      id="overview-acomodoation7"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.7"
                      onChange={(e) => setOverview_acomodation7(e.target.value)}
                      value={overview_acomodation7}
                    ></input>
                  </div>
                  <input
                    id="overview-description7"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION7"
                    onChange={(e) => setOverview_description7(e.target.value)}
                    value={overview_description7}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title8"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE8"
                      onChange={(e) => setOverview_title8(e.target.value)}
                      value={overview_title8}
                    ></input>
                    <input
                      id="overview-acomodoation8"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.8"
                      onChange={(e) => setOverview_acomodation8(e.target.value)}
                      value={overview_acomodation8}
                    ></input>
                  </div>
                  <input
                    id="overview-description8"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION8"
                    onChange={(e) => setOverview_description8(e.target.value)}
                    value={overview_description8}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title9"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE9"
                      onChange={(e) => setOverview_title9(e.target.value)}
                      value={overview_title9}
                    ></input>
                    <input
                      id="overview-acomodoation9"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.9"
                      onChange={(e) => setOverview_acomodation9(e.target.value)}
                      value={overview_acomodation9}
                    ></input>
                  </div>
                  <input
                    id="overview-description9"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION9"
                    onChange={(e) => setOverview_description9(e.target.value)}
                    value={overview_description9}
                  ></input>
                </div>
                <div className="row row-cols-1 mt-5 mb-5">
                  <label for="packages-img">IMG 10</label>
                  <input
                    id="packages-img10"
                    type="file"
                    className=""
                    placeholder="Packages img10"
                    onChange={(e) => {
                      uploadImage10(e);
                      setUrl10(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title10"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE10"
                      onChange={(e) => setOverview_title10(e.target.value)}
                      value={overview_title10}
                    ></input>
                    <input
                      id="overview-acomodoation10"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.10"
                      onChange={(e) =>
                        setOverview_acomodation10(e.target.value)
                      }
                      value={overview_acomodation10}
                    ></input>
                  </div>
                  <input
                    id="overview-description10"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION10"
                    onChange={(e) => setOverview_description10(e.target.value)}
                    value={overview_description10}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title11"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE11"
                      onChange={(e) => setOverview_title11(e.target.value)}
                      value={overview_title11}
                    ></input>
                    <input
                      id="overview-acomodoation11"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.11"
                      onChange={(e) =>
                        setOverview_acomodation11(e.target.value)
                      }
                      value={overview_acomodation11}
                    ></input>
                  </div>
                  <input
                    id="overview-description11"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION11"
                    onChange={(e) => setOverview_description11(e.target.value)}
                    value={overview_description11}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title12"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE12"
                      onChange={(e) => setOverview_title12(e.target.value)}
                      value={overview_title12}
                    ></input>
                    <input
                      id="overview-acomodoation12"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.12"
                      onChange={(e) =>
                        setOverview_acomodation12(e.target.value)
                      }
                      value={overview_acomodation12}
                    ></input>
                  </div>
                  <input
                    id="overview-description12"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION12"
                    onChange={(e) => setOverview_description12(e.target.value)}
                    value={overview_description12}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title13"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE13"
                      onChange={(e) => setOverview_title13(e.target.value)}
                      value={overview_title13}
                    ></input>
                    <input
                      id="overview-acomodoation13"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.13"
                      onChange={(e) =>
                        setOverview_acomodation13(e.target.value)
                      }
                      value={overview_acomodation13}
                    ></input>
                  </div>
                  <input
                    id="overview-description13"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION13"
                    onChange={(e) => setOverview_description13(e.target.value)}
                    value={overview_description13}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title14"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE14"
                      onChange={(e) => setOverview_title14(e.target.value)}
                      value={overview_title14}
                    ></input>
                    <input
                      id="overview-acomodoation14"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.14"
                      onChange={(e) =>
                        setOverview_acomodation14(e.target.value)
                      }
                      value={overview_acomodation14}
                    ></input>
                  </div>
                  <input
                    id="overview-description14"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION14"
                    onChange={(e) => setOverview_description14(e.target.value)}
                    value={overview_description14}
                  ></input>
                </div>
                <div className="row row-cols-2 mt-5 mb-5">
                  <label for="packages-img">IMG 11</label>
                  <label for="packages-img">IMG 12</label>
                  <input
                    id="packages-img11"
                    type="file"
                    className=""
                    placeholder="Packages img11"
                    onChange={(e) => {
                      uploadImage11(e);
                      setUrl11(e.target.value);
                    }}
                  ></input>

                  <input
                    id="packages-img12"
                    type="file"
                    className=""
                    placeholder="Packages img12"
                    onChange={(e) => {
                      uploadImage12(e);
                      setUrl12(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title15"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE15"
                      onChange={(e) => setOverview_title15(e.target.value)}
                      value={overview_title15}
                    ></input>
                    <input
                      id="overview-acomodoation15"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.15"
                      onChange={(e) =>
                        setOverview_acomodation15(e.target.value)
                      }
                      value={overview_acomodation15}
                    ></input>
                  </div>
                  <input
                    id="overview-description15"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION15"
                    onChange={(e) => setOverview_description15(e.target.value)}
                    value={overview_description15}
                  ></input>
                </div>
                <div className="details-overview row row-cols-2">
                  <div className="details-overview-title col-2">
                    <input
                      id="overview-title16"
                      type="text"
                      className=""
                      placeholder="OVERVIEW TITLE16"
                      // onChange={(e) => setOverview_title16(e.target.value)}
                      // value={overview_title16}
                    ></input>
                    <input
                      id="overview-acomodoation16"
                      type="text"
                      className=""
                      placeholder="OVERVIEW ACOM.16"
                      // onChange={(e) => setOverview_acomodation16(e.target.value)}
                      // value={overview_acomodation16}
                    ></input>
                  </div>
                  <input
                    id="overview-description16"
                    type="text"
                    className="details-overview-description col-10"
                    placeholder="OVERVIEW DESCRIPTION16 NOT IMPLEMENTED"
                    // onChange={(e) => setOverview_description(e.target.value)}
                    // value={overview_description}
                  ></input>
                </div>
                <div className="row row-cols-3 mt-5 mb-5">
                  <label for="packages-img">IMG 13</label>
                  <label for="packages-img">IMG 14 </label>
                  <label for="packages-img">IMG 15 map</label>
                  <input
                    id="packages-img13"
                    type="file"
                    className=""
                    placeholder="Packages img13"
                    onChange={(e) => {
                      uploadImage13(e);
                      setUrl13(e.target.value);
                    }}
                  ></input>

                  <input
                    id="packages-img14"
                    type="file"
                    className=""
                    placeholder="Packages img14"
                    onChange={(e) => {
                      uploadImage14(e);
                      setUrl14(e.target.value);
                    }}
                  ></input>

                  <input
                    id="packages-img15"
                    type="file"
                    className=""
                    placeholder="Packages img15"
                    onChange={(e) => {
                      uploadImage15(e);
                      setUrl15(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="row row-cols-1 mt-5 mb-5 text-center justify-content-center">
                  <button
                    className="btn btn-primary btn-lg mx-2 px-5 mt-4"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1
              className="package-detail-title mt-5"
              style={{ color: "black" }}
            >
              Not logged in...
            </h1>
            <Nav.Link
              className="package-detail-subtitle"
              style={{ color: "#d2ae6d" }}
              href="/login"
            >
              Go to login
            </Nav.Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPackages;
