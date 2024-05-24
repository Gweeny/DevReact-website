"use client";
import React, { useState } from "react";
import styles from "./layout.module.css";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
  const { width: responsiveWidth } = useWindowSize();

  return (
    <div style={{ backgroundColor: "#e48162" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.containerTitre}>
          <h1 className={styles.title}>SAMYA HUSSAIN</h1>
          <hr className={styles.yellowHr} />
          {responsiveWidth > 492 ? (
            <h2 style={{ marginBlock: 6 }} className={styles.subtitle}>
              Conceptrice, développeuse d'applications
            </h2>
          ) : (
            <>
              <h2 className={styles.subtitle}>Conceptrice, </h2>
              <h2 className={styles.subtitle}>développeuse d'applications</h2>
            </>
          )}
        </div>

        <div className={styles.triangularDiv}></div>

        <div>
          {responsiveWidth < 769 ? (
            <Menu />
          ) : (
            <div className={styles.container}>
              <ul className={styles.list}>
                <li
                  className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
                >
                  <div>
                    <h2>Mes ambitions</h2>
                  </div>
                </li>
                <li
                  className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
                >
                  <div>
                    <h2>Compétences</h2>
                  </div>
                </li>
                <li
                  className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
                >
                  <div>
                    <h2>Portfolio</h2>
                  </div>
                </li>
                <li
                  className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
                >
                  <div>
                    <h2>A propos</h2>
                  </div>
                </li>
                <li
                  className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
                >
                  <div>
                    <h2>Contact</h2>
                  </div>
                </li>
                <li
                  className={`${styles.item} ${styles.orange} ${styles.violetBackground}`}
                >
                  <div>
                    <h2>Github</h2>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;

const Menu = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? (
          <div className={styles.container}>
            <ul className={styles.list}>
              <li
                className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
              >
                <div>
                  <h2>Mes ambitions</h2>
                </div>
              </li>
              <li
                className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
              >
                <div>
                  <h2>Compétences</h2>
                </div>
              </li>
              <li
                className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
              >
                <div>
                  <h2>Portfolio</h2>
                </div>
              </li>
              <li
                className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
              >
                <div>
                  <h2>A propos</h2>
                </div>
              </li>
              <li
                className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
              >
                <div>
                  <h2>Contact</h2>
                </div>
              </li>
              <li
                className={`${styles.item} ${styles.orange} ${styles.violetBackground}`}
              >
                <div>
                  <h2>Github</h2>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.menuHr}>
            <hr className={styles.purpleHr} />
            <hr className={styles.purpleHr} />
            <hr className={styles.purpleHr} />
            <hr className={styles.purpleHr} />
          </div>
        )}
      </div>
    </>
  );
};
