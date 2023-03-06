const contracts = (state, action) => {
  switch (action.type) {
    case "ADD_CONTRACT":
      return {
        ...state,
        contract: action.payload,
      };
      case "GET_CONTRACT_BY_ID":
        return {
          ...state,
          contract: action.payload,
        };
        case "GET_CONTRACT_BY_NAME":
        return {
          ...state,
          contract: action.payload,
        };
    case "DELETE_CONTRACT":
      return {
        ...state,
        contracts: state.contratos.filter(
          (contratc) => contratc._id !== action.payload
        ),
      };

    case "GET_CONTRACTS":
      return {
        ...state,
        contracts: action.payload,
      };
    default:
      return state;

  }

};
export default contracts;


