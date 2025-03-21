import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Your<span  className={styles.key}>&nbsp;<img src="/images/key.png"/></span>fast track to&nbsp;Israeli<span  className={styles.heart}></span>high-tech</h1>
        <p>TripleTen international coding bootcamps help you switch careers through flexible online studies, tutoring, and job search support.</p>
      </div>
    </section>
  );
}