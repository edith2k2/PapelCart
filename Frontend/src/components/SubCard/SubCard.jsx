import styles from "./SubCard.module.css";
import React from "react";
import logo from "../../utils/logo.png";

function SubCard(props) {
    return (
        <div class="card" className={styles.card1}>
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-dark">Go somewhere</a>
            </div>
        </div>
    );
}

export default SubCard;