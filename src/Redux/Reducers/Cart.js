import { ADDITEM, ADDQUANTITY, REMOVEITEM, REMOVEQUANTITY } from '../Types';
const intialState = {
    cart: [],
    totalprice:0
   
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADDITEM: {
              
            return {
                ...state,
                cart: action.payload,
                totalprice:action.payload.price
               
              
            }
        }
case ADDQUANTITY:{
    let temp=[...state.cart]
    temp[action.payload.index].quantity=action?.payload?.quantity
    return{
        ...state,
        cart:temp,
        totalprice:action.payload.price+state.totalprice
    }
}
case REMOVEQUANTITY:{
    let temp=[...state.cart]
    temp[action.payload.index].quantity=action?.payload?.quantity
    return{
        ...state,
        cart:temp,
        totalprice:action.payload.price-state.totalprice
    }
}
        
        case REMOVEITEM: {
            let temp=[...state.cart]
           
             
          return{
              ...state,
              cart:temp.filter(item => item.id != action.payload.id)
        }
    }
        default:
            return state

    }
}
export default reducer;