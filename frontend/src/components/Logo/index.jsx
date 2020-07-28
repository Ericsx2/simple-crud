import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/imgs/logo2.png'

import { Container } from './styles';

function Logo() {
  return <Container className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo"/>
    </Link>
  </Container>;
}

export default Logo;