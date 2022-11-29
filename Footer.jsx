import React from 'react';
import './Footer.css'
import Github from '../../assets/icono-github.png'

const Footer = () => {
    return(
        <>
       <footer className="pie-de-pagina">
  <div className="grupo1">
    <div className="box">
      <figure className='github'>
        <a href="#">
          <img src={Github} alt="Logo Github"  className='imagen-github'/></a>
      </figure>
    </div>
    <div className="box">
      <h2>Cecilia Prado</h2>
      <p>Desarrolladora Front End Developer</p>
      <p>Un arte adaptado a cada negocio</p>
    </div>
    <div className="box">
      <h2>REDES SOCIALES</h2>
      <div className="red-social">
        <a href="https://www.facebook.com/profile.php?id=100065123491685" target="_blank"/>
        <a href="https://www.instagram.com/entazado_/" className="fa fa-instagram" target="_blank" />
      </div>
    </div>
  </div>
  <div className="grupo2">
    <small>Copy, 2022 <b>CECILIA PRADO</b> - Todos los derechos reservados</small>
  </div>
</footer>
     </>
    )
}

export default Footer