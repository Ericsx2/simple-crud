import React from 'react';

import { Container } from './styles';

function Header(props) {
  return <Container className="header d-none d-sm-flex flex-column">
      <h1 className="mt3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
      </h1>
<p className="lead text-muted">{props.subtitle}</p>
    </Container>;
}

export default Header;