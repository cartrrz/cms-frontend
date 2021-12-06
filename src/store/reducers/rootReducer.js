import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    auth: authReducer,
    users: userReducer
})

export default rootReducer;
