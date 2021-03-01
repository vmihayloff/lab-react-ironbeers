import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import axios from 'axios'

class Beers extends Component {
    state = {
        beers : []
    }

    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            let beers = {
                image: response.data.image,
                name: response.data.name,
                tagline: response.data.tagline,
                contributed_by: response.data.contributed_by
            }

            this.setState({
                beers:response.data
            })
            console.log(response.data)
        })
    }
    render() {
        return (
            <div>
            <Header/>
                
            </div>
        )
    }
}

export default Beers