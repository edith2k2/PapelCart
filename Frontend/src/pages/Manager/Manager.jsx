import React, { useState, useEffect } from "react";
import ManNav from "../../components/ManNav/ManNav";
import styles from "./Manager.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Manager(props) {
  const navigate = useNavigate();
  // const {state} = useLocation();
  const [nameField, setName] = useState({
    name: "",
  });
  useEffect(async () => {
    if (!props.isLoggedIn) {
      console.log(props);
      // alert("Not logged in");
      // navigate("/login");
    } else {
      console.log(props.email);
      // await axios
      // .post("http://localhost:3000/api/manager", {email:props.email})
      // .then((res1) => {
      //     if (res1.data.status === 400) {
      //         alert("User Not Found!! Please Register");
      //         navigate("/login");
      //     } else if (res1.data.status === 500){
      //         alert("Server Error");
      //     }
      //     else {
      //         // props.LogIn(email);
      //         console.log(res1);
      //         setName(() => {return {name:res1.data.data[0].User_Name}});
      //     }
      // })
      // .catch((err) => {
      //     alert("Error in requesting login info");
      //     console.error(err);
      // });
    }
  }, []);
  function handleNavigate() {
    navigate("/manPub");
  }
  return (
    <div>
      <ManNav />
      <div className={styles.grid1}>
        <button
          type="button"
          onClick={handleNavigate}
          class="btn btn-dark btn-lg btn-block"
        >
          Publications
        </button>
        <button type="button" class="btn btn-dark btn-lg btn-block">
          Deliverers
        </button>
        <button type="button" class="btn btn-dark btn-lg btn-block">
          Users
        </button>
      </div>
    </div>
  );
}

export default Manager;
