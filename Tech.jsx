import React from 'react';
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Sass from '../../assets/sass.webp'
import Javascript from '../../assets/javascript.png'
import './Tech.css'

const Tech = () => {
    return(
        <>
        <hr />
        <h1 className='tecnologias'>Tecnologías que manejo</h1>
        <div className='contenedor-tecnologias'>
            <figure className="html">
            <h1><img src={Html} alt=""/>HTML</h1>
            </figure>
            <figure className="css">
            <h1><img src={Css} alt=""/>CSS</h1>
            </figure>
            <figure className="sass">
              <h1><img src={Sass} alt=""/>SASS</h1>
            </figure>
     </div>
     <div>
        
     </div>
        </>
    )
}

export default Tech 