import React, { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ titre, contenu, technos, clicked, image, onMouseEnter }) => {
  return (
    <div className={styles.background}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h2>{titre}</h2>
        <div
          onClick={clicked}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#4d243d",
            width: "2vw",
            height: "2vw",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1000,
            marginLeft: "1vw",
            position: "absolute",
            left: "31vw",
            cursor: "pointer",
          }}
        >
          <div style={{ color: "#e48162" }}>x</div>
        </div>
      </div>
      <div className={styles.contenu}>
        <p>{contenu}</p>
        <div className={styles.technos}>
          <p>Techologies utilisées : {technos}</p>
        </div>
        <div className={styles.present}>
          <Image
            onMouseEnter={onMouseEnter}
            src={image}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
