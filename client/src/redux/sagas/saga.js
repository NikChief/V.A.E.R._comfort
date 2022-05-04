import {put, call, takeEvery} from 'redux-saga/effects';
import { initColorsAC } from '../actionCreators/colorAC';
import { initCurrentItemAC } from '../actionCreators/itemAC';
import { loggedInUserAC, loggedOutUserAC } from '../actionCreators/userAC';
import { SAGA_INIT_COLORS } from '../actionTypes/colorAT';
import { SAGA_INIT_CURRENT_ITEM } from '../actionTypes/itemAT';
import { ERR_LOGGEDIN_USER, SAGA_LOGGEDIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from '../actionTypes/userAT';

async function fetchData({url, headers, method, body}) {
  const response = await fetch(url, {method, headers, body});
  return (await response.json());
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
}
