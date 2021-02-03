import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Projects.css';
import Photo1 from './img/BandGangs.png';
function Projects(props) {
  return (
    <div>
      <Navbar />
      <div className="cards">
    <div className="card card-one">
      <div className="container">
          <img src={Photo1} alt="Image du Projet"/>
      </div>
      <div className="card-txt">
          <h2>BandGangs</h2>
          <p>
            BandGangs est le deuxième projet de groupe de ma formation à la wildcode school!C'est un site musical sur lequel écouter de extraits.
          </p>
      </div>
    </div>
    <div className="card card-one">
      <div className="container">
          <img src={Photo1} alt="Image du Projet"/>
      </div>
      <div className="card-txt">
          <h2>Atout Branches</h2>
          <p>
            Atout Branches est le projet client de fin de formation à la Wild Code School, c'est un site fait pour le parc d'accrobranche situé à Milly-la-Forêt.
          </p>
      </div>
    </div>
  </div>
      <Footer />
    </div>
  )
}
 
export default Projects;
