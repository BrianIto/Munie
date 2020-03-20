import {combineReducers, createStore} from 'redux';
import EntradasReducer from './reducers/EntradasReducer';
import SaidasReducer from './reducers/SaidasReducer';

const Store = createStore(
  combineReducers({
    entradas: EntradasReducer,
    saidas: SaidasReducer,
  }),
);

export default Store;
