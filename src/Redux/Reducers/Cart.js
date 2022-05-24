import { ADDITEM, ADDQUANTITY, REMOVEITEM, REMOVEQUANTITY } from '../Types';
const intialState = {
    cart: [],
    totalprice:0
   
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADDITEM: {
            let temp=[...state.cart]
          
            return {
                ...state,
                cart: action.payload,
               
              
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
            return {
                ...state,
                user: cart,
                
            }
        }
        default:
            return state

    }
}
export default reducer;