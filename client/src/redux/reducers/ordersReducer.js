import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS, IN_PROCESSING_ORDERS, CONFIRMED_ORDERS, PAID_ORDERS, ON_DELIVERY_ORDERS, INIT_CURRENT_ORDER, CLEAR_CURRENT_ORDER, INIT_CURRENT_ORDER_MESSAGE, SET_ORDER_STATUS, FILTER_ORDERS } from '../actionTypes/ordersAT'


const initialState = { orders: [], currentOrder: '', currentOrderMessage: '', currentOrderValidationMessage: '', ordersInfo: [], ordersInfoFiltered: [] }


export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ORDERS:
      const colorNames = [];
      let colors = action.payload.colors
      let newOrderItems = action.payload.newOrderItems
      for (let i = 0; i < newOrderItems.length; i++) {
        for (let j = 0; j < colors.length; j++) {
          if (newOrderItems[i].main_color_id === colors[j].id) {
            newOrderItems[i].main_color_id = colors[j].name

          }
          if (newOrderItems[i].extra_color2_id === colors[j].id) {
            newOrderItems[i].extra_color2_id = colors[j].name

          }
          if (newOrderItems[i].extra_color1_id === colors[j].id) {
            newOrderItems[i].extra_color1_id = colors[j].name

          }

        }
        colorNames.push(newOrderItems[i])
      }

      return {
        ...state, orders: colorNames, constOrders: colorNames, ordersInfo: action.payload.orders, ordersInfoFiltered: action.payload.orders,
      }
    case ALL_ORDERS:
      return {
        ...state, 
        ordersInfoFiltered: [...state.ordersInfo]
      }

    case FILTER_ORDERS:
      return {
        ...state, 
        ordersInfoFiltered: [...state.ordersInfo].filter(order => order.status === action.payload),
      };

      
    case IN_PROCESSING_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.Order.status === 'В обработке')]
      }
    case CONFIRMED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.Order.status === 'Подтвержден')]
      }

    case REJECTED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.Order.status === 'Отменен')]
      }

    case PAID_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.Order.status === 'Оплачен')]
      }

    case ON_DELIVERY_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.Order.status === 'Передан в доставку')]
      }

    case COMPLETED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.Order.status === 'completed')]
      }

    

    case INIT_CURRENT_ORDER:
      return {
        ...state, currentOrder: action.payload
      }

    case INIT_CURRENT_ORDER_MESSAGE:
      return {
        ...state, currentOrderMessage: action.payload.message, currentOrderValidationMessage: action.payload.validationMessage,
      }

    case CLEAR_CURRENT_ORDER:
      // очищаем текущий заказ (стираем массив заказов)
      return {
        ...state, currentOrder: ''
      }

    case SET_ORDER_STATUS:
      let newOrders;
      let newOrdersFiltered;
      if (action.payload.order[0] === 1) {
        newOrders = [...state.ordersInfo].map(order => order.id === action.payload.id ? { ...order, status: action.payload.status } : order)
        newOrdersFiltered = [...state.ordersInfoFiltered].map(order => order.id === action.payload.id ? { ...order, status: action.payload.status } : order)
      }

      return {
        ...state, 
        ordersInfo: newOrders,
        ordersInfoFiltered: newOrdersFiltered,
      }

    default:
      return state
  }
}
