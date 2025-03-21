import React from "react";
import styles from "./Career.module.css";

export default function Career() {
    return (
        <section className={styles.career}>
            <div className={styles.container}>
                <div className={styles.careerHead}>
                    <h2>Choose your career</h2>
                    <p>No&nbsp;tech experience? No&nbsp;worries! Gain the skills and knowledge needed, benefit from our coaching and job search support, and get set for launching a&nbsp;career in&nbsp;high-tech in&nbsp;Israel or&nbsp;abroad.</p>
                </div>
                <div className={styles.careerBody}>
                    <div className={styles.careerItem}>
                        <h3>Full Stack Developer<br></br>Bootcamp</h3>
                        <p>10 months</p>
                        <div className={styles.skillset}>
                            <p>Skillset</p>
                            <p className={styles.skillsetList}>HTML, CSS, JavaScript, NPM, Webpack, React, Redux, TypeScript, Node.js, Rest, Mongo, Google Cloud, GitHub, Jest</p>
                        </div>
                    </div>
                    <div className={styles.careerItem}>
                        <h3>Data Analyst<br></br>Bootcamp</h3>
                        <p>7 months</p>
                        <div className={styles.skillset}>
                            <p>Skillset</p>
                            <p className={styles.skillsetList}>Python, Jupyter Notebook, SQL, PostgreSQL, Tableau, A/B tests, VSCode, Pandas, Dash</p>
                        </div>
                    </div>
                    <div className={`${styles.careerItem} ${styles.careerItemOrange}`}>
                        <h3>Not sure?<br></br>Find your path!</h3>
                        <a className={styles.careerBtn} href="https://tripleten.com/" target="_blank">Explore →</a>
                    </div>
                    <div className={styles.careerItem}>
                        <h3>QA Tester<br></br>Bootcamp</h3>
                        <p>5 months</p>
                        <div className={styles.skillset}>
                            <p>Skillset</p>
                            <p className={styles.skillsetList}>DevTools, Charles, Figma, Android Studio, Postman, JavaScript, JSON, XML/XSD, SQL, Cygwin/Terminal, Apidoc/Swagger</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}