import React from "react";
import Image from "next/image";
import Styles from "./styles.module.css";
const page = () => {
  return (
    <>
      <div>
        <h1 className={Styles.title}>MayBeaBa</h1>
      </div>
      <div>
        <h2 className={Styles.titre}>La connexion : </h2>
        <div className={Styles.left}>
          <Image
            className={Styles.image}
            src={"/MaybeabaConnexion.png"}
            width={1000}
            height={500}
          />
          <p>
            Pour assurer la sécurité du site, j'ai implémenté une infrastructure
            de connexion robuste basée sur un serveur Express. Les mots de passe
            des utilisateurs sont sécurisés grâce à un processus de hachage
            avant d'être stockés dans la base de données. Lorsqu'un utilisateur
            se connecte avec succès, un jeton JWT (JSON Web Token) est généré et
            lui est attribué. Ce jeton contient des informations
            d'identification encodées ainsi qu'une date d'expiration,
            garantissant une session authentifiée et sécurisée sur l'ensemble du
            site. Cette approche renforce la protection des données sensibles et
            prévient les accès non autorisés.
          </p>
        </div>
      </div>
      <div>
        <h2 className={Styles.titre}>La page administrateur :</h2>
        <div className={Styles.right}>
          <Image
            className={Styles.image}
            src={"/MaybeabaCommandes.png"}
            width={1000}
            height={500}
          />
          <p>
            La page administrateur permet de gérer efficacement toutes les
            commandes passées sur le site. Accessible uniquement aux
            administrateurs, cette interface offre un aperçu complet des
            commandes en cours, acceptées ou terminées. Elle permet de consulter
            et de mettre à jour les détails des commandes, tels que les
            informations client, les articles commandés avec leurs
            spécifications, ainsi que l'état actuel de chaque commande. Cette
            fonctionnalité facilite la gestion opérationnelle, améliore la
            traçabilité des commandes et assure une meilleure réactivité aux
            besoins des clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
