import React from "react";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.footerLeft}>
                        <ul>
                            <li>© TripleTen, {year}</li>
                            <li><a href="https://docs.tripleten.com/he/legal/terms_of_use.html" target="_blank">Terms of use</a></li>
                            <li><a href="https://docs.tripleten.com/he/legal/confidential.html" target="_blank">Privacy policy</a></li>
                            <li><a href="https://docs.tripleten.com/he/support/accessibility_he.html" target="_blank">Accessibility policy</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerRight}>
                        <a href="mailto:helpme-il@tripleten.com">Support</a>
                    </div>
                </div>
            </div>
        </footer >
    );
}