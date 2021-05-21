// Reducers'ları bir araya getir birleştir işlemini yapar
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
// elimizde  bulunan reducers ları bir araya getirdik
const reducers = combineReducers({
    counterReducer
});

export default reducers;