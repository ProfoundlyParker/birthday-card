import "./styles.scss";
import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import christmasSong from './christmas-song.mp3'
import DogCard from './DogCard';

const Card = () => {
  const displayComponent = () => {
    setShowDogCard(true);
  }
  const hideComponent = () => {
    setShowDogCard(false);
  }
  const { width, height } = useWindowSize();
  const [showDogCard, setShowDogCard] = useState(false);
  const [playSound, { stop }] = useSound(christmasSong);
    return (
    <div>
    <Confetti width={width} height={height} numberOfPieces={100} colors={['#e52222', '#981a1a', '#184e07', '#0c8228', '#fffefe']} />
    {showDogCard ? (
      <div id="component">
        <DogCard />
      </div>
    ) : (
      <div className="card">
        <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">Merry Christmas, Everest! 🎄</h3>
      <div className="content-wrapper">
      <div class="tree">
        <div class="star"></div>
        <div class="tree-piece t1">
          <div class="bulb b1 blue-bulb"></div>
          <div class="bulb b2 red-bulb"></div>
          <div class="bulb b3 green-bulb"></div>
          <div class="lights l1"></div>
        </div>
        <div class="tree-piece t2">
          <div class="bulb b4 red-bulb"></div>
          <div class="bulb b5 green-bulb"></div>
          <div class="bulb b6 yellow-bulb"></div>
          <div class="bulb b7 blue-bulb"></div>
          <div class="bulb b8 red-bulb"></div>
          <div class="lights l2"></div>
        </div>
        <div class="tree-piece t3">
          <div class="bulb b9 yellow-bulb"></div>
          <div class="bulb b10 blue-bulb"></div>
          <div class="bulb b11 red-bulb"></div>
          <div class="bulb b12 green-bulb"></div>
          <div class="bulb b13 yellow-bulb"></div>
          <div class="bulb b14 blue-bulb"></div>
          <div class="lights l3"></div>
        </div>
        <div class="tree-piece t4">
          <div class="bulb b15 blue-bulb"></div>
          <div class="bulb b16 red-bulb"></div>
          <div class="bulb b17 green-bulb"></div>
          <div class="bulb b18 yellow-bulb"></div>
          <div class="bulb b19 blue-bulb"></div>
          <div class="bulb b20 red-bulb"></div>
          <div class="bulb b21 green-bulb"></div>
          <div class="lights l4"></div>
        </div>
      </div>
      </div>
      </div>
      <div onMouseEnter={() => playSound()} onMouseLeave={() => stop()}>
      <div className="cardInside">
        <h3 className="back">Merry Christmas Everest! 🎄</h3>
        <p>
          Dear Ev,
          <br></br><br></br>Merry Christmas!! I hope your day is filled with lots of love and
          joy and that your holigay wishes come true! Get yourself a nice cup of hot cocoa and enjoy the day to the fullest! ☕🎁
        </p>
        <p className="name">With all my love, Parker 💖</p>
      </div>
      <div className="hover">Hover inside card for a surprise</div>
      </div>
    </div>
      </div>
    )}
    {showDogCard ? (
      <button className="show-other-card" onClick={hideComponent}>Go to Parker's card</button>
    ) : (
      <button className="show-other-card"  onClick={displayComponent}>Click here for another surprise</button>
    )
  }
    </div>
)};

export default Card;
  