"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const couleurs = {
    orange: "#E48162",
    jaune: "#F4E281",
    blanc: "#F6F2EF",
    violet: "#4D243D",
  };

  const competences = {
    frontEnd: [
      { titre: "ReactJs", pourcentage: 90 },
      { titre: "React Native", pourcentage: 50 },
      { titre: "Tailwind CSS", pourcentage: 65 },
    ],
    backEnd: [
      { titre: "NodeJs", pourcentage: 90 },
      { titre: "Firebase", pourcentage: 85 },
      { titre: "Php", pourcentage: 50 },
      { titre: "Java", pourcentage: 30 },
    ],
    design: [
      { titre: "Figma", pourcentage: 90 },
      { titre: "Photoshop", pourcentage: 70 },
    ],
  };

  return (
    <main className={styles.main}>
      <Module
        style={{ marginTop: 20 }}
        classNameContenu={styles.contenuViolet}
        classNameTitre={styles.titreJaune}
        titre={"Mes ambitions"}
        contenu={
          <p>
            Développeuse web passionnée par la création d'applications web
            intuitifs et performants, je recherche un poste stimulant au sein
            d'une entreprise dynamique où je pourrai mettre mes compétences au
            service de projets innovants.
            <br />
            <br />
            <br />
            Diplômée récente en conceptrice développeuse d’applications, je suis
            impatiente de mettre à profit mes connaissances et mon enthousiasme
            pour contribuer à la réussite d'une entreprise ambitieuse.
          </p>
        }
      />
      <Module
        classNameContenu={styles.contenuJaune}
        classNameTitre={styles.titreOrange}
        titre={"Compétences"}
        contenu={
          <div className={styles.competenceSection}>
            <CompétencesSection
              titre="Front-End"
              compétences={competences.frontEnd}
            />
            <CompétencesSection
              titre="Back-End"
              compétences={competences.backEnd}
            />
            <CompétencesSection
              titre="Design"
              compétences={competences.design}
            />
          </div>
        }
      />
      <Module
        classNameContenu={styles.contenuViolet}
        classNameTitre={styles.titreJaune}
        titre={"Portfolio"}
        contenu={
          <div className={styles.portfolioContainer}>
            <div className={styles.portfolio}>
              <h2>Projet 1</h2>
              <div></div>
            </div>
            <div className={styles.portfolio}>
              <h2>Projet 2</h2>
              <div></div>
            </div>
            <div className={styles.portfolio}>
              <h2>Projet 3</h2>
              <div></div>
            </div>
            <div className={styles.portfolio}>
              <h2>Projet 4</h2>
              <div></div>
            </div>
          </div>
        }
      />
      <Module
        classNameContenu={styles.contenuJaune}
        classNameTitre={styles.titreOrange}
        titre={"A propos"}
        contenu={
          <>
            <div className={styles.about}>
              <div className={styles.aboutTitre}>
                <h2>Formation</h2>
              </div>
              <p>
                Titulaire d'un diplôme de Concepteur Développeur d'Applications
                de l'AFPA Bègles, j'ai acquis une solide formation en
                développement web au cours d'un programme intensif. Maîtrisant
                des langages tels que ReactJS, NodeJS, PHP et Java, je suis
                prête à mettre mes compétences en pratique dans le monde
                dynamique du web.
                <br />
                <br />
                Animée par une curiosité insatiable, j'ai également exploré le
                domaine de l'animation 3D et des effets visuels. Cette double
                expertise me permet d'aborder le développement web avec une
                perspective unique, alliant rigueur technique et sensibilité
                créative.
                <br />
                <br />
                Motivée et enthousiaste, je suis à la recherche d'un poste
                stimulant au sein d'une entreprise innovante où je pourrai
                m'épanouir et contribuer à des projets passionnants.
              </p>
            </div>

            <div className={styles.about}>
              <div className={styles.aboutTitre}>
                <h2>Expérience</h2>
              </div>
              <p>
                Immergée dans un stage captivant de trois mois au sein d'une
                agence web spécialisée en ReactJS, React Native et Firebase,
                j'ai eu le privilège de découvrir l'intégralité du processus de
                développement, de la rédaction du cahier des charges à la mise
                en œuvre concrète.
              </p>
              <br />
              <p>
                Mon implication m'a également permis d'explorer les subtilités
                du TypeScript et d'affiner mes compétences avec le framework CSS
                Tailwind. Cette expérience enrichissante m'a offert
                l'opportunité de mettre en pratique mes connaissances, de
                contribuer à des projets innovants et de développer une
                expertise précieuse dans l'univers du développement web moderne.
              </p>
            </div>
            <div className={styles.about}>
              <div className={styles.aboutTitre}>
                <h2>Loisirs</h2>
              </div>
              <p>
                En dehors de l'écran, ma vie est un mix éclectique. Je laisse
                les touches du piano danser sous mes doigts, j'explore les
                rythmes de la Kizomba et de la Bachata sur la piste, et reviens
                tout juste d'un voyage inspirant en Inde. Côté détente, rien de
                mieux que de me plonger dans l'univers palpitant de l'e-sport.
                Voilà, c'est moi en quelques notes !
              </p>
            </div>
          </>
        }
      />
      <Module
        classNameContenu={styles.contenuViolet}
        classNameTitre={styles.titreJaune}
        titre={"Contact"}
        contenu={
          <>
            <div>
              <div>
                <Oval width={100} height={40} borderWidth={15}>
                  <Oval width={96} height={96} borderWidth={3}>
                    <Oval width={92} height={92} borderWidth={12}>
                      <Oval width={88} height={88} borderWidth={2}>
                        <div>
                          <div
                            style={{
                              color: "#84DCCF",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <h2>Samya Hussain</h2>
                            <h2>E-Mail : samya.hussain@hotmail.fr</h2>
                          </div>
                          <div>
                            <img src="test" alt="Lin" />
                            <img src="test" alt="Indeed" />
                            <img src="test" alt="Github" />
                          </div>
                        </div>
                      </Oval>
                    </Oval>
                  </Oval>
                </Oval>
              </div>
              <FormulaireContact />
            </div>
          </>
        }
      />
    </main>
  );
}

const Module = ({
  titre,
  contenu,
  classNameTitre,
  classNameContenu,
  style,
}) => {
  return (
    <>
      <div className={styles.moduleContainer} style={style}>
        <div style={{ position: "relative", display: "flex", zIndex: 1 }}>
          <div className={classNameTitre}>
            <h2>{titre}</h2>
          </div>
          <div className={classNameContenu}>{contenu}</div>
        </div>
      </div>
    </>
  );
};

const CompétencesSection = ({ titre, compétences }) => {
  return (
    <div className={styles.competencesModule}>
      <h2>{titre}</h2>
      {compétences.map(({ titre, pourcentage }, index) => (
        <Jauge key={index} titre={titre} pourcentage={pourcentage} />
      ))}
    </div>
  );
};

const Jauge = ({ titre, pourcentage }) => {
  return (
    <div className={styles.jauge}>
      <h3>{titre}</h3>
      <div className={styles.barreFond}>
        <div
          className={styles.barreRemplie}
          style={{
            width: `${pourcentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

const FormulaireContact = () => {
  return (
    <div>
      <h2>Formulaire de Contact</h2>
      <div>
        <form action="/my-handling-form-page" method="post">
          <ul>
            <li>
              <label htmlFor="mail">Email:</label>
              <input type="email" id="mail" name="user_email" />
            </li>

            <li>
              <label htmlFor="nom">Nom:</label>
              <input type="text" id="name" name="user_nom" />
            </li>
            <li>
              <label htmlFor="Prenom">Prénom:</label>
              <input type="text" id="name" name="user_prenom" />
            </li>
            <li>
              <label htmlFor="msg">Message:</label>
              <textarea id="msg" name="user_message"></textarea>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
const Oval = ({ width, height, borderWidth, children }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: `${borderWidth}px`,
      }}
      className={styles.oval}
    >
      {children}
    </div>
  );
};
