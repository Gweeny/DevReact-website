"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const PixelWar = () => {
  const colorList = [
    "#000000",
    "#898D90",
    "#D4D7D9",
    "#FFFFFF",
    "#BE0039",
    "#FF4500",
    "#FFA800",
    "#FFD635",
    "#FFF8B8",
    "#00A368",
    "#00CC78",
    "#7EED56",
    "#00756F",
    "#009EAA",
    "#00CCC0",
    "#2450A4",
    "#3690EA",
    "#493AC1",
    "#6A5CFF",
    "#811E9F",
    "#B44AC0",
    "#FF3881",
    "#FF99AA",
    "#6D001A",
  ];

  const gameRef = useRef(null);
  const cursorRef = useRef(null);
  const [currentColorChoice, setCurrentColorChoice] = useState(colorList[4]);
  const [countdown, setCountdown] = useState(0);
  const colorChoiceRef = useRef(null);

  useEffect(() => {
    const game = gameRef.current;
    const context = game.getContext("2d");
    const gridCellSize = 10;

    game.width = 1920;
    game.height = 700;

    const drawGrids = (context, width, height, cellWidth, cellHeight) => {
      context.beginPath();
      context.strokeStyle = "#ccc";
      for (let i = 0; i < width; i += cellWidth) {
        context.moveTo(i + cellWidth, 0);
        context.lineTo(i + cellWidth, height);
      }
      for (let i = 0; i < height; i += cellHeight) {
        context.moveTo(0, i + cellHeight, 0);
        context.lineTo(width, i + cellHeight);
      }
      context.stroke();
    };

    drawGrids(context, game.width, game.height, gridCellSize, gridCellSize);
  }, []);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  const handleMouseMove = (event) => {
    const cursor = cursorRef.current;
    const game = gameRef.current;
    const gridCellSize = 10;

    const rect = game.getBoundingClientRect();
    const cursorLeft = event.clientX - rect.left - cursor.offsetWidth / 2;
    const cursorTop = event.clientY - rect.top - cursor.offsetHeight / 2;

    cursor.style.left =
      Math.floor(cursorLeft / gridCellSize) * gridCellSize + "px";
    cursor.style.top =
      Math.floor(cursorTop / gridCellSize) * gridCellSize + "px";
    cursor.style.backgroundColor = currentColorChoice;
  };

  const handleCanvasClick = () => {
    if (canPlacePixel()) {
      addPixelIntoGame();
      startCountdown();
      const currentTime = new Date().getTime();
      localStorage.setItem("lastPixelTime", currentTime.toString());
    } else {
      const lastPixelTime = parseInt(localStorage.getItem("lastPixelTime"));
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastPixelTime;
      const remainingSeconds = Math.max(0, 10 - Math.floor(timeDiff / 1000)); // Changed from 60 to 10 seconds
      startCountdown(remainingSeconds);
    }
  };

  const canPlacePixel = () => {
    const lastPixelTime = localStorage.getItem("lastPixelTime");
    if (!lastPixelTime) return true;
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - parseInt(lastPixelTime);
    return timeDiff >= 10000;
  };

  const startCountdown = (remainingSeconds = 10) => {
    setCountdown(remainingSeconds);
  };

  const addPixelIntoGame = () => {
    const game = gameRef.current;
    const cursor = cursorRef.current;
    const context = game.getContext("2d");
    const x = cursor.offsetLeft + 1;
    const y = cursor.offsetTop + 1;

    context.fillStyle = currentColorChoice;
    context.fillRect(x, y, 8, 8);
  };

  return (
    <div>
      <div id="global" className={styles.global} onMouseMove={handleMouseMove}>
        <div className={styles.cursor} id="cursor" ref={cursorRef}></div>
        <canvas
          id="game"
          className={styles.game}
          ref={gameRef}
          onClick={handleCanvasClick}
        ></canvas>
      </div>
      <div className={styles.countdown} id="countdown">
        Prochain pixel dans {countdown} secondes
      </div>
      <div className={styles.colorChoice} id="colorchoice" ref={colorChoiceRef}>
        {colorList.map((color, index) => (
          <div
            key={index}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              border: "1px solid transparent",
              transition: "all 0.3s",
              cursor: "pointer",
              marginInline: "2px",
              backgroundColor: color,
              border:
                currentColorChoice === color
                  ? "3px solid black"
                  : "1px solid transparent",
            }}
            onClick={() => setCurrentColorChoice(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PixelWar;
