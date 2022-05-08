import { INIT_COLORS } from "../actionTypes/colorsAT"

const initialState = { 
  colors: [], 
  colorChosenMain:{id: null, image: 'pngwing.com.png'},
  colorChosenExtra1:{id: null, image: 'pngwing.com.png'},
  colorChosenExtra2:{id: null, image: 'pngwing.com.png'}
}


export function colorsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_COLORS:
      return {
        ...state, colors: action.payload
      };
    case 'PIC_MAIN':
      return {
        ...state, colorChosenMain: action.payload
      };
    case 'PIC_EXTRA1':
        return {
          ...state, colorChosenExtra1: action.payload
        };
    case 'PIC_EXTRA2':
      return {
        ...state, colorChosenExtra2: action.payload
      };
    case 'CLEAR_CHOISEN_COLORS':
      return {
        ...state,
        colorChosenMain: initialState.colorChosenMain,
        colorChosenExtra1: initialState.colorChosenExtra1,
        colorChosenExtra2: initialState.colorChosenExtra2,
      };      
    default:
      return state;
  }
}
