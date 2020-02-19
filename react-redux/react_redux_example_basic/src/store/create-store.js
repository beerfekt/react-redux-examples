import {createStore} from 'redux';
import rootReducer from '../reducers/_root_reducer';

const store = createStore(rootReducer); 

export default store