"use client";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./styles.module.css";

const PickifyPage = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Pickify</h1>

        <div className={Styles.imageContainer}>
          <div
            className={Styles.imageWrapper}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={Styles.image}
              src={"/PickifyMultiPick.png"}
              width={440}
              height={956}
              alt="Fonctionnalité Multi Pick"
            />
            {hovered === 1 && (
              <div className={Styles.modal}>
                <div className={Styles.submodal}>
                  <p>
                    Pickify vous permet de prendre des décisions rapidement et
                    de manière interactive avec la fonctionnalité Multi Pick.
                    Entrez vos options et laissez l'application choisir pour
                    vous. Cela simplifie la prise de décision, que ce soit pour
                    choisir un lieu, une activité, ou même un plat à manger, en
                    quelques clics seulement.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={Styles.imageWrapper}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={Styles.image}
              src={"/PickifyCategories.png"}
              width={440}
              height={956}
              alt="Catégories de décisions"
            />
            {hovered === 2 && (
              <div className={Styles.modal}>
                <div className={Styles.submodal}>
                  <p>
                    Organisez vos décisions selon des catégories personnalisées
                    pour un accès rapide et simplifié. Pickify propose des
                    catégories telles que les décisions quotidiennes, les choix
                    alimentaires, et bien plus encore, pour vous aider à mieux
                    organiser votre vie et à prendre des décisions en toute
                    simplicité.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={Styles.imageWrapper}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={Styles.image}
              src={"/PickifyInterface.png"}
              width={440}
              height={956}
              alt="Interface intuitive"
            />
            {hovered === 3 && (
              <div className={Styles.modal}>
                <div className={Styles.submodal}>
                  <p>
                    L'interface de Pickify a été conçue pour être simple,
                    intuitive et agréable. Vous pouvez naviguer facilement entre
                    les différentes fonctionnalités et prendre des décisions en
                    un rien de temps. Le design épuré et moderne rend
                    l'utilisation de l'application fluide et rapide.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickifyPage;
