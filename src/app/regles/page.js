import React from "react";
import Styles from "./styles.module.css";

const Regles = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Politique de Confidentialité de Pickify</h1>
      <p className={Styles.date}>Dernière mise à jour : [29/01/2025]</p>

      <section>
        <h2>1. Informations collectées</h2>
        <p>
          Lorsque vous utilisez Pickify, nous pouvons collecter les types de
          données suivants :
        </p>
        <ul>
          <li>
            <strong>Données fournies par l'utilisateur :</strong> nom
            d'utilisateur, e-mail, mot de passe, contenu saisi.
          </li>
          <li>
            <strong>Données collectées automatiquement :</strong> modèle de
            l’appareil, système d’exploitation, statistiques d’utilisation,
            adresse IP.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Utilisation des données</h2>
        <p>Nous utilisons vos données uniquement pour :</p>
        <ul>
          <li>Fournir, améliorer et personnaliser l’expérience utilisateur.</li>
          <li>Assurer le bon fonctionnement de l’application.</li>
          <li>
            Analyser l’utilisation et résoudre d’éventuels problèmes techniques.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Partage des données</h2>
        <p>
          Vos données <strong>ne sont pas vendues</strong> à des tiers.
        </p>
        <p>Elles peuvent être partagées avec :</p>
        <ul>
          <li>
            Des prestataires de services (hébergement, analyse d’audience).
          </li>
          <li>Les autorités compétentes si requis légalement.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sécurité des données</h2>
        <p>Nous mettons en place des mesures de sécurité :</p>
        <ul>
          <li>Chiffrement des données lors du transfert.</li>
          <li>Authentification sécurisée pour l’accès aux comptes.</li>
          <li>Accès limité aux personnes autorisées.</li>
        </ul>
      </section>

      <section>
        <h2>5. Suppression des données</h2>
        <p>
          Vous pouvez demander la suppression de votre compte via cette page
          directement sur l'application dans votre profil.
        </p>
      </section>

      <section>
        <h2>6. Droits des utilisateurs</h2>
        <p>Vous avez le droit de :</p>
        <ul>
          <li>Accéder à vos données.</li>
          <li>Modifier ou supprimer vos informations personnelles.</li>
          <li>Vous opposer à certains traitements.</li>
        </ul>
        <p>
          Contactez-nous à :
          <a className={Styles.link} href="mailto:pickifynative@gmail.com">
            pickifynative@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2>7. Modifications de cette politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique. Toute mise à
          jour sera indiquée sur cette page.
        </p>
      </section>

      <p className={Styles.footer}>
        📌 Besoin d’aide ? Contactez-nous à
        <a className={Styles.link} href="mailto:pickifynative@gmail.com">
          [pickifynative@gmail.com]
        </a>
        .
      </p>
    </div>
  );
};

export default Regles;
