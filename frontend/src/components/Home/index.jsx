import React from 'react';

import Main from '../Main'

function Home(props) {
  return <Main icon="home" title="Início" 
            subtitle="Segundo projeto do capítulo de react">
        <div className="display-4">Bem Vindo!</div>
        <hr/>
        <p className="mb-0">Sistema para exemplificar um cadastro desenvolvido em React!</p>
    </Main>;
}

export default Home;