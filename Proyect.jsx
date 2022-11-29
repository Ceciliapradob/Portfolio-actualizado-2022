import React from 'react';
import './Proyect.css'
import Venicrea from '../../assets/venicrea.png'
import Desarroladora from '../../assets/desarrolladora.png'



const Proyect = () => {

    return(
       <> 
       <hr />
       <h1 className='titulo-proyectos' id='proyectos'>Proyectos realizados</h1> 
    <div className="contenedor-card">
  <div className="card">
    <figure>
      <img src={Venicrea} alt />
    </figure>
    <div className="contenido">
      <h3>Landing Page</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, amet consequuntur? Vitae, tenetur
        voluptatum tempora facilis
        sequi cum unde beatae optio est autem, consectetur, omnis voluptates eligendi necessitatibus saepe cumque.</p>
      <a href>Leer más</a>
    </div>
  </div>
  <div className="card">
    <figure>
      <img src={Desarroladora} alt />
    </figure>
    <div className="contenido">
      <h3>Portfolio</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, amet consequuntur? Vitae, tenetur
        voluptatum tempora facilis
        sequi cum unde beatae optio est autem, consectetur, omnis voluptates eligendi necessitatibus saepe cumque.</p>
      <a href>Leer más</a>
    </div>
  </div>
  <div className="card">
    <figure>
      <img src="images/reactJS.png" alt />
    </figure>
    <div className="contenido">
      <h3>Portfolio con React-Js</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, amet consequuntur? Vitae, tenetur
        voluptatum tempora facilis
        sequi cum unde beatae optio est autem, consectetur, omnis voluptates eligendi necessitatibus saepe cumque.</p>
      <a href>Leer más</a>
    </div>
  </div>
</div>
 <hr />
 
       </>
    )
}

export default Proyect