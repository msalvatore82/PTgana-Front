import { Button } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { GoPencil, GoTrashcan, GoPlus } from "react-icons/go";
import { AiFillBackward } from "react-icons/ai";

import AddContract from "../../AddContract/AddContract";
import { ContractsContext } from '../../../context/ContractState';
import "./Contract.scss"
import { useNavigate } from "react-router-dom";



const Contract = () => {
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  // eslint-disable-next-line
  const [text, setText] = useState("");
  const { contracts, getContracts, deleteContract, addContract } = useContext(ContractsContext);
  const [contractAdded, setContractAdded] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate('/search/' + e.target.value)

    }
  };
  const handleDelete = (_id) => {
    deleteContract(_id);
    setDeleted(true);
  };
  // eslint-disable-next-line
  const handleAdd = (contract) => {
    addContract(contract);
    setContractAdded(true);

  }

  useEffect(() => {
    getContracts();
    if (contractAdded) {
      setContractAdded(false);
      setDeleted(true);
    }
  }, [deleted, addContract, contractAdded]);



  return (
    <div className="table-container">
            <div className='img'>
        <a href="https://ganaenergia.com/" target="_blank" rel="noopener noreferrer"> <img src="https://ganaenergia.com/assets/img/gana-energia-logo-fix.svg" alt="" srcset="" /> </a>     </div>
      <div className="btn-add">
        <Button onClick={() => showModal()} >
          <GoPlus /> Nuevo
        </Button>
        <Button onClick={() => navigate(-1)} className="button-create-acount">
            <AiFillBackward /> Volver atras
          </Button>
        <input onKeyUp={handleChange} placeholder="Buscar por nombre" name="text" className="input-search" />
        <AddContract visible={isModalVisible} setVisible={setIsModalVisible} />

      </div>

      <div className="header-container">
        <div className="table-cell">Id</div>
        <div className="table-cell">Nombre</div>
        <div className="table-cell">Documento</div>
        <div className="table-cell">Acciones</div>
      </div>

      {Array.isArray(contracts?.contratos) &&
        contracts?.contratos.map((contract) => (
          <div className="cellContract-container" key={contract?._id}>
            <div className="cellContract">{contract?._id}</div>
            <div className="cellContract">{contract?.nombre} {contract?.apellido1}</div>
            <div className="cellContract">{contract?.documento}</div>
            <div className="cellContract button">
              <Button onClick={() => navigate(`/contracts/${contract._id}`)} >

                <GoPencil /> Editar

              </Button>
              <Button onClick={() => handleDelete(contract._id)}>

                <GoTrashcan /> Borrar
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};


export default Contract;





