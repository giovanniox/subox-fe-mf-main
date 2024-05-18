import React from "react";
import "./home.scss"
import NavBar from '../../component/navBar/NavBar';

import iconNiños from "./niños.png";

import iconWoman from "./woman.png";
import iconMen from "./men.png";
import iconTemp from "./temp.png";
import iconOfer from "./ofer.png";
const HomePrivate = () => {
  return (
    <>
    <NavBar />
    <div className="home">
      <div className="home__jumbotrom">
        <div className="home__jumbotrom-container">
          <div className="home__jumbotrom-sub">
            <h1>private</h1>
            <h1>path: PATH.PROFILE,</h1>
            <h1>path: PATH.PROFILE,</h1>
            <button>Unirme Al Club</button>
          </div>
          <div className="home__jumbotrom-img">
            <img
              // src={iconOfer}
              className="home__categories-container-circle-img"
              alt="Zapato Azul" />
          </div>
        </div>
      </div>

      <div className="home__categories">
        <div className="home__categories-container">
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Ofertas</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconOfer}
                className="home__categories-circle-img"
                alt="Zapato Azul" />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Temporada</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconTemp}
                className="home__categories-circle-img"
                alt="Zapato Azul" />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Mujer</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconWoman}
                className="home__categories-circle-img"
                alt="Zapato Azul" />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Niños</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconNiños}
                className="home__categories-circle-img"
                alt="Zapato Azul" />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Hombre</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconMen}
                className="home__categories-circle-img"
                alt="Zapato Azul" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default HomePrivate;
