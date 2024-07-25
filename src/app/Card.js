import React, { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ titre, contenu, technos, clicked, image, onClickImage }) => {
  return (
    <div className={styles.background}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h2>{titre}</h2>
        <div onClick={clicked} className={styles.closeButton}>
          <div style={{ color: "#e48162" }}>x</div>
        </div>
      </div>
      <div className={styles.contenu}>
        <p>{contenu}</p>
        <div className={styles.technos}>
          <p>Techologies utilisées : {technos}</p>
        </div>
        <div className={styles.present}>
          <Link href={onClickImage}>
            <div style={{ width: "100%", height: "auto" }}>
              <Image
                className={styles.testimage}
                src={image}
                layout="responsive"
                width={100}
                height={100}
                alt="Description de l'image"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
