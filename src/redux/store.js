import { configureStore} from "@reduxjs/toolkit";
import customerReducer from './customerSlice'
import createSagaMiddleware from 'redux-saga';
import mySaga from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware();
const store =configureStore({
    reducer:{
        customer:customerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga);
export default store
