import React from "react";

import styles from './NavigationPanel.module.css'
import Constructor from "./Constructor/Constructor.jsx";
import Sheets from "./Sheets/Sheets.jsx";

function NavigationPanel() {
    return (
        <nav className={styles.panel}>
            <Constructor />
            <Sheets />
        </nav>
    )
}

export default NavigationPanel