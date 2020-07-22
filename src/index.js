import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


import {createStore} from "redux";//ипорт для создания хранилища
import Reducer from "./redusers/indexReducer";//импорт редьюсеров где хранится стор и функции изменения для стора
import {Provider} from "react-redux";//соеденение со стором


const store = createStore(Reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
