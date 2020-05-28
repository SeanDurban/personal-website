import React from 'react';
import './App.css';
import './App.sass';
import Arrow from './a4.png'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <section class="hero is-dark is-bold is-fullheight">
        <div class="hero-body">
   
            <figure class="image is-250x250">
              <img height="250px" width="250px"class="is-centred is-rounded is-inverted" src={Arrow} alt=" here"/>
            </figure>
        </div>
      </section>
      <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>By Seán Durban</strong>
        </p>
        <p>
          <a class="button is-medium is-dark is-outlined" href= "https://github.com/seandurban">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a class="button is-medium is-dark is-outlined " href= "https://linkedin.com">
            <span class="icon">
              <i class="fab fa-linkedin"></i>
            </span>
          </a>
          <a class="button is-medium is-dark is-outlined " href= "https://twitter.com">
            <span class="icon">
              <i class="fab fa-twitter"></i>
            </span>
          </a>
        </p>
      </div>
    </footer>
    </div>
  );
}

function CompassImage() {
  return (
    <div class="container has-text-centered">
      <img></img>
    </div>
  );
}

export default App;
