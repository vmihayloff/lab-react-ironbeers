import React, { Component } from 'react'
import newBeer from '../assets/new-beer.png'
import {Link} from 'react-router-dom';
import Header from './Header';

class NewBeer extends Component {
    render() {
        return (
            <div>
            <Header/>
            <img src= {newBeer} alt= "New beer photo"/>
            <Link to = '/new-beer'>
            <h1> New Beer</h1>
            </Link>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in neque eget tellus fermentum dapibus dictum sed arcu. 
        Mauris justo turpis, ultricies quis commodo at, molestie ac magna. Quisque id ex ipsum. Nunc pulvinar ipsum enim, a ornare tellus euismod sit amet. 
        Curabitur porta libero enim, non ullamcorper dolor cursus vel. 
        </p>                
            </div>
        )
    }
}


export default  NewBeer