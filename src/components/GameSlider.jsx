import "../styles/GameSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import React from "react";

import game1 from "../assets/game-images/32cards.jpg";
import game2 from "../assets/game-images/andarbahar.jpg";
import game3 from "../assets/game-images/bearywild.jpg";
import game4 from "../assets/game-images/cosmiccrusade.jpg";
import game5 from "../assets/game-images/dragonfeast.jpg";
import game6 from "../assets/game-images/greatgoldenlion.jpg";
import game7 from "../assets/game-images/kongfu.jpg";
import game8 from "../assets/game-images/lockingarcher.jpg";
import game9 from "../assets/game-images/planetoftheroos.jpg";
import game10 from "../assets/game-images/robinhoodsriches.jpg";
import game11 from "../assets/game-images/shelltasticwins.jpg";
import game12 from "../assets/game-images/sneakysanta.jpg";
import game13 from "../assets/game-images/spookywins.jpg";
import game14 from "../assets/game-images/teenpatti.jpg";
import game15 from "../assets/game-images/trex.jpg";
import game16 from "../assets/game-images/wonderreeles.jpg";
import elite from "../assets/mro-elite-club-banner-home-697062b4.jpg";

function GameSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="zz">
      <div className="elite">
        <div className="elite-club">
          <img src={elite} alt="" className="elite-img"/>
          <img src={elite} alt="" className="elite-img"/>
        </div>
      </div>
      <div className="carousel">
        <div className="last-games">
          <div className="latest-games">
            <button className="btn-latestgames">LATEST GAMES</button>
            <Slider {...settings}>
              <div className="box">
                <img src={game1} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game2} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game3} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game4} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game5} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game6} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game7} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game8} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game9} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game10} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game11} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game12} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game13} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game14} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game15} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
              <div className="box">
                <img src={game16} alt="" />
                <div className="overlay">
                  <div className="play-button"></div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="top-games">
          <button className="btn-topgames">TOP GAMES</button>
          <Slider {...settings}>
            <div className="box">
              <img src={game11} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game12} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game13} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game9} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game8} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game7} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game14} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game15} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game16} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game10} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game4} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game3} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game2} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game1} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game5} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
            <div className="box">
              <img src={game6} alt="" />
              <div className="overlay">
                <div className="play-button"></div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="btn-div">
          <button className="button-view">View All Games!</button>
        </div>
      </div>
    </div>
  );
}

export default GameSlider;
