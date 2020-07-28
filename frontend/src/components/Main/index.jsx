import React from 'react';

import { Container } from './styles';
import Header from '../Header'

function Main(props) {
  return <>
    <Header {...props} />
    <Container className="content container-fluid">
      <div className="p-3 mt-3">
        {props.children}
      </div>
    </Container>
  </>
}

export default Main;