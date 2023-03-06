import { createContext, useReducer } from "react";
import axios from "axios";
import ContractReducer from "./ContractReducer";

const initialState = {
  contracts: [],
  contract: {},
  error: null,
  loading: false
};

const API_URL = "http://localhost:8080";

export const ContractsContext = createContext(initialState);

export const ContractsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContractReducer, initialState);

  function setLoading() {
    dispatch({
      type: "SET_LOADING",
    });
  }

  
  const addContract = async (formData) => {
    try {
      const res = await axios.post(API_URL + '/contractos/addcontract', formData);
      dispatch({
        type: "ADD_CONTRACT",
        payload: res.data.formData,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getContracts = async () => {
    const res = await axios.get(API_URL + '/contractos/listcontracts');
    dispatch({
      type: "GET_CONTRACTS",
      payload: res.data,
    });
  };
  const deleteContract = async (_id) => {
    try {
      const res = await axios.delete(API_URL + "/contractos/deletecontract/" + _id);

      dispatch({
        type: "DELETE_CONTRATC",
        payload: res.data._id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const editContract = async (_id, formValues) => {
    try {
      await axios.put(API_URL + "/contractos/modifycontract/" + _id, formValues)

    } catch (err) {
      console.error(err);
    }
  };
  const getContractById = async (_id) => {
    setLoading(true);
    try{
    const res = await axios.get(API_URL + '/contractos/contracts/' + _id);
    console.log(res.data);
    dispatch({
      type: "GET_CONTRACT_BY_ID",
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: "CONTRACT_ERROR",
      payload: err.response.data.error,
    });
  }
};
  const getContractByName = async (name) => {
    setLoading(true);
    try{
    const res = await axios.get(API_URL + '/contractos/getContractByName/' + name);
    console.log(res.data);
    dispatch({
      type: "GET_CONTRACT_BY_NAME",
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: "CONTRACT_ERROR",
      payload: err.response.data.error,
    });
  }
};
  return (
    <ContractsContext.Provider
      value={{
        contracts: state.contracts,
        contract: state.contract,
        error: state.error,
        loading: state.loading,
        addContract,
        getContracts,
        deleteContract,
        editContract,
        getContractById,
        getContractByName
      }}
    >
      {children}
    </ContractsContext.Provider>
  );
};


