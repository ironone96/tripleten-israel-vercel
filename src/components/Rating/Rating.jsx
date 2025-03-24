import React from "react";
import styles from "./Rating.module.css";


export default function Rating() {
    return (
        <section className={styles.rating}>
            <div className={styles.container}>
                <picture>
                    <source media="(max-width: 767px)" srcSet="/images/rating-mobile.png" />
                    <img className={styles.image} alt="Tripleten Rating" src="./images/rating.png" />
                </picture>
                <div className={styles.body}>
                    <div className={styles.star}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9982 20.005L5.70264 23.8339C4.96318 24.2837 4.04794 23.6188 4.24717 22.7765L5.94333 15.6058L0.356304 10.8016C-0.299933 10.2373 0.0496563 9.16136 0.912244 9.09058L8.25609 8.48784L11.0987 1.68969C11.4326 0.891197 12.5638 0.891197 12.8977 1.68969L15.7403 8.48784L23.0841 9.09058C23.9468 9.16136 24.2963 10.2373 23.64 10.8016L18.0531 15.6058L19.7492 22.7765C19.9484 23.6188 19.0332 24.2837 18.2937 23.8339L11.9982 20.005Z" fill="#1A1A1A" />
                        </svg>
                        <p>4.8 out of 5 across 1200+ reviews</p></div>
                    <h2>TripleTen is the top coding bootcamp in the USA</h2>
                </div>
            </div>
        </section>
    );
}