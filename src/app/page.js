"use client ";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Module titre={"module 1"} />
    </main>
  );
}

const Module = ({ titre }) => {
  return (
    <>
      <div>
        <div>
          <h2>{titre}</h2>
        </div>
        <div>//Ici insérer contenu</div>
      </div>
    </>
  );
};
