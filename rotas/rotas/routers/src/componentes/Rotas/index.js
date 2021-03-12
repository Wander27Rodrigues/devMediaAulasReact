import React from 'react';
// react-router-dom para criar as rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from '../PaginaInicial';
import PaginaFrontEnd from '../PaginaFrontEnd';
import PaginaBackEnd from '../PaginaBackEnd';


// forma mais simples de se escrerver uma fuction
// cost Rotas = () => ();
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            {/* exact path - associa a URL a um componente */}
            <Route exact path='/' component={ PaginaInicial } />
            <Route path='/front-end' component={ PaginaFrontEnd } />
            <Route path='/back-end' component={ PaginaBackEnd } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;