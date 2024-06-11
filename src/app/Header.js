"use client";
import React, { useState } from "react";
import styles from "./layout.module.css";
import useWindowSize from "./hooks/useWindowSize";
import Link from "next/link";

const Header = () => {
  const { width: responsiveWidth } = useWindowSize();

  return (
    <div
      id="top"
      className={
        responsiveWidth < 769 ? styles.bigContainerCol : styles.bigContainerRow
      }
    >
      <div className={styles.containerTitre}>
        <Link href={"/"}>
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
        </Link>
      </div>

      <div className={styles.triangularDiv} />

      {responsiveWidth < 769 ? (
        <Menu />
      ) : (
        <div className={styles.containerMenu}>
          <ul className={styles.listMenu}>
            <Link
              href={"/#ambitions"}
              passHref
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu}`}
            >
              <li>
                <h2>Mes ambitions</h2>
              </li>
            </Link>
            <Link
              href={"/#competences"}
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu}`}
            >
              <li>
                <h2>Compétences</h2>
              </li>
            </Link>
            <Link
              href={"/#portfolio"}
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu}`}
            >
              <li>
                <h2>Portfolio</h2>
              </li>
            </Link>
            <Link
              href={"/#about"}
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu} ${styles.aPropos}`}
            >
              <li>
                <h2>A propos</h2>
              </li>
            </Link>
            <Link
              href={"/#contact"}
              className={`${styles.itemMenu} ${styles.violetMenu} ${styles.orangeBackgroundMenu} ${styles.contact} `}
            >
              <li>
                <h2>Contact</h2>
              </li>
            </Link>
            <Link
              href={"https://github.com/Gweeny"}
              rel="noopener noreferrer"
              target="_blank"
              className={`${styles.itemMenu} ${styles.orangeMenu} ${styles.violetBackgroundMenu} ${styles.github}`}
            >
              <li>
                <h2>Github</h2>
              </li>
            </Link>
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
            <Link
              href={"/#ambitions"}
              className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
            >
              <li>
                <h2>Mes ambitions</h2>
              </li>
            </Link>
            <Link
              href={"#competences"}
              className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
            >
              <li>
                <h2>Compétences</h2>
              </li>
            </Link>
            <Link
              href={"#porfolio"}
              className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
            >
              <li>
                <h2>Portfolio</h2>
              </li>
            </Link>
            <Link
              href={"#about"}
              className={`${styles.item} ${styles.violet} ${styles.orangeBackground}`}
            >
              <li>
                <h2>A propos</h2>
              </li>
            </Link>
            <Link
              href={"#contact"}
              className={`${styles.item} ${styles.violet} ${styles.jauneBackground}`}
            >
              <li>
                <h2>Contact</h2>
              </li>
            </Link>
            <Link
              href={"https://github.com/Gweeny"}
              rel="noopener noreferrer"
              target="_blank"
              className={`${styles.item} ${styles.orange} ${styles.violetBackground} `}
            >
              <li>
                <h2>Github</h2>
              </li>
            </Link>
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
