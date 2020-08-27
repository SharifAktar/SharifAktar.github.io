import React from 'react';
import './cardstyle.css';

 function interest() {

  return (
    <div>
<h2 style={{backgroundColor: "#FBF6D9"}}>MY INTEREST AND HOBBY </h2>
<br/>

<ul  className="cards"> 
 <li className="cards__item">
    <div className="card">
      <div className="card__image card__image--fence"></div>
      <div className="card__content">
        <div className="card__title">LEARNING TO SUCCESS </div>
        <p className="card__text">“NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY.” </p>
        <button className="btn btn--block card__btn">LEARNING TO SUCCESS</button>
      </div>
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <div className="card__image card__image--river"></div>
      <div className="card__content">
        <div className="card__title">POETRY & STORY</div>
        <p className="card__text">It was 2004 to 2006 my five poem and one short story published in Daily Ajker Kagoj.</p>
        <button className="btn btn--block card__btn">POETRY & STORY</button>
      </div>
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <div className="card__image card__image--record"></div>
      <div className="card__content">
        <div className="card__title">TRAVEL</div>
        <p className="card__text"> “I travel because it makes me realize how much I haven't seen, how much I'm not going to see, and how much I still need to see.” .</p>
        <button className="btn btn--block card__btn">TRAVEL</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--flowers"></div>
      <div class="card__content">
        <div class="card__title">SPORTS</div>
        <p class="card__text">Love to play Football & Cricket and many other sports.Football was always my dream. I started playing at the age of five, and I'm still playing now.
"</p>
        <button class="btn btn--block card__btn">SPORTS</button>
      </div>
    </div>
  </li>
   </ul>
    </div>
    
 
  );}

  export default interest;
