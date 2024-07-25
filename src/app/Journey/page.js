"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Styles from "./style.module.css";
import Positions from "./Positions";
import CalendarDepartComponent from "./CalendarDepart";
import CalendarRetourComponent from "./CalendarRetour";
import useWindowSize from "../hooks/useWindowSize";
import Draggable from "react-draggable";
import Button from "./Buttons";

let actualFileName = "";

const Page = () => {
  const { isMobileLayout } = useWindowSize();

  // UseState :
  const [clicked, setClicked] = useState(false);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [visiblePosition, setVisiblePosition] = useState(false);
  const [visibleHebergement, setvisibleHebergement] = useState(false);
  const [visibleBudget, setvisibleBudget] = useState(false);
  const [visiblePersons, setvisiblePersons] = useState(false);
  const [isOpenMontagnes, setisOpenMontagnes] = useState(false);
  const [isOpenPalmier, setisOpenPalmier] = useState(false);
  const [isOpenImmeubles, setisOpenImmeubles] = useState(false);
  const [counter, setCounter] = useState(1);
  const [imageList, setImageList] = useState([]);
  let pax = 1;
  const onButtonClick = (imageFileName) => {
    console.log(actualFileName);
    setImageList(
      imageList.concat(
        <AllStickers key={imageList.length} imageFileName={imageFileName} />
      )
    );
    console.log(imageList);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        {/* ICI LE TOP Avec Journey */}
        {/* ICI LE MID avec la carte  */}

        <div className={Styles.card}>{imageList}</div>
        {/* ICI LE BAS avec la navbar  */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxHeight: 150,
          }}
        >
          {isOpenMontagnes ? (
            <MontagnesStickers onButtonClick={onButtonClick} />
          ) : (
            ""
          )}
          {isOpenPalmier ? (
            <ArbresStickers onButtonClick={onButtonClick} />
          ) : (
            ""
          )}
          {isOpenImmeubles ? (
            <BatimentSticker onButtonClick={onButtonClick} />
          ) : (
            ""
          )}
        </div>
        {visiblePosition && (
          <Positions
            onClickOpenMontagnes={() => {
              setisOpenMontagnes(!isOpenMontagnes);
            }}
            onClickOpenPalmier={() => {
              setisOpenPalmier(!isOpenPalmier);
            }}
            onClickOpenImmeubles={() => {
              setisOpenImmeubles(!isOpenImmeubles);
            }}
          />
        )}

        {visibleCalendar && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
                bottom: 110,
                left: 120,
              }}
            >
              <CalendarDepartComponent id="depart" />
              <CalendarRetourComponent id="retour" />
            </div>
          </>
        )}

        {visibleHebergement && (
          <>
            <div className={Styles.hebergementInside}>
              <Image
                width={50}
                height={50}
                onClick={() => {
                  toast.info("Camping");
                }}
                src="/People_Poor.svg"
                alt="people"
              />
              <Image
                width={50}
                height={50}
                onClick={() => {
                  toast.info("Chez l'habitant");
                }}
                src="/People_Medium.svg"
                alt="people"
              />
              <Image
                width={50}
                height={50}
                onClick={() => {
                  toast.info("Hotel");
                }}
                src="/People_Rich.svg"
                alt="people"
              />
            </div>
          </>
        )}

        {visibleBudget && (
          <>
            <div className={Styles.budgetInside}>
              <Image
                width={50}
                height={50}
                onClick={() => {
                  toast.info("Budget sérré");
                  budget = 0;
                }}
                src="/Money_Poor.svg"
                alt="money"
              />
              <Image
                width={50}
                height={50}
                onClick={() => {
                  toast.info("Budget moyen");
                  budget = 20;
                }}
                src="/Money_Medium.svg"
                alt="money"
              />
              <Image
                width={50}
                height={50}
                onClick={() => {
                  toast.info("Budget large");
                  budget = 30;
                }}
                src="/Money_Rich.svg"
                alt="money"
              />
            </div>
          </>
        )}
        {visiblePersons && (
          <>
            <div className={Styles.personInside}>
              <button
                className={Styles.buttonAction}
                style={{ width: 40, height: 40, marginLeft: 2 }}
                onClick={() => {
                  setCounter(counter - 1);
                  if (counter <= 1) {
                    alert("Nombre de personnes inferieur à 1 impossible");
                    setCounter(1);
                    pax = counter;
                  }
                }}
              >
                -
              </button>
              <button
                className={Styles.buttonAction}
                style={{ width: 40, height: 40 }}
                onClick={() => {
                  setCounter(counter + 1);
                  pax = counter + 1;
                }}
              >
                +
              </button>
              <div style={{ marginLeft: "1vw" }}>
                <h1>{counter}</h1>
              </div>
            </div>
          </>
        )}
        <div
          style={{ width: "100%", height: "auto" }}
          className={clicked ? Styles.navClicked : Styles.navNotClicked}
        >
          <Navbar
            onButtonClick={onButtonClick}
            className={Styles.navNotClicked}
            onClickImagePosition={() => setVisiblePosition(!visiblePosition)}
            onClickImageCalendar={() => setVisibleCalendar(!visibleCalendar)}
            onClickImageHebergement={() =>
              setvisibleHebergement(!visibleHebergement)
            }
            onClickImageBudget={() =>
              visibleBudget ? setvisibleBudget(false) : setvisibleBudget(true)
            }
            onClickImagePersonnes={() =>
              visiblePersons
                ? setvisiblePersons(false)
                : setvisiblePersons(true)
            }
          />
        </div>
      </div>
    </>
  );
};

const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        className={clicked ? Styles.navClicked : Styles.navNotClicked}
      >
        <Image
          width={50}
          height={50}
          onClick={() => props.onClickImagePosition(setClicked(!clicked))}
          src="/Icon1.svg"
          alt="Position"
          className="position navbar"
        />
        <Image
          width={50}
          height={50}
          onClick={() => props.onClickImageCalendar(setClicked(!clicked))}
          src="/Icon2.svg"
          alt="Calendrier"
          className="calendrier navbar"
        />
        <Image
          width={50}
          height={50}
          onClick={() => props.onClickImageHebergement(setClicked(!clicked))}
          src="/Icon3.svg"
          alt="Hébergement"
          className="hebergement navbar"
        />
        <Image
          width={50}
          height={50}
          onClick={() => props.onClickImageBudget(setClicked(!clicked))}
          src="/Icon4.svg"
          alt="Budget"
          className="budget navbar"
        />
        <Image
          width={50}
          height={50}
          onClick={() => props.onClickImagePersonnes(setClicked(!clicked))}
          src="/Icon5.svg"
          alt="Personnes"
          className="personnes navbar"
        />
      </div>
    </>
  );
};

export default Page;

export const AllStickers = ({ imageFileName }) => {
  const dragRef = useRef();
  const [visibility, setVisibility] = useState(false);

  const realImageFileName = imageFileName.target.src.replace(
    "http://localhost:3000/",
    ""
  );
  console.log(realImageFileName);

  return (
    <Draggable>
      <div style={{ width: "fit-content" }}>
        <Button
          dragRef={dragRef}
          visibility={visibility}
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        />
        <div
          ref={dragRef}
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <Images
            src={`/${realImageFileName}`}
            width={128}
            height={128}
            onClick={() => {
              console.log(imageFileName);
            }}
          />
        </div>
      </div>
    </Draggable>
  );
};

const Images = ({
  src,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      <div
        style={{ width: "fit-content", height: "fit-content" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image
          style={{ maxWidth: 150, maxHeight: 170 }}
          src={src}
          alt={src}
          width={width}
          height={height}
          onClick={(e) => {
            const baseString = e.target.src;
            console.log(baseString);
            const fileName = baseString.split("/").pop();
            actualFileName = `${fileName.split(".")[0]}.svg`;
            let attrX = e.nativeEvent.offsetX;
            let attrY = e.nativeEvent.offsetY;
            console.log(attrX, attrY);
            if (e.target.style) {
              e.target.style.top = `${attrY}px`;
              e.target.style.left = `${attrX}px`;
            }
            onClick();
          }}
        />
      </div>
    </>
  );
};

const montagnes = [
  {
    dataId: "1",
    src: "/Montagne_Ads.svg",
    string: "card10",
    dataIcon: "1",
  },
  {
    dataId: "2",
    src: "/Montagne_Australie.svg",
    string: "card8",
    dataIcon: "2",
  },
  {
    dataId: "3",
    src: "/Montagne_grece.svg",
    string: "card7",
    dataIcon: "3",
  },
  {
    src: "/Montagne_Japon.svg",
    string: "card7",
    dataIcon: "4",
  },
  {
    src: "/Montagne_Perou.svg",
    string: "card7",
    dataIcon: "5",
  },
];

const arbres = [
  {
    dataId: "4",
    src: "/Arbre_1.svg",
    string: "card3",
    dataIcon: "1",
  },
  {
    dataId: "4",
    src: "/Arbre_2.svg",
    string: "card3",
    dataIcon: "2",
  },
  {
    dataId: "4",
    src: "/Arbre_3.svg",
    string: "card3",
    dataIcon: "3",
  },
  {
    dataId: "4",
    src: "/Arbre_4.svg",
    string: "card3",
    dataIcon: "6",
  },
  {
    dataId: "5",
    src: "/Arbre_5.svg",
    string: "card4",
    dataIcon: "5",
  },
  {
    src: "/Campagne_Japon.svg",
    string: "card5",
    dataIcon: "4",
  },
  {
    src: "/CampagneAustralie.svg",
    string: "card8",
    dataIcon: "2",
  },
  {
    dataId: "6",
    src: "/Cerisier_Japonais.svg",
    string: "card5",
    dataIcon: "4",
  },
  {
    src: "/Chene.svg",
    string: "card2",
    dataIcon: "1",
  },
];

const batiments = [
  {
    src: "/Batiment_Bleu.svg",
    alt: "batBleu",
  },
  {
    src: "/Batiment_jaune_pointu.svg",
    alt: "batBleu",
  },
  {
    src: "/Batiment_jaune.svg",
    alt: "batBleu",
  },
  {
    src: "/Batiment_vert_gros.svg",
    alt: "batBleu",
  },
  {
    src: "/Batiment_vert_pointu.svg",
    alt: "batBleu",
  },
  {
    src: "/Opera_australie.svg",
    string: "card1",
    dataIcon: "2",
  },
  {
    src: "/Phare_ads.svg",
    string: "card6",
    dataIcon: "1",
  },
  {
    src: "/Stade_ville_ads.svg",
    string: "card4",
    dataIcon: "1",
  },
  {
    src: "/Temple_rouge_Japon.svg",
    string: "card1",
    dataIcon: "4",
  },
  {
    src: "/Tour_ads.svg",
    string: "card3",
    dataIcon: "1",
  },
  {
    src: "/Ville_grece.svg",
    string: "card4",
    dataIcon: "3",
  },
  {
    src: "/Ville_Perou.svg",
    string: "card2",
    dataIcon: "5",
  },
];

const MontagnesStickers = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",

        backgroundColor: " #159dd2",
        zIndex: "1000",
      }}
    >
      {montagnes.map((item, index) => (
        <Image
          key={index}
          data-id={item.dataId}
          src={item.src}
          alt={item.alt || "Montagne"}
          className={Styles[item.string]}
          onClick={props.onButtonClick}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

const ArbresStickers = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",

        backgroundColor: " #159dd2",
        zIndex: "1000",
      }}
    >
      {arbres.map((item, index) => (
        <Image
          key={index}
          data-id={item.dataId}
          src={item.src}
          alt={item.alt || "Arbre"}
          className={Styles[item.string]}
          onClick={props.onButtonClick}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

const BatimentSticker = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        width: "100vw",

        backgroundColor: " #159dd2",
        zIndex: "1000",
      }}
    >
      {batiments.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt={item.alt || "Bâtiment"}
          className={Styles[item.string]}
          onClick={props.onButtonClick}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};
