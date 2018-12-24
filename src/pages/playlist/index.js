import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://f4.bcbits.com/img/a2211851590_10.jpg"
        alt="Playlist"
      />

      <div>
        <span>Playlist</span>

        <h1>Rock 4ever</h1>

        <p>12 músicas</p>

        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração" /></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
