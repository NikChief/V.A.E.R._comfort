import {put, call, takeEvery} from 'redux-saga/effects';
import { initColorsAC } from '../actionCreators/colorAC';
import { initCurrentItemAC } from '../actionCreators/itemAC';
import { initOrdersAC } from '../actionCreators/ordersAC';
import { loggedInUserAC, loggedOutUserAC } from '../actionCreators/userAC';
import { ERR_LOGGEDIN_USER, SAGA_IS_USER_AUTHORIZED, SAGA_LOGGEDIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from '../actionTypes/userAT';
import { SAGA_INIT_COLORS } from '../actionTypes/colorAT';
import { SAGA_INIT_CURRENT_ITEM } from '../actionTypes/itemAT';
import { ERR_LOGGEDIN_USER, SAGA_LOGGEDIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from '../actionTypes/userAT';
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

function* fetchLoggedInUser(action) {
  try {
    const data = yield call(
      fetchData, {
        url: '/login', 
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(action.payload)
      }
    );
    
    yield put(loggedInUserAC(data));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchRegisterInUser(action) {
  try {
    const data = yield call(
      fetchData, {
        url: '/registration', 
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(action.payload)
      }
    );
    
    yield put(loggedInUserAC(data));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchLoggedOutUser() {
  try {
    const data = yield call(
      fetchData, {
        url: '/logout',
      }
    );
    
    yield put(loggedOutUserAC());
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchIsUserAuthorized() {
  try {
    const data = yield call(
      fetchData, {
        url: '/login',
      }
    );
    
    yield put(loggedInUserAC(data));
  }  catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchInitColors() {
  try {
    const data = yield call(
      fetchData, {
        url: '/colors',
      }
    );
    
    yield put(initColorsAC(data));

  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchInitCurrentItem(action) {
  try {
    const data = yield call(
      fetchData, {
        url: `/patterns/${action.payload}`,
      }
    );
    
    yield put(initCurrentItemAC(data));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

export function* sagaWatcher() {
  yield takeEvery(SAGA_LOGGEDIN_USER, fetchLoggedInUser)
  yield takeEvery(SAGA_REGISTER_USER, fetchRegisterInUser)
  yield takeEvery(SAGA_LOGOUT_USER, fetchLoggedOutUser)
  yield takeEvery(SAGA_INIT_COLORS, fetchInitColors)
  yield takeEvery(SAGA_INIT_CURRENT_ITEM, fetchInitCurrentItem)
  yield takeEvery(SAGA_INIT_ORDERS, fetchOrdersInit)
  yield takeEvery(SAGA_IS_USER_AUTHORIZED, fetchIsUserAuthorized)

}
