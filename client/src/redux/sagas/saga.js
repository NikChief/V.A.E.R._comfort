import {put, call, takeEvery} from 'redux-saga/effects';
import { loggedInUserAC } from '../actionCreators/userAC';
import { ERR_LOGGEDIN_USER, SAGA_LOGGEDIN_USER } from '../actionTypes/userAT';

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


export function* sagaWatcher() {
  yield takeEvery(SAGA_LOGGEDIN_USER, fetchLoggedInUser)
  // yield takeEvery('FETCH_REGISTER_USER', regUserAsync)
  // yield takeEvery('FETCH_LOGOUT_USER', logoutUserAsync)
}
