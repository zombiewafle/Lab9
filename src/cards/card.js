import React, { useEffect, useState } from 'react';
import '../App.js';

// Images import
import back from '../images/backSide.jpg';
import './cards.css';

function CardFunction({
  card, choiceCard, isFlipped, disable,
}) {
  const clickCard = () => {
    if (!disable) {
      choiceCard(card);
    }
  };

  return (
  // Functionalities of the cards, back and front side
    <div className="card">
      <div className={isFlipped ? 'isFlipped' : ''}>
        <img
          src={card.src}
          className="front"
        />

        <img
          src={back}
          className="back"
          onClick={clickCard}
        />
      </div>
    </div>
  );
}

export default CardFunction;
