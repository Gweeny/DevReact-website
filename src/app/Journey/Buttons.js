import React, { useRef, useState } from "react";
import styles from "./style.module.css";

const Button = ({ dragRef, onMouseEnter, onMouseLeave, visibility }) => {
  let scaleNumber = 1;
  let zIndexNumber = 1;
  let transformString = `scale(${scaleNumber})`;

  const handleClicks = (e) => {
    e.preventDefault();
    let section = e.target.parentElement.parentElement;
    let div = dragRef.current;
    let dataIcon = div.dataIcon;
    let divDrag = div.parentElement;

    switch (e.target.id) {
      case "remove":
        scaleNumber = 1;
        transformString = `scale(${scaleNumber})`;
        section.className = "dragMe card display-none";
        section.remove();
        break;

      case "zoomIn":
        if (scaleNumber > 50) {
          return;
        } else {
          scaleNumber += 0.2;
          if (transformString.slice(6, 7) === "-") {
            transformString = `scale(-${scaleNumber}, ${scaleNumber})`;
            div.style.transform = transformString;
          } else {
            transformString = `scale(${scaleNumber})`;
            div.style.transform = transformString;
          }
        }
        break;

      case "zoomOut":
        if (scaleNumber <= 0.3) {
          return;
        } else {
          scaleNumber -= 0.2;

          if (transformString.slice(6, 7) === "-") {
            transformString = `scale(-${scaleNumber}, -${scaleNumber})`;
            div.style.transform = transformString;
          } else {
            transformString = `scale(${scaleNumber})`;
            div.style.transform = transformString;
          }
        }
        break;

      case "mirror":
        if (div.style.transform.slice(6, 7) === "-") {
          transformString = `scale(${scaleNumber})`;
          div.style.transform = transformString;
        } else {
          transformString = `scale(-${scaleNumber}, ${scaleNumber})`;
          div.style.transform = transformString;
        }
        break;

      case "zIndexDown":
        zIndexNumber--;
        div.style.zIndex = zIndexNumber;
        divDrag.style.zIndex = zIndexNumber;
        break;

      case "zIndexUp":
        zIndexNumber++;
        div.style.zIndex = zIndexNumber;
        divDrag.style.zIndex = zIndexNumber;
        break;

      default:
        break;
    }
  };

  console.log(visibility);

  return (
    <div
      className={visibility === true ? styles.display : styles.displayNone}
      id="buttons"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        zIndex: 9999,
      }}
    >
      <button
        className={styles.buttonAction}
        onClick={handleClicks}
        id="remove"
      >
        &#10006;
      </button>
      <button
        className={styles.buttonAction}
        onClick={handleClicks}
        id="zoomIn"
      >
        &#43;
      </button>
      <button
        className={styles.buttonAction}
        onClick={handleClicks}
        id="zoomOut"
      >
        &#8722;
      </button>
      <button
        className={styles.buttonAction}
        onClick={handleClicks}
        id="mirror"
      >
        &#8634;
      </button>
      <button
        className={styles.buttonAction}
        onClick={handleClicks}
        id="zIndexUp"
      >
        &#8593;
      </button>
      <button
        className={styles.buttonAction}
        onClick={handleClicks}
        id="zIndexDown"
      >
        &#8595;
      </button>
    </div>
  );
};
export default Button;
