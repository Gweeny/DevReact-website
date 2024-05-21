"use client";
import React, { useState } from "react";
import styles from "./layout.module.css";
import useWindowSize from "./hooks/useWindowSize";
const Header = () => {
  const { width: responsiveWidth } = useWindowSize();

  return (
    <div>
      <div>
        <h1 className={styles.title}>SAMYA HUSSAIN</h1>
        <hr />
        <h2 className={styles.subtitle}>Conceptrice, </h2>
        <h2 className={styles.subtitle}>développeuse d'applications</h2>
        <div>
          {responsiveWidth < 650 ? (
            <Menu />
          ) : (
            <ul>
              <li>
                <div>
                  <h2>Mes ambitions</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Compétences</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Portfolio</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>A propos</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Contact</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Github</h2>
                </div>
              </li>
            </ul>
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
          <div>
            <ul>
              <li>
                <div>
                  <h2>Mes ambitions</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Compétences</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Portfolio</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>A propos</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Contact</h2>
                </div>
              </li>
              <li>
                <div>
                  <h2>Github</h2>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        )}
      </div>
    </>
  );
};
