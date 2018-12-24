import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import {
  Wrapper,
  Container,
  Content
} from './styles/components';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyles />

      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  </BrowserRouter>
);

export default App;
