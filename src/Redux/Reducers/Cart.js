import { ADDITEM, REMOVEITEM } from '../Types';
const intialState = {
    cart: [],
   
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADDITEM: {
            return {
                ...state,
                cart: action.payload,
              
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