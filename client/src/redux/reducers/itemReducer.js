import { INIT_CURRENT_ITEM } from "../actionTypes/itemAT"

const initialState = { currentItem: '' }


export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CURRENT_ITEM:
      // action.payload {id: 1001, name: 'Костюм такой-то', image: 'https://...', category_type_id: 1, color_count: 3}
      return {
        ...state, currentItem: action.payload
      }

    default:
      return state
  }
}
