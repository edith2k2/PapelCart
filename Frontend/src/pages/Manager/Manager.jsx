import React from "react";
import ManNav from "../../components/ManNav/ManNav";
import styles from "./Manager.module.css";
function Manager() {
    return (
        <div>
            <ManNav />
            <div className={styles.grid1}>
                <button type="button" class="btn btn-dark btn-lg btn-block">Publications</button>
                <button type="button" class="btn btn-dark btn-lg btn-block">Deliverers</button>
                <button type="button" class="btn btn-dark btn-lg btn-block">Users</button>
            </div>
        </div>
    );
}

export default Manager;