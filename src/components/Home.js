import React, { Component } from 'react';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <article>
          <img src={beers} alt="All beers image" />
          <Link to="/beers">
            <h1> All Beers </h1>
          </Link>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            neque eget tellus fermentum dapibus dictum sed arcu. Mauris justo
            turpis, ultricies quis commodo at, molestie ac magna. Quisque id ex
            ipsum.
          </p>
        </article>
        <article>
          <img src={randomBeer} alt="Random beer photo" />
          <Link to="/random-beer">
            <h1> Random Beer</h1>
          </Link>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            neque eget tellus fermentum dapibus dictum sed arcu. Mauris justo
            turpis, ultricies quis commodo at, molestie ac magna. Quisque id ex
            ipsum.
          </p>
        </article>
        <article>
          <img src={newBeer} alt="New beer photo" />
          <Link to="/new-beer">
            <h1> New Beer</h1>
          </Link>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            neque eget tellus fermentum dapibus dictum sed arcu. Mauris justo
            turpis, ultricies quis commodo at, molestie ac magna. Quisque id ex
            ipsum.
          </p>
        </article>
      </div>
    );
  }
}

export default Home;
