import Actions from '../actions/actions';

const initialState = {
  entradas: [],
};

const EntradasReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Actions.getEntradas:
      return {...state, entradas: payload};
    default:
      return state;
  }
};

export default EntradasReducer;
