import React from "react";

import styles from './NavigationPanel.module.css'
import Constructor from "./Constructor/Constructor";
import Sheets from "./Sheets/Sheets";

function NavigationPanel() {
    return (
        <nav className={styles.panel}>
            <Constructor />
            <Sheets />
        </nav>
    )
}

export default NavigationPanel