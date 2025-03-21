import React from "react";
import styles from "./Steps.module.css";

export default function Steps() {
    return (
        <section className={styles.steps}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.head}>
                        <p>How we work</p>
                        <h2>Go from newbie to pro in months. Here's how:</h2>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.stepItem}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.1644 7.75259C16.7516 7.38567 16.1195 7.42285 15.7526 7.83564L10.4861 13.7605L8.23485 11.3213C7.86027 10.9155 7.22761 10.8902 6.82177 11.2647C6.41592 11.6393 6.39057 12.272 6.76515 12.6778L9.39076 15.5226C9.95263 16.1314 10.9016 16.1694 11.5104 15.6075C11.5372 15.5819 11.5506 15.5691 11.5636 15.5559C11.5765 15.5427 11.5891 15.5291 11.6141 15.5018L17.2474 9.16436C17.6143 8.75158 17.5771 8.11951 17.1644 7.75259Z" fill="#E96E3A" />
                            </svg>
                            <h4>Tons of practice</h4>
                            <p>Explore concepts, work on real projects, code, and get AI and&nbsp;human feedback&nbsp;&mdash; all on&nbsp;our interactive platform with short, digestible lessons designed to&nbsp;keep you focused.</p>
                        </div>
                        <div className={styles.stepItem}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.1644 7.75259C16.7516 7.38567 16.1195 7.42285 15.7526 7.83564L10.4861 13.7605L8.23485 11.3213C7.86027 10.9155 7.22761 10.8902 6.82177 11.2647C6.41592 11.6393 6.39057 12.272 6.76515 12.6778L9.39076 15.5226C9.95263 16.1314 10.9016 16.1694 11.5104 15.6075C11.5372 15.5819 11.5506 15.5691 11.5636 15.5559C11.5765 15.5427 11.5891 15.5291 11.6141 15.5018L17.2474 9.16436C17.6143 8.75158 17.5771 8.11951 17.1644 7.75259Z" fill="#E96E3A" />
                            </svg>
                            <h4>Personal guidance</h4>
                            <p>Enjoy 1-on-1 tutoring from pros already working in&nbsp;the field and&nbsp;receive personal support from your success manager. You&rsquo;re never alone on&nbsp;your high-tech journey.</p>
                        </div>
                        <div className={styles.stepItem}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.1644 7.75259C16.7516 7.38567 16.1195 7.42285 15.7526 7.83564L10.4861 13.7605L8.23485 11.3213C7.86027 10.9155 7.22761 10.8902 6.82177 11.2647C6.41592 11.6393 6.39057 12.272 6.76515 12.6778L9.39076 15.5226C9.95263 16.1314 10.9016 16.1694 11.5104 15.6075C11.5372 15.5819 11.5506 15.5691 11.5636 15.5559C11.5765 15.5427 11.5891 15.5291 11.6141 15.5018L17.2474 9.16436C17.6143 8.75158 17.5771 8.11951 17.1644 7.75259Z" fill="#E96E3A" />
                            </svg>
                            <h4>Job search support</h4>
                            <p>Professional career coaches review your portfolio, help enhance your resume, polish your LinkedIn profile, and prep you for job interviews.</p>
                        </div>
                        <div className={styles.stepItem}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.1644 7.75259C16.7516 7.38567 16.1195 7.42285 15.7526 7.83564L10.4861 13.7605L8.23485 11.3213C7.86027 10.9155 7.22761 10.8902 6.82177 11.2647C6.41592 11.6393 6.39057 12.272 6.76515 12.6778L9.39076 15.5226C9.95263 16.1314 10.9016 16.1694 11.5104 15.6075C11.5372 15.5819 11.5506 15.5691 11.5636 15.5559C11.5765 15.5427 11.5891 15.5291 11.6141 15.5018L17.2474 9.16436C17.6143 8.75158 17.5771 8.11951 17.1644 7.75259Z" fill="#E96E3A" />
                            </svg>
                            <h4>Strong portfolio</h4>
                            <p>Use your new skills to&nbsp;build projects and stack them in&nbsp;a&nbsp;portfolio that will impress employers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}