"use client";
import React, { useState } from "react";
import styles from "./layout.module.css";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
  const { width: responsiveWidth } = useWindowSize();

  return (
    <div
      className={
        responsiveWidth < 769 ? styles.bigContainerCol : styles.bigContainerRow
      }
    >
      <div className={styles.containerTitre}>
        <h1 className={styles.title}>SAMYA HUSSAIN</h1>
        <hr className={styles.yellowHr} />
        {responsiveWidth > 658 ? (
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

      <div className={styles.triangularDiv} />

      {responsiveWidth < 769 ? (
        <Menu />
      ) : (
        <div className={styles.containerMenu}>
          <ul className={styles.listMenu}>
            <li
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu}`}
            >
              <div>
                <h2>Mes ambitions</h2>
              </div>
            </li>
            <li
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu}`}
            >
              <div>
                <h2>Compétences</h2>
              </div>
            </li>
            <li
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu}`}
            >
              <div>
                <h2>Portfolio</h2>
              </div>
            </li>
            <li
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu} ${styles.aPropos}`}
            >
              <div>
                <h2>A propos</h2>
              </div>
            </li>
            <li
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu} ${styles.contact} `}
            >
              <div>
                <h2>Contact</h2>
              </div>
            </li>
            <li
              className={`${styles.itemMenu} ${styles.orangeMenu} ${styles.violetBackgroundMenu} ${styles.github}`}
            >
              <div>
                <h2>Github</h2>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

const Menu = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked ? (
        <div className={styles.container}>
          <ul className={styles.list} onClick={() => setIsClicked(!isClicked)}>
            <li
              className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
            >
              <h2>Mes ambitions</h2>
            </li>
            <li
              className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
            >
              <h2>Compétences</h2>
            </li>
            <li
              className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
            >
              <h2>Portfolio</h2>
            </li>
            <li
              className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
            >
              <h2>A propos</h2>
            </li>
            <li
              className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
            >
              <h2>Contact</h2>
            </li>
            <li
              className={`${styles.item} ${styles.orange} ${styles.violetBackground} `}
            >
              <h2>Github</h2>
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.menuHr} onClick={() => setIsClicked(!isClicked)}>
          <div className={styles.purpleHr}></div>
          <div className={styles.purpleHr}></div>
          <div className={styles.purpleHr}></div>
          <div className={styles.purpleHr}> </div>
        </div>
      )}
    </>
  );
};
