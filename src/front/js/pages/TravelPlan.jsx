import React, { useContext, useState } from "react";
import { FormGroup, Label, Input, FormText, Form, Button } from "reactstrap";
//import { Context } from "../../store/appContext";
import { Context } from "../store/appContext";
// import Nav from "react-bootstrap/Nav";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TravelPlan = () => {
  const {store, actions} = useContext(Context);
  const { comment, setComment } = useState("");

  const params = useParams();
 // const [package, setPackage] = useState("");

//  useEffect(() => {
  //  console.log(store.userId)
//   actions.userProfile();
// }, [store.userId]);

 const handleSubmit = async (e) => {
    e.preventDefault();
    let onComment = await actions.createComment(comment, params.id);
    // console.log(onUploaded);
    Swal.fire(onComment.data.msg);
    setComment("");
    // setUser("");
    // setPackage
       
  };

  // const res = await fetch(
  // {
  //   method: "POST",
  //   body: data,
  // }
  // );
  

  return (
    <>
    (
        <div
          className="container mt-5 card bg-ligth text-black my-5 mx-auto pt-3"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="fw-bold text-uppercase" style={{ color: "#bdb284" }}>
            Make a comment
          </h1>
          <div className="col-5 mx-auto my-5">
            <Form
              onSubmit={handleSubmit}
              style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "1.2rem" }}
            >
              <FormGroup>

                <Label for="exampleComment">Comment</Label>
                <Input
                  id="exampleComment"
                  name="comment"
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  required
                />
<p class="text-center"><button>Leave A Review!</button></p>

              </FormGroup>
            </Form>
          </div>
          <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
          <div d-flex justify-content-center></div>
                <Button
                  className="btn btn-outline-light btn-lg mx-2 px-5 mt-4"
                  type="submit"
                  style={{ color: "#bdb284" }}
                  color="white"
                >
                  Submit
                </Button>
        </div>
     
       
       
          </div>
        </div>
      )
    </>
  );
};


export default TravelPlan;
