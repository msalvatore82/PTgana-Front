import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddContract from '../AddContract/AddContract';
import "./Home.scss"




export default function Home()  {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };


  return (
    <div>
      <div className='img'>
        <a href="https://ganaenergia.com/" target="_blank" rel="noopener noreferrer"> <img src="https://ganaenergia.com/assets/img/gana-energia-logo-fix.svg" alt="" srcset="" /> </a>     </div>
      <h1>Prueba Tecnica</h1>
      <Link to="/contracts">
        <button className="button-home">Ver contratos</button>
      </Link>
      <button onClick={() => showModal()} className="button-home">
        Agregar contrato
      </button>
      <AddContract visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};


