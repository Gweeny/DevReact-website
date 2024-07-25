import React, { useState } from "react";
import Map from "./Map";
import Image from "next/image";
import Styles from "./style.module.css";

const Positions = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  return (
    <>
      <div className={Styles.position}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            width={50}
            height={50}
            className="plane-Depart"
            onClick={() => {
              isOpenMap ? setIsOpenMap(false) : setIsOpenMap(true);
            }}
            src="/PlaneDepart.svg"
            alt="plane depart"
          />
          {isOpenMap ? <Map /> : ""}
        </div>
        <div className={Styles.openPlane}>
          <Image
            width={50}
            height={50}
            className="plane-Arrive"
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
            src="/PlaneArrive.svg"
            alt="plane arrive"
          />
          {isOpen && (
            <>
              <Image width={50} height={50} src="/line.svg" alt="ling" />
              <StickersLineOne
                onClickOpenMontagnes={props.onClickOpenMontagnes}
                onClickOpenPalmier={props.onClickOpenPalmier}
                onClickOpenImmeubles={props.onClickOpenImmeubles}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Positions;

export const StickersLineOne = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "50vw",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <Image
            width={50}
            height={50}
            onClick={props.onClickOpenMontagnes}
            src="/Montagnes.svg"
            alt="Montagnes"
          />
          {/* {isOpenMontagnes ? <MontagnesStickers /> : ""} */}
        </div>

        <Image
          width={50}
          height={50}
          onClick={props.onClickOpenPalmier}
          src="/palmier.svg"
          alt="Palmier"
        />
        <Image
          width={50}
          height={50}
          onClick={props.onClickOpenImmeubles}
          src="/Immeubles.svg"
          alt="Batiment"
        />
      </div>
    </>
  );
};
