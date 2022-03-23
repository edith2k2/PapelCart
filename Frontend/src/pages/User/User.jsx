import styles from "./User.module.css";
import React, { useState, useEffect } from "react";
import SubCard from "../../components/SubCard/SubCard";
import {useLocation, useNavigate} from "react-router-dom"
import UserNav from "../../components/UserNav/UserNav";
import axios from "axios"

function User(props) {
    const navigate = useNavigate();
    // const {state} = useLocation();
    const [nameField, setName] = useState({
        name:""
    });
    useEffect(async () => {
        if (!props.isLoggedIn){
            console.log(props);
            alert("Not logged in");
            navigate("/login");
        }else{
            console.log(props.email);
            await axios
            .post("http://localhost:3000/api/user", {email:props.email})
            .then((res1) => {
                if (res1.data.status === 400) {
                    alert("User Not Found!! Please Register");
                    navigate("/login");
                } else if (res1.data.status === 500){
                    alert("Server Error");
                }
                else {
                    // props.LogIn(email);
                    console.log(res1);
                    setName(() => {return {name:res1.data.data[0].User_Name}});
                }
            })
            .catch((err) => {
                alert("Error in requesting login info");
                console.error(err);
            });
        }
    }, []);
    return (
        <div>
            <UserNav name={nameField.name}/>
            <h1 className={styles.heading}>Your Subscriptions</h1>
            <div className={styles.Cards}>
                <SubCard />
                <SubCard />
                <SubCard />
                <SubCard />
                <SubCard />
                <SubCard />
            </div>
        </div>
    );
}

export default User;