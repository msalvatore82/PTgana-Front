import { useParams } from 'react-router-dom';
import { ContractsContext } from '../../context/ContractState';
import { Button } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { GoPencil, GoTrashcan, GoPlus, } from "react-icons/go";
import { AiFillBackward } from "react-icons/ai";

import AddContract from "../../components/AddContract/AddContract";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const { getContractByName, contract, deleteContract } = useContext(ContractsContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Agregar estado isLoading
    const showModal = () => {
      setIsModalVisible(true);
    };
    const navigate = useNavigate();
  
    const handleDelete = (_id) => {
      deleteContract(_id);
    };
  
    const { name } = useParams();
    useEffect(() => {
      getContractByName(name)
        .then(() => setIsLoading(false)) // Cambiar isLoading a false cuando se han obtenido los datos
        .catch(() => setIsLoading(false)); // También en caso de error
      // eslint-disable-next-line
    }, [name]);
  
    // Mostrar mensaje de carga mientras se están obteniendo los datos
    if (isLoading) {
      return <div>Cargando...</div>;
    }
  
    // Mostrar la tabla con los datos cuando los datos han sido obtenidos
    return (
      <div className="table-container">
              <div className='img'>
        <a href="https://ganaenergia.com/" target="_blank" rel="noopener noreferrer"> <img src="https://ganaenergia.com/assets/img/gana-energia-logo-fix.svg" alt="" srcset="" /> </a>     </div>
        <div className="btn-add">
          <Button onClick={() => showModal()} className="button-create-acount">
            <GoPlus /> Nuevo
          </Button>
          <Button onClick={() => navigate(-1)} className="button-create-acount">
            <AiFillBackward /> Volver atras
          </Button>
          <AddContract visible={isModalVisible} setVisible={setIsModalVisible} />
        </div>
  
        <div className="header-container">
          <div className="table-cell">Id</div>
          <div className="table-cell">Nombre</div>
          <div className="table-cell">Documento</div>
          <div className="table-cell">cp</div>
        </div>
        <div className="cellContract-container" key={contract?.result[0]._id}>
          <div className="cellContract">{contract?.result[0]._id}</div>
          <div className="cellContract">{contract?.result[0].nombre} {contract?.result[0].apellido1}</div>
          <div className="cellContract">{contract?.result[0].documento}</div>
          <div className="cellContract">{contract?.result[0].cp}</div>
        </div>
      </div>
    );
  };
  
  export default Search;
  