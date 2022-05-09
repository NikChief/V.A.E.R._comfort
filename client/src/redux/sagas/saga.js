import {put, call, takeEvery} from 'redux-saga/effects';
import { initColorsAC } from '../actionCreators/colorsAC';
import { editUserAC, loggedInUserAC, loggedOutUserAC } from '../actionCreators/userAC';
import { initCurrentItemAC, initCurrentItemPriceAC } from '../actionCreators/itemAC';
import { clearCurrentOrderAC, initCurrentOrderAC, initCurrentOrderMessageAC, initOrdersAC } from '../actionCreators/ordersAC';
import { initMaterialsAC } from '../actionCreators/materialsAC';
import { initTypesAC } from '../actionCreators/typesAC';
import { initCategoryTypesAC } from '../actionCreators/categoryTypeAC';
import { clearBasketAC, getItemsInfoAC } from '../actionCreators/basketAC';
import { initPatternsAC } from '../actionCreators/patternsAC'

import { ERR_LOGGEDIN_USER, SAGA_EDIT_USER, SAGA_IS_USER_AUTHORIZED, SAGA_LOGGEDIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from '../actionTypes/userAT';
import { ERR_ORDERS, SAGA_ADD_ORDER_ITEM, SAGA_INIT_CURRENT_ORDER, SAGA_INIT_ORDER, SAGA_INIT_ORDERS } from '../actionTypes/ordersAT';
import { SAGA_INIT_COLORS } from '../actionTypes/colorsAT';
import { SAGA_INIT_CURRENT_ITEM, SAGA_INIT_CURRENT_ITEM_PRICE } from '../actionTypes/itemAT';
import { SAGA_INIT_MATERIALS } from '../actionTypes/materialsAT';
import { SAGA_INIT_TYPES } from '../actionTypes/typesAT';
import { SAGA_INIT_CATEGORY_TYPES } from '../actionTypes/categoryTypesAT'
import { SAGA_GET_ITEMS_INFO } from '../actionTypes/basketAT';
import { SAGA_INIT_ORDER_DETAILS } from '../actionTypes/orderDetailsAT';
import { fetchInitOrderDetailsAC, initOrderDetailsAC } from '../actionCreators/orderDetailsAC';
import { SAGA_INIT_PATTERNS } from '../actionTypes/patternsAT';


async function fetchData({url, headers, method, body}) {
  const response = await fetch(url, {method, headers, body});
  return (await response.json());
}

function* fetchOrdersInit(action) {
  try {
    const data = yield call(fetchData, { url: '/orders' });
    yield put(initOrdersAC(data));
  } catch (e) {
    yield put({ type: ERR_ORDERS, message: e.message });
  }
}

function* fetchInitOrderDetails(action) {
  try {
    const data = yield call(fetchData, { url: `/orders/${action.payload}` });
    yield put(initOrderDetailsAC(data.orderDetails));
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
//
function* fetchEditUser(action) {
  try {
    const data = yield call(
      fetchData, {
      url: '/editprofile',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(action.payload)
    }
    );
    // console.log(data)
    yield put(editUserAC(data));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER,
        message: e.message
      }
    );
  }
}
//

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

function* fetchInitMaterials(action) {
  try {
    const data = yield call(
      fetchData, {
        url: `/materials/${action.payload}`,
      }
    );
    
    yield put(initMaterialsAC(data));

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

function* fetchInitTypes(action) {
  try {
    const data = yield call(
      fetchData, {
        url:'/types',
      }
    );
    
    yield put(initTypesAC(data));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchInitCategoryTypes(action) {
  try {
    const data = yield call(
      fetchData, {
        url:`/catalogue/${action.payload}`,
      }
    );
    
    yield put(initCategoryTypesAC(data));
    } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}


function* fetchItemsInfo(action) {
  try {
    const data = yield call(
      fetchData, {
        url: `/items/${action.payload.basketId}/${action.payload.patternId}/${action.payload.materialId}`,
      }
    );
    
    yield put(getItemsInfoAC(data));
    // yield put(getItemsInfoAC(data.price));
    // yield put(getItemsInfoAC(data.price));

  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchInitPatterns(action) {
  try {
    const data = yield call(
      fetchData, {
        url: `/catalogue?category_type_id=${action.payload}`
        // url:`/catalogue/${action.payload.type}/${action.payload.categoryType}`,
      }
    );
    
    yield put(initPatternsAC(data));
    } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchInitCurrentOrder(action) {
  try {
    const data = yield call(
      fetchData, {
        url: '/orders', 
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(action.payload)
      }
    );
    
    yield put(initCurrentOrderAC(data));
    yield put(initCurrentOrderMessageAC(data.message));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchAddOrderItem(action) {
  try {
    const data = yield call(
      fetchData, {
        url: '/orderItems', 
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(action.payload)
      }
    );
    
    if (data.message === 'Данные записаны в базу данных') {
      console.log('data.message', data.message)
      console.log('helllooo1111')
      yield put(clearCurrentOrderAC())
      yield put(clearBasketAC())
    } else {
      console.log('helllooo')
      console.log(data.message)
    }
    // yield put(loggedInUserAC(data));
  } catch (e) {
    yield put(
      {
        type: ERR_LOGGEDIN_USER, 
        message: e.message
      }
    );
  }
}

function* fetchInitCurrentItemPrice(action) {
  try {
    const data = yield call(
      fetchData, {
        url: `/items/${action.payload.patternId}/${action.payload.materialId}`,
      }
    );
    
    yield put(initCurrentItemPriceAC(data));
    // yield put(getItemsInfoAC(data.price));
    // yield put(getItemsInfoAC(data.price));

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
  yield takeEvery(SAGA_INIT_MATERIALS, fetchInitMaterials)
  yield takeEvery(SAGA_INIT_TYPES, fetchInitTypes)
  yield takeEvery(SAGA_INIT_CATEGORY_TYPES, fetchInitCategoryTypes)
  yield takeEvery(SAGA_GET_ITEMS_INFO, fetchItemsInfo)
  yield takeEvery(SAGA_INIT_ORDER_DETAILS, fetchInitOrderDetails)
  yield takeEvery(SAGA_INIT_PATTERNS, fetchInitPatterns)
  // yield takeEvery(SAGA_INIT_ORDER, fetchInitOrder)
  yield takeEvery(SAGA_EDIT_USER, fetchEditUser)
  yield takeEvery(SAGA_INIT_CURRENT_ORDER, fetchInitCurrentOrder)
  yield takeEvery(SAGA_ADD_ORDER_ITEM, fetchAddOrderItem)
  yield takeEvery(SAGA_INIT_CURRENT_ITEM_PRICE, fetchInitCurrentItemPrice)
}
