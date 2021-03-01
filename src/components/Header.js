import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import home from '../assets/home.png';

class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src = {home} width="30px" height="55px"/>
            </a>
          </div>
        </nav>
                
            </div>
        )
    }
}

export default Header