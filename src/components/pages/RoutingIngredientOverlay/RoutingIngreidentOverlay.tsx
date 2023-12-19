import React from "react";
import styles from './RoutingIngreidentOverlay.module.css';
import { Outlet } from "react-router-dom";

const RoutingOverlay = () => {
    return(
        <div className={styles.overlay} >
            <Outlet />
        </div>
    )
}

export default RoutingOverlay