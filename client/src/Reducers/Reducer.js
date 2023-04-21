import { connect_users, disconnect_users } from "../Actions/actions.js";

//définition de la source de vérité
let stateInit = {
    idUser: null,
  };

const reducer = (state = stateInit, action = {}) => {
  console.log(action);
  //gestion des actions du Reducer
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
