import React from 'react';

import { Container } from './styles';

function Footer() {
  return <Container className="footer">
    <span>
      Desenvolvido com <i className="fa fa-heart text-danger"></i> por
      <strong> Cod<span className="text-danger">3</span>r</strong>
    </span>
  </Container>;
}

export default Footer;