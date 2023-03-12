import React from 'react'
import Sound from './Sound'

const Header = () => {
  return (
    <section>
    <div className='container_header_img'>
        <img width="100%" src='/headerImg.jpg' alt="header.jpg" />
        <Sound src="/public/Rick_and_Morty.ogg"/> 
    </div>
    </section>

  )
}

export default Header