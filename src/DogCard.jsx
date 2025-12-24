import "./styles.scss";
import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import birthdaySong from './birthday-song.mp3'

const DogCard = () => {
  const { width, height } = useWindowSize();
  const [playbackRate, ] = useState(1.75);
  const [playSound, { stop }] = useSound(birthdaySong, { playbackRate });
    return (
    <div>
    <Confetti width={width} height={height} numberOfPieces={100} colors={['#e52222', '#981a1a', '#184e07', '#0c8228', '#fffefe']} />
    <div className="card">
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">Merry Christmas Daddy! 🎄</h3>
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
        <h3 className="back">Merry Christmas Daddy! 🎉</h3>
        <p>
          Dear Daddy,
          <br></br><br></br>Happy Merry Christmas!! Thanks for always taking us on a walk and giving us treatos! Hope you have a doggone amazing day! 🎂
        </p>
        <p className="dog-name">Love, Winter & Charlie 🐶</p>
      </div>
      </div>
    </div>
    </div>
    <div className="hover">Hover inside card for surprise</div>
    </div>
)};

export default DogCard;