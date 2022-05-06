import { ADD_ITEM_TO_BASKET, CLEAR_BASKET, DELETE_ITEM_FROM_BASKET, GET_ITEMS_INFO, INIT_BASKET_TOTAL } from '../actionTypes/basketAT'

const initialState = {
  basket: JSON.parse(localStorage.getItem('basket'))?.basket ?? [],
  itemsInfoFromDb: JSON.parse(localStorage.getItem('basket'))?.itemsInfoFromDb ?? [],
  basketTotal: ''
};

export function basketReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_ITEM_TO_BASKET:
      return {
        ...state, basket: [...state.basket, action.payload]
      }

    case GET_ITEMS_INFO:
      console.log('getItems', action.payload)
      return {
        ...state, itemsInfoFromDb: [...state.itemsInfoFromDb, action.payload]
      }

    case INIT_BASKET_TOTAL:
      return {
        ...state, basketTotal: Number(action.payload)
      }

    case DELETE_ITEM_FROM_BASKET:
      return {
        ...state, basket: [...state.basket].filter(item => item.id !== action.payload)
      }

    case CLEAR_BASKET:
      return {
        ...state, basket: [], itemsInfoFromDb: []
      }

    default:
      return state
  }
}


// import { ADD_ITEM_TO_BASKET, GET_ITEMS_INFO, INIT_BASKET_TOTAL } from '../actionTypes/basketAT'

// // const initialState = { basket: [] }
// const initialState = {
//   basket: {
//     basketItems: JSON.parse(localStorage.getItem('basket'))?.basket ?? [],
//     itemsInfoFromDb: JSON.parse(localStorage.getItem('basket'))?.itemsInfoFromDb ?? [],
//   },
//   basketTotal: ''
// };

// export function basketReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_ITEM_TO_BASKET:
//       return {
//         ...state, basket: [...state.basket, action.payload]
//       }
//     case GET_ITEMS_INFO:
//       return {
//         ...state, itemsInfoFromDb: action.payload
//       }
//     case INIT_BASKET_TOTAL:
//       // console.log(action.payload, 'action.payload')
//       return {
//         ...state, basketTotal: Number(action.payload)
//       }
//     default:
//       return state
//   }
// }
