import { connect_users, disconnect_users } from "../Actions/actions.js";

//Définition du state initial
let stateInit = {
    idUser: null,
  };

const reducer = (state = stateInit, action = {}) => {
  console.log(action);
  //Gestion des actions du reducer et retour du nouveau state
  switch (action.type) {
    case connect_users:
      return {
        ...state,
        idUser: action.id,
      };
    case disconnect_users:
      return {
        ...state,
        idUser: null,
      };
    default:
      return state;
  }
};

export default reducer;
