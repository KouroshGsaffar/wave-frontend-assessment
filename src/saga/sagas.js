import { all, fork } from 'redux-saga/effects';
import fetchDataSaga from './fetchDataSaga';

function* mySaga() {
    try {
      yield all([
        fork(fetchDataSaga),
      ]);
    } catch (error) {
      mySaga();
    }
  }
  export default mySaga;
  