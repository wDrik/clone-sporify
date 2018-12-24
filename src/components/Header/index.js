import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/19880078?v=4" alt="Avatar"/>
      Iorgen Wildrik
    </User>
  </Container>
);

export default Header;
