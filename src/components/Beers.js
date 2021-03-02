import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response);
        console.log('data was fetched');
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    const { beers } = this.state;
    console.log('Render happened');
    return (
      <div>
        <Header />
        {beers.map((singleBeer, index) => {
          return (
            <div>
              <img src={singleBeer.image_url} height='120px' />
              <h3> {singleBeer.name} </h3>
              <h4> {singleBeer.tagline} </h4>
              <h5> <b>Created by </b> {singleBeer.contributed_by} </h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
