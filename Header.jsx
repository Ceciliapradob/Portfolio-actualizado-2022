import React from 'react';
import './Header.css'
import Instagram from '../../assets/icono-instagram.png'
import Facebook from '../../assets/icono-facebook.png'

const Header = () => {
    return (
        <>
            <header className="container-navbar">
                <nav className="navbar">
                   <h1 className="title">Cecilia Prado</h1>
                    <a href="#sobremi">Sobre mi</a>
                    <a href="#">Tecnologías que manejo</a>
                    <a href="#">Contacto</a>
                    
                </nav>
                <figure className="icono">
                    <a href="https://www.instagram.com/cecilinn_/" target="_blank"><img src={Instagram} alt /></a>
                    <a href="https://www.facebook.com/profile.php?id=100065123491685" target="_blank"><img src={Facebook} className="face" alt /></a>
                </figure>
            </header>
        </>
    )
}

export default Header 