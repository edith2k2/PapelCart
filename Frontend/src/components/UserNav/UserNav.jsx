import styles from "./UserNav.Module.css";
import logo from "../../utils/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";

function UserNav(props) {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/login");
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" className={styles.total}>
            <a class="navbar-brand" href="#"> <img className={styles.logo} src={logo} alt="PapelCart" /> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="ms-auto navbar-nav mr-auto nav-right">
                    <li class=" nav-item active">
                        <a class="nav-link" href="#">My Subscriptions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={handleClick}>Subscribe Newspapers</a>
                    </li>
                    <li class="nav-item" className={styles.right}>
                        <a class="nav-link" href="#"><i className="fa-solid fa-user" />{props.name}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default UserNav;