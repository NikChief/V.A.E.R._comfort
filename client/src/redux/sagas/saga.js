import {put, call, takeEvery} from 'redux-saga/effects';

async function fetchData({url, headers, method, body}) {
  const response = await fetch(url, {method, headers, body});
  return (await response.json());
}


export function* sagaWatcher() {

  // yield takeEvery('FETCH_REGISTER_USER', regUserAsync)
  // yield takeEvery('FETCH_LOGOUT_USER', logoutUserAsync)
  // yield takeEvery('FETCH_LOGIN_USER', loginUserAsync)
}
