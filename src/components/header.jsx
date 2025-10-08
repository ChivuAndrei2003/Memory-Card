//import { useState } from "react";
import "../styles/header.css";
import ScoreBoard from "./scoreBoard";

export default function Header({ curretScore, bestScore }) {
  return (
    <header>
      <div className="header-content">
        <h1 className="title">Pokemon Card Game</h1>
        <p className="subtitle">Don't click the same pokemon twice</p>
          </div>
          <ScoreBoard currentScore={curretScore} bestScore={bestScore} />
    </header>
  );
}
