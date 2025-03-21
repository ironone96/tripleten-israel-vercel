import React, { useState, useEffect } from "react";
import styles from "./HiringStats.module.css";

const avatars = [
    "/avatars/avatar1.png",
    "/avatars/avatar2.png",
    "/avatars/avatar3.png",
    "/avatars/avatar9.png",
    "/avatars/avatar10.png",
    "/avatars/avatar11.png",
    "/avatars/avatar4.png",
    "/avatars/avatar5.png",
    "/avatars/avatar12.png",
    "/avatars/avatar14.png",
    "/avatars/avatar6.png",
    "/avatars/avatar7.png",
    "/avatars/avatar8.png",
    "/avatars/avatar13.png",
    "/avatars/avatar15.png",
];

const positionsLarge = [
    { top: "0", left: "230px" },
    { top: "64px", left: "63px" },
    { top: "89px", left: "353px" },
    { top: "64px", left: "967px" },
    { top: "72px", left: "1135px" },
    { top: "87px", left: "819px" },
    { top: "172px", left: "150px" },
    { top: "200px", left: "290px" },
    { top: "190px", left: "1022px" },
    { top: "292px", left: "1052px" },
    { top: "242px", left: "0" },
    { top: "292px", left: "166px" },
    { top: "300px", left: "351px" },
    { top: "228px", left: "883px" },
    { top: "326px", left: "763px" },
];

const positionsMedium = [
    { top: "14px", left: "122px" },
    { top: "85px", left: "24px" },
    { top: "59px", left: "200px" },
    { top: "27px", left: "686px" },
    { top: "118px", left: "642px" },
    { top: "35px", left: "532px" },
    { top: "192px", left: "52px" },
    { top: "256px", left: "197px" },
    { top: "231px", left: "550px" },
    { top: "275px", left: "702px" },
];

const positionsSmall = [
    { top: "14px", left: "118px" },
    { top: "69px", left: "51px" },
    { top: "35px", left: "17px" },
    { top: "22px", left: "272px" },
    { top: "99px", left: "305px" },
    { top: "22px", left: "330px" },
];

export default function HiringStats() {
    const [positions, setPositions] = useState(positionsLarge);

    useEffect(() => {
        const updatePositions = () => {
            if (window.innerWidth < 768) {
                setPositions(positionsSmall);
            } else if (window.innerWidth < 1280) {
                setPositions(positionsMedium);
            } else {
                setPositions(positionsLarge);
            }
        };

        window.addEventListener("resize", updatePositions);
        updatePositions();

        return () => window.removeEventListener("resize", updatePositions);
    }, []);

    return (
        <section className={styles.HiringStats}>
            <div className={styles.container}>
                <div className={styles.hiringStats}>
                    <div className={styles.statsText}>
                        <span className={styles.percent}>87%</span>
                        <p>of our grads get hired within 6 months of completing our program</p>
                    </div>
                    <div className={styles.avatarContainer}>
                        {positions.map((pos, index) => (
                            <img
                                key={index}
                                src={avatars[index % avatars.length]}
                                alt="Graduate"
                                className={styles.avatar}
                                style={{ top: pos.top, left: pos.left }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}