"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const notify = () => toast("Message envoyé ! ");

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

  const portfolio = [
    {
      titre: "MayBeaBa",
      technos:
        "Conception sur Figma, développement sur ReactJs, NodeJs, base de données mongoDB, stockage d’images sur Firebase",
      contenu:
        "Conception et développement d'un site web pour une entreprise photo. Le site inclut une connexion utilisateur, une boutique en ligne et une page administrateur pour gérer les commandes.",
      image: "/Maybeaba.png",
      onClickImage: "MayBeaBa",
    },
    {
      titre: "Journey",
      technos:
        "Conception sur Figma et Photoshop. Développement sur ReactJs pour le site, React Native pour l’application mobile, NodeJs, base de données mongoDB, stockage d’images sur Firebase.",
      contenu:
        "Conception, gestion de projet et développement d'un site web et d’une application mobile. Application développée pour certification à l’Afpa.",
      image: "/Journey.png",
      onClickImage: "Journey",
    },
    {
      titre: "Site web",
      technos: "Conception sur Figma, et développement sur NextJs",
      contenu:
        "Conception et développement du site sur lequel vous naviguez actuellement.",
      image: "/portfolio.png",
      onClickImage: "",
    },
    {
      titre: "Pixel war",
      technos: "Développement en JavaScript",
      contenu: "Création d'un pixel war basé sur l'idée de Reddit",
      image: "/pixelart.png",
      onClickImage: "PixelWar",
    },
  ];

  const [openModal, setOpenModal] = useState(null);

  const handleModalOpen = (index) => {
    setOpenModal(index);
  };

  const handleModalClose = () => {
    setOpenModal(null);
  };
  return (
    <main style={{ marginTop: "3vh" }}>
      <Link href={"#top"}>
        <Image
          src={"/fleche.png"}
          className={styles.fleche}
          width={50}
          height={50}
        />
      </Link>
      <Module
        id={"ambitions"}
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
            Récemment diplômée en tant que conceptrice développeuse
            d’applications, je suis impatiente de mettre à profit mes
            connaissances et mon enthousiasme pour contribuer à la réussite
            d'une entreprise ambitieuse.
          </p>
        }
      />
      <Module
        id={"competences"}
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
        id={"portfolio"}
        classNameContenu={styles.contenuViolet}
        classNameTitre={styles.titreJaune}
        titre="Portfolio"
        contenu={
          <div className={styles.portfolioContainer}>
            {portfolio.map((project, index) => (
              <div
                key={index}
                className={styles.portfolio}
                onClick={() => handleModalOpen(index)}
              >
                <h2>{project.titre}</h2>
              </div>
            ))}
          </div>
        }
      />
      {openModal !== null && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Card
              clicked={handleModalClose}
              titre={portfolio[openModal].titre}
              technos={portfolio[openModal].technos}
              contenu={portfolio[openModal].contenu}
              image={portfolio[openModal].image}
              onClickImage={portfolio[openModal].onClickImage}
            />
          </div>
        </div>
      )}
      <Module
        id={"about"}
        classNameContenu={styles.contenuJaune}
        classNameTitre={styles.titreOrange}
        titre={"A propos"}
        contenu={
          <>
            <AboutSection
              title="Formation"
              content={
                <>
                  Titulaire d'un diplôme de Concepteur Développeur
                  d'Applications de l'AFPA Bègles, j'ai acquis une solide
                  formation en développement web au cours d'un programme
                  intensif. Maîtrisant des langages tels que ReactJS, NodeJS,
                  PHP et Java, je suis prête à mettre mes compétences en
                  pratique dans le monde dynamique du web.
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
                </>
              }
            />

            <AboutSection
              title="Expérience"
              content={
                <>
                  Immergée dans un stage captivant de trois mois au sein d'une
                  agence web spécialisée en ReactJS, React Native et Firebase,
                  j'ai eu le privilège de découvrir l'intégralité du processus
                  de développement, de la rédaction du cahier des charges à la
                  mise en œuvre concrète.
                  <br />
                  <br />
                  Mon implication m'a également permis d'explorer les subtilités
                  du TypeScript et d'affiner mes compétences avec le framework
                  CSS Tailwind. Cette expérience enrichissante m'a offert
                  l'opportunité de mettre en pratique mes connaissances, de
                  contribuer à des projets innovants et de développer une
                  expertise précieuse dans l'univers du développement web
                  moderne.
                </>
              }
            />
            <AboutSection
              style={{ marginBottom: 30 }}
              title="Loisirs"
              content={
                <>
                  En dehors de l'écran, ma vie est un mix éclectique. Je laisse
                  les touches du piano danser sous mes doigts, j'explore les
                  rythmes de la Kizomba et de la Bachata sur la piste, et
                  reviens tout juste d'un voyage inspirant en Inde. Côté
                  détente, rien de mieux que de me plonger dans l'univers
                  palpitant de l'e-sport. Voilà, c'est moi en quelques notes !
                </>
              }
            />
          </>
        }
      />
      <Module
        id={"contact"}
        classNameContenu={styles.contenuViolet}
        classNameTitre={styles.titreJaune}
        titre={"Contact"}
        contenu={
          <>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Oval className={styles.oval1}>
                  <Oval className={styles.oval2}>
                    <Oval className={styles.oval3}>
                      <Oval className={styles.oval4}>
                        <div className={styles.content}>
                          <div className={styles.OvalText}>
                            <h2>Samya Hussain</h2>
                            <h2>E-Mail : samya.hussain@hotmail.fr</h2>
                          </div>
                          <div className={styles.imagesContainer}>
                            <Link
                              href={"https://github.com/Gweeny"}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Image
                                src={"/Github.jpeg"}
                                width={50}
                                height={50}
                                alt="Github"
                              />
                            </Link>
                            <Link
                              href={
                                "https://fr.linkedin.com/in/samya-hussain-515b8415b"
                              }
                              rel="noopener noreferrer"
                              target="blank"
                            >
                              <Image
                                src={"/LinkedIn.png"}
                                width={50}
                                height={50}
                                alt="linkedin"
                              />
                            </Link>
                            <Link
                              href={"/CV_Samya_Hussain.pdf"}
                              rel="noopener noreferrer"
                              target="blank"
                            >
                              <Image
                                src={"/CVIcone.png"}
                                width={50}
                                height={50}
                                alt="CVICONE"
                              />
                            </Link>
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
  id,
}) => {
  const [openModal, setOpenModal] = useState(null);

  const portfolio = [
    {
      titre: "MayBeaBa",
      technos:
        "ReactJs, NodeJs, base de données mongoDB, stockage d’images sur Firebase",
      contenu:
        "Conception et développement d'un site web pour une entreprise photo. Le site inclut une boutique en ligne.",
      image: "/Github.jpeg",
    },
    {
      titre: "Journey",
      technos:
        "ReactJs pour le site, React Native pour l’application mobile, NodeJs, base de données mongoDB, stockage d’images sur Firebase",
      contenu:
        "Conception, gestion de projet et développement d'un site web et d’une application mobile Application développée pour certification à l’Afpa.",
      image: "/Github.jpeg",
    },
    {
      titre: "Site web",
      technos: "NextJs",
      contenu:
        "Conception et développement du site sur lequel vous naviguez actuellement.",
      image: "/Github.jpeg",
    },
  ];

  const handleModalOpen = (index) => {
    setOpenModal(index);
  };

  const handleModalClose = () => {
    setOpenModal(null);
  };

  return (
    <>
      <div id={id} className={styles.moduleContainer} style={style}>
        <div style={{ position: "relative", display: "flex" }}>
          <div className={classNameTitre}>
            <h2>{titre}</h2>
          </div>
          <div className={classNameContenu}>{contenu}</div>
        </div>
      </div>

      {openModal !== null && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Card
              clicked={handleModalClose}
              titre={portfolio[openModal].titre}
              technos={portfolio[openModal].technos}
              contenu={portfolio[openModal].contenu}
              image={portfolio[openModal].image}
            />
          </div>
        </div>
      )}
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
  const barreRef = useRef(null);

  const handleScroll = () => {
    const { top, bottom } = barreRef.current.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom >= 0;

    if (isVisible) {
      barreRef.current.style.width = `${pourcentage}%`;
    } else {
      barreRef.current.style.width = "0";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pourcentage]);

  return (
    <div className={styles.jauge}>
      <h3>{titre}</h3>
      <div className={styles.barreFond}>
        <div ref={barreRef} className={styles.barreRemplie}></div>
      </div>
    </div>
  );
};

const AboutSection = ({ title, content, style }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.about}>
      <div
        style={style}
        className={`${styles.aboutTitre} ${
          isClicked ? styles.smallHeight : styles.largeHeight
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <h2>{title}</h2>
      </div>
      <p className={isClicked ? styles.visible : styles.hidden}>{content}</p>
    </div>
  );
};

const FormulaireContact = () => {
  const validateEmail = (email) => {
    return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(email);
  };

  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailValid(false);
      return;
    }
    setEmailValid(true);

    const formData = {
      nom: nom,
      prenom: prenom,
      email,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Email envoyé avec succès !");
        setEmail("");
        setNom("");
        setPrenom("");
        setMessage("");
        toast.success("Message envoyé !");
      } else {
        setSubmissionStatus("Échec de l'envoi de l'email.");
        toast.warning(
          "Un problème est survenu lors de l'envoi de votre message, veuillez réessayer."
        );
      }
    } catch (error) {
      setSubmissionStatus("Erreur lors de l'envoi de l'email.");
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer autoClose={500} />
      <h2 className={styles.contactTitle}>Formulaire de Contact</h2>
      <div>
        <form onSubmit={handleSubmit} method="post">
          <ul>
            <li>
              <label htmlFor="mail">Email:</label>
              <input
                type="email"
                id="mail"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={!emailValid ? styles.invalid : ""}
              />
              {!emailValid && (
                <span className={styles.errorMsg}>Adresse e-mail invalide</span>
              )}
            </li>
            <li>
              <label htmlFor="nom">Nom:</label>
              <input
                type="text"
                id="nom"
                name="user_nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="prenom">Prénom:</label>
              <input
                type="text"
                id="prenom"
                name="user_prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="msg">Message:</label>
              <textarea
                id="msg"
                name="user_message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </li>
            <li>
              <button type="submit">Envoyer</button>
            </li>
          </ul>
        </form>
        {submissionStatus}
      </div>
    </div>
  );
};

const Oval = ({ children, className }) => {
  return <div className={`${styles.oval} ${className}`}>{children}</div>;
};
