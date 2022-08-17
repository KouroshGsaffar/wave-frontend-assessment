import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {fetchCustomerList,fetchCustomerListSuccess,fetchCustomerListError} from "../redux/customerSlice";

export function* onFetchData() {
    try {
    const { data } = yield call(axios.get, 'https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json')
      yield put(fetchCustomerListSuccess(data));
    } catch (e) {
      yield put(fetchCustomerListError(e));
    }
  }
  
  export default function* fetchDataSaga() {
    yield takeLatest(fetchCustomerList.type, onFetchData);
  }
  