import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

const Sound = ({ src }) => {
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const newSound = new Howl({
      src,
      autoplay: true,
      loop: true,
      volume: 2,
    });
    setSound(newSound);
    setPlaying(true);

    // Reproducir música automáticamente cuando se carga la página
    newSound.play();

    return () => {
      // Detener la instancia de Howl cuando el componente se desmonte
      newSound.stop();
    };
  }, [src]);

  const toggleSound = () => {
    if (sound) {
      if (playing) {
        sound.pause();
        setPlaying(false);
      } else {
        sound.play();
        setPlaying(true);
      }
    }
  };
  return (
    <div className="container_button">
      <button className='button_music'
        onClick={toggleSound}
      >
        <FontAwesomeIcon
          className="icono_music"
          icon={playing ? faStop : faPlay}
        />
      </button>
    </div>
  );
};

export default Sound;
