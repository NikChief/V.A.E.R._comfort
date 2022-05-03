import {put, call, takeEvery} from 'redux-saga/effects';
import { initOrdersAC } from '../actionCreators/ordersAC';
import { ERR_ORDERS, SAGA_INIT_ORDERS } from '../actionTypes/ordersAT';

async function fetchData({url, headers, method, body}) {
  const response = await fetch(url, {method, headers, body});
  return (await response.json());
}

function* fetchOrdersInit(action) {
  try {
    const data = yield call(fetchData, { url: '/profile' });
    yield put(initOrdersAC(data.orders));
  } catch (e) {
    yield put({ type: ERR_ORDERS, message: e.message });
  }
}

export function* sagaWatcher() {
  yield takeEvery(SAGA_INIT_ORDERS, fetchOrdersInit)
  // yield takeEvery('FETCH_REGISTER_USER', regUserAsync)
  // yield takeEvery('FETCH_LOGOUT_USER', logoutUserAsync)
  // yield takeEvery('FETCH_LOGIN_USER', loginUserAsync)
}
