import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../Routes'
import Logo from '../Logo'
import Nav from '../Nav'
import Footer from '../Footer'


import { Container } from './styles';

function Layout() {
  return <Container>
    <BrowserRouter>
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </BrowserRouter>
  </Container>;
}

export default Layout;