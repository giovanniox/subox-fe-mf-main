import React from 'react';
import "./home.scss"
import iconNiños from './niños.png'

import iconWoman from './woman.png'
import iconMen from './men.png'
import iconTemp from './temp.png'
import iconOfer from './ofer.png'
const Home = () => {
  return (
    <div className='home'>
      <div class="home__jumbotrom">
        <div className='home__jumbotrom__container'>
        </div>
      </div>


      <div class="home__categories">
        <div className='home__categories__container'>
        <div>
            <div className='home__categories__container__title'>
              <span className='home__categories__container__text'>Ofertas</span>
            </div>
            <div className='home__categories__container__circle'>
              <img src={iconOfer} className='home__categories__container__circle__img' alt="Zapato Azul" />
            </div>
          </div>
        <div>
            <div className='home__categories__container__title'>
              <span className='home__categories__container__text'>Temporada</span>
            </div>
            <div className='home__categories__container__circle'>
              <img src={iconTemp} className='home__categories__container__circle__img' alt="Zapato Azul" />
            </div>
          </div>

          <div>
            <div className='home__categories__container__title'>
              <span className='home__categories__container__text'>Mujer</span>
            </div>
            <div className='home__categories__container__circle'>
              <img src={iconWoman} className='home__categories__container__circle__img' alt="Zapato Azul" />
            </div>
          </div>


          <div>
            <div className='home__categories__container__title'>
              <span className='home__categories__container__text'>Niños</span>
            </div>
            <div className='home__categories__container__circle'>
              <img src={iconNiños} className='home__categories__container__circle__img' alt="Zapato Azul" />
            </div>
          </div>

        

          <div>
            <div className='home__categories__container__title'>
              <span className='home__categories__container__text'>Hombre</span>
            </div>
            <div className='home__categories__container__circle'>
              <img src={iconMen} className='home__categories__container__circle__img' alt="Zapato Azul" />
            </div>
          </div>


    

        </div>
      </div>

    </div>
  );
};

export default Home;
