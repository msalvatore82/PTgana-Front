import { Button, Form, Input, notification } from 'antd';
import Modal from 'antd/es/modal/Modal';
import React, { useContext, useEffect, useState } from 'react';
import { ContractsContext } from '../../context/ContractState';
import axios from 'axios';
import "./AddContract.scss"

const AddContract = ({ visible, setVisible }) => {
  const { addContract } = useContext(ContractsContext);
  const [localidad, setLocalidad] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    nombre: "",
      apellido1: "",
      apellido2: "",
      documento: "",
      cp:  "",
      localidad: "",
      direccion: "",
      telefono: "",
  });


  const handleFormChange = (changedFields, allFields) => {
    const allFieldsFilled = allFields.every(field => field.errors.length === 0 && field.value !== '');
    setButtonDisabled(!allFieldsFilled);
  };

  const onSubmit = (formData) => {
    const dataToSend = { ...formData, localidad };
    addContract(dataToSend);
    setVisible(false);
    notification.success({
      message: 'Contrato agregado',
      description: 'Se ha agregado el contrato correctamente.',
      placement: 'topRight',
    });
    setFormValues();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onCpChange = async (e) => {
    const cp = e.target.value;
    if (cp.length === 5) {
      try {
        const response = await axios.get(`http://localhost:8080/localidades/getLocationCp/${cp}`);
        const localidad = response.data.localidad || '';
        setLocalidad(localidad);
      } catch (error) {
        console.error(error);
        setLocalidad('');
      }
    } else {
      setLocalidad('');
    }
  };


  return (
    <div>
      <Modal onCancel={handleCancel} open={visible} footer={[]}>
        <div className='img-add'>
          <a href="https://ganaenergia.com/" target="_blank" rel="noopener noreferrer"> <img src="https://ganaenergia.com/assets/img/gana-energia-logo-fix.svg" alt="" srcset="" /> </a>     </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 30 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onSubmit}
          onFieldsChange={handleFormChange}
        >
          <h2 className='text-header'>RELLENE LOS DATOS PARA CREAR EL CONTRATO</h2>
          <Form.Item
            rules={[
              { required: true, message: 'Por favor introduce tu nombre' },
              { pattern: /^[a-zA-Z]+$/, message: 'El nombre no es valido' },
            ]}
            type="text"
            name="nombre"
            label="NOMBRE"
            required
          >
            <Input />
          </Form.Item>
          <Form.Item type="text" name="apellido1" label=" PRIMER APELLIDO">
            <Input />
          </Form.Item>
          <Form.Item type="text" name="apellido2" label=" SEGUNDO APELLIDO">
            <Input />
          </Form.Item>
          <Form.Item type="text" name="documento" label="DNI" required>
            <Input />
          </Form.Item>
          <Form.Item type="text" name="cp" label="CODIGO POSTAL" onChange={onCpChange} rules={[
            {
              required: true,
              message: 'Por favor introduce un codigo postal valido',
            },
            {
              pattern: /^\d{5}$/,
              message: 'El codigo postal debe tener 5 numeros, incluidos 0',
            },
          ]} required>
            <Input />
          </Form.Item>
          <div className='inp'>
            <label className='input-localidad-text' htmlFor="">Localidad</label>
            <input className='input-localidad' type="text" name="localidad" label="LOCALIDAD" disabled={true} defaultValue={localidad?.municipio_nombre} />
          </div>

          <Form.Item
            type="text"
            name="direccion"
            label="DIRECCION"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Por favor introduce un numero de telefono valido',
              },
              {
                pattern: /^\d{9}$/,
                message: 'El número de teléfono debe tener 9 dígitos',
              },
            ]}
            type="tel"
            name="telefono"
            label="TELEFONO"
            required
          >
            <Input />
          </Form.Item>
          <Button type="primary" block htmlType="submit" className="btn-adde" disabled={buttonDisabled}>
            Crear contrato
          </Button>
        </Form>
      </Modal>
    </div>
  )
}

export default AddContract

