import React from 'react';
import Slider from 'rc-slider';

import {
  Container,
  Current,
  Volume
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://f4.bcbits.com/img/a2211851590_10.jpg"
        alt="Cover"
      />

      <div>
        <span>Time like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        // value={100}
      />
    </Volume>
  </Container>
);

export default Player;
