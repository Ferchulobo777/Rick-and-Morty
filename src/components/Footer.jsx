import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container_footer">
        <h3 className="academlo my_name animate_marquee">
          Ferchulobo777 || Desing
        </h3>
        <h3 className="academlo my_name animate_marquee">
          Fernando Rodriguez
        </h3>
        <p className="text_1">
          Hecho con <strong className="heart">❤️</strong> en Academlo
        </p>
        <p className="contact">Contactame</p>
        <div className="social_media">
          <div className="container_icons">
            <a
              className="icon"
              href="https://api.whatsapp.com/send?phone=2612060674"
            >
              <i className="fa-brands fa-whatsapp icon heart"></i>
            </a>
          </div>
          <div className="container_icons">
            <a className="icon" href="https://github.com/Ferchulobo777">
              <i className="fa-brands fa-github icon heart"></i>
            </a>
          </div>
          <div className="container_icons">
            <a className="icon" href="mailto:ferchulobo2015@gmail.com">
              <i className="fa-sharp fa-regular fa-envelope icon heart"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
