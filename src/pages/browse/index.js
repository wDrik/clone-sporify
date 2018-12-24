import React from 'react';

import {
  Container,
  Title,
  List,
  Playlist
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://f4.bcbits.com/img/a2211851590_10.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto ouve rock...</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://f4.bcbits.com/img/a2211851590_10.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto ouve rock...</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://f4.bcbits.com/img/a2211851590_10.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto ouve rock...</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://f4.bcbits.com/img/a2211851590_10.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto ouve rock...</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
