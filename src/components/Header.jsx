import React from 'react'
import Sound from './Sound'
import picture from '../assets/img/headerImg.jpg'
import sound from '../assets/audio/Rick_and_Morty.ogg'

const Header = () => {
  return (
    <section>
    <div className='container_header_img'>
        <img  className='img-header' width="100%" src={picture} alt="header.jpg" />
    </div>
    <Sound src={sound}/> 
    </section>

  )
}

export default Header