import React, { useContext, useEffect, useState } from "react";
import { ContractsContext } from "../../context/ContractState";
import { AiFillBackward } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spin } from "antd";
import "./EditContract.scss"

const EditContract = () => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const { contract, editContract, getContractById, loading } = useContext(ContractsContext);
    const [formValues, setFormValues] = useState({
        nombre: "",
        apellido1: "",
        apellido2: "",
        documento: "",
        cp: "",
        localidad: "",
        direccion: "",
        telefono: ""
    });

    useEffect(() => {
        getContractById(_id)
    }, [])

    useEffect(() => {
            setFormValues({
                nombre: contract?.contract.nombre || "",
                apellido1: contract?.contract.apellido1 || "",
                apellido2: contract?.contract.apellido2 || "",
                documento: contract?.contract.documento || "",
                cp: contract?.contract.cp || "",
                localidad: contract?.contract.localidad || "",
                direccion: contract?.contract.direccion || "",
                telefono: contract?.contract.telefono || "",
            });
    }, [contract]);

    const handleSubmit = (event) => {
        event.preventDefault();
        editContract(contract?.contract._id, {...formValues });
        setTimeout(() => {
            navigate("/contracts");
          }, 1000);
      
      };

    return (
        <div className="form-edit">
            <div className='img'>
                <a href="https://ganaenergia.com/" target="_blank" rel="noopener noreferrer"> <img src="https://ganaenergia.com/assets/img/gana-energia-logo-fix.svg" alt="" srcset="" /> </a>     </div>
            <Button onClick={() => navigate(-1)} className="button-create-acount">
                <AiFillBackward /> Volver atras
            </Button>
            <form
                className="form"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 30 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onSubmit={handleSubmit}
          
            >
                <h2 className='text-header'>RELLENE LOS DATOS PARA EDITAR EL CONTRATO</h2>
                <input Value={contract?.contract?.nombre || ""} onChange={(e) => setFormValues({ ...formValues, nombre: e.target.value })} name="nombre"/>
                <input Value={contract?.contract?.apellido1 || ""} onChange={(e) => setFormValues({ ...formValues, apellido1: e.target.value })} name="apellido1"/>
                <input Value={contract?.contract?.apellido2 || ""} onChange={(e) => setFormValues({ ...formValues, apellido2: e.target.value })} name="apellido2"/>
                <input Value={contract?.contract?.documento || ""} onChange={(e) => setFormValues({ ...formValues, documento: e.target.value })} name="documento"/>
                <input Value={contract?.contract?.cp || ""} onChange={(e) => setFormValues({ ...formValues, cp: e.target.value })} name="cp"/>
                <input Value={contract?.contract?.localidad.municipio_nombre || ""} onChange={(e) => setFormValues({ ...formValues, localidad: e.target.value })} name="localidad"/>
                <input Value={contract?.contract?.direccion || ""} onChange={(e) => setFormValues({ ...formValues, direccion: e.target.value })} name="direccion"/>
                <input Value={contract?.contract?.telefono || ""} onChange={(e) => setFormValues({ ...formValues, telefono: e.target.value })} name="telefono"/>
                <Button type="primary" block htmlType="submit" className="btn" onClick={handleSubmit} >
                    Actualizar contrato
                </Button>
            </form>
        </div>
    )
};

export default EditContract;


