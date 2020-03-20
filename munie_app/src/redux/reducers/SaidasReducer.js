import Actions from '../actions/actions';

const initialState = {
  saidas: [],
};

const SaidasReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Actions.getSaidas:
      return {...state, saidas: payload};
    default:
      return state;
  }
};

export default SaidasReducer;
