import {createStore} from "redux";
import reducers from "./index";

export default function configureStore(){
    // Store'i oluşturduk ve içine reducers 'i gönderdik
    return createStore(reducers)
}